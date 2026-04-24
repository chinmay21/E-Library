"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import Book from "@/models/Book";
import { error } from "console";

export async function createBook(formdata: FormData) {
    const { userId } = await auth();

    if(!userId) return redirect("/sign-in");

    await dbConnect();

    const user = await User.findOne({ userId });

    if(!user) {
        return error("No user found");
    }

    if(user.role !== "admin") {
        return error("Unauthorized user");
    }

    const title = formdata.get("title") as string;
    const description = formdata.get("description") as string;
    const author = formdata.get("author") as string;
    const grossSales = formdata.get("grossSales") as string;
    const publishedOn = formdata.get("publishedOn") as string; 
    const bookpdf = formdata.get("file") as String;
    const bookData = await Book.create(
        {
            title:title,
            description:description,
            author:author,
            grossSales:grossSales,
            publishedOn:publishedOn,
            bookpdf:bookpdf,
        }
    )

    if(!bookData) {
        throw new Error("Unable to create book");
    }
}