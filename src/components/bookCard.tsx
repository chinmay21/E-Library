import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/database";
import Book from "@/models/Book";
import User from "@/models/User";
import { redirect } from "next/navigation";
import Books from "./books";

export type BookType = {
    _id: string;
    title: string;
    description: string;
    author: string;
    grossSales: number;
    publishedOn: string;
    bookPdf: string;
    bookCover: string;
    userId: string;
}

export async function BookCards() {
    const { userId } = await auth();

    if(!userId) return redirect("/sign-in");

    await dbConnect();

    const user = await User.findOne({ userId });
    
    let dbBooks:any[] = [];

    if(user.role === "user") {
        dbBooks = await Book.find();
    }
    else if(user.role === "admin") {
        dbBooks = await Book.find({ userId: user._id });
    }

    const books: BookType[] = JSON.parse(JSON.stringify(dbBooks));
    
    return(
            <Books books={books}/>
    )
}