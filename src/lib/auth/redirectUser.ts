import User from "@/models/User";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dbConnect } from "../database";

export async function redirectUser() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  await dbConnect();

  const user = await User.findOne({ userId });

  if (!user) {
    redirect("/onboarding");
  }

  if (user.role === "admin") {
    redirect("/dashboard/admin");
  }

  if (user.role === "user") {
    redirect("/dashboard/user");
  }

  redirect("/onboarding");
}