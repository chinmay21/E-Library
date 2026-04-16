"use server";

import { clerkClient, auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function setRole(formdata: FormData) {
    const client = await clerkClient();
    const { userId } = await auth();
    const role = formdata.get("role") as string;
    if(!role || typeof role !== "string") {
        throw new Error("Invalid role");
    }

    const allowedRoles = ["user", "admin"];
    if(!allowedRoles.includes(role)) {
        throw new Error("Invalid role");
    }

    await dbConnect();

    if(!userId) {
        throw new Error("Unauthorized");
    }
    await User.findOneAndUpdate(
        { userId },
        { role },
        { upsert: true, new:true }
    );
    
    await client.users.updateUserMetadata(userId, {
        publicMetadata: {
            role: role,
        },
    }); 

    return redirect("/dashboard");
}