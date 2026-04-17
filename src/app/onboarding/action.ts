"use server";

import { clerkClient, auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function setRole(formdata: FormData) {
    const client = clerkClient();
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const role = formdata.get("role") as string;

    if (!role) {
        throw new Error("Role is required");
    }

    const allowedRoles = ["user", "admin"];
    if (!allowedRoles.includes(role)) {
        throw new Error("Invalid role");
    }

    await dbConnect();

    const userRole = await User.findOne({ userId });

    if (userRole) {
        return redirect("/dashboard");
    }

    await User.create({
        userId,
        role,
    });

    await (await client).users.updateUserMetadata(userId, {
        publicMetadata: {
            role,
        },
    });

    return redirect("/dashboard");
}