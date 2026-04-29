import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/database";
import Book from "@/models/Book";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function BookCards() {
    const { userId } = await auth();

    if(!userId) return redirect("/sign-in");

    await dbConnect();

    const user = await User.findOne({ userId });

    if(user.role !== "user") {
        return ( <div>Unauthorized User</div> );
    }

    const books = await Book.find();
    
    return(
            <div className="flex flex-wrap justify-center gap-6 bg-indigo-300">
                {
                    books.map((book) => (
                        <div 
                            key={book._id}
                        >
                            <a className="bg-indigo-500 w-75 h-100 flex flex-col items-center mt-15 mb-15 relative rounded-lg
                            justify-center hover:scale-105 hover:shadow-lg hover:shadow-yellow-100 transition-all delay-100
                            hover:cursor-pointer"
                            href={book.bookPdf}
                            >
                                <img src={`${book.bookCover}`} loading="lazy" alt="book-cover-image"
                                className="absolute top-0 rounded-lg w-full h-[50%]"
                                />
                                <div className="flex flex-col items-center pt-45">
                                    <p className="text-lg">Title: {book.title}</p>
                                    <p className="text-lg">Description: {book.description}</p>
                                    <p className="text-lg">Author: {book.author}</p>
                                    <p className="text-lg">Gross Sales: {book.grossSales}</p>
                                    <p className="text-lg">Published On:{book?.publishedOn}</p>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
    )
}