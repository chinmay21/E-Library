import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import User from "@/models/User";

export default async function DashboardPage() {
    const { userId } = await auth();

    if(!userId) {
        return redirect("/sign-in");
    }

    const user = await User.findOne({ userId });

    if(!user?.role) {
        return redirect("/onboarding");
    }

    if(user.role === "admin") {
        return redirect("/dashboard/admin");
    }

    return redirect("/dashboard/user");

}