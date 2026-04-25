import { dbConnect } from "@/lib/database";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import User from "@/models/User";
import Book from "@/models/Book";

export async function GET() {
    const { userId } = await auth();

    if(!userId) return redirect("/sign-in");

    await dbConnect();

    const user = await User.findOne({ userId });

    if(!user) return Error("No user found");

    if(user.role !== "user") {
        throw new Error("Unauthorized user");
    }

    const books = await Book.find();

    if(!books) {
        throw new Error("No books found");
    }
}