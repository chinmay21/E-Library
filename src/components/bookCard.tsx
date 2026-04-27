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
        <div>
            {
                books.map((book) => (
                    <div 
                        key={book._id}
                    >
                        <div>
                            <p>{book.title}</p>
                            <p>{book.description}</p>
                            <p>{book.author}</p>
                            <p>{book.grossSales}</p>
                            <p>{book?.publishedOn}</p>
                            <img src={`${book.bookCover}`} width={100} height={100}/>
                            <iframe src={`${book.bookPdf}`} width={100} height={100}></iframe>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}