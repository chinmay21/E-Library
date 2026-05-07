"use client";

import { MdEdit } from "react-icons/md";
import { BookType } from "./bookCard";
import Modal from "@/utils/modal";
import { useState } from "react";

export default function Books({ books }: {books: BookType[]}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

    const openModal = (book: BookType) => {
        setSelectedBook(book);
        setIsOpen(true);
    }
    return(
        <div className="flex flex-wrap justify-center gap-6 rounded-lg bg-indigo-300">
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
                            <span 
                            className="absolute w-10 h-7 flex justify-center top-5 right-3 rounded-full
                            group hover:bg-black bg-white transition-all ease-in duration-150"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openModal(book);
                            }}
                            >
                                <MdEdit size={25} className="group-hover:text-white"/>
                            </span>
                            <div className="flex flex-col items-center pt-45">
                                <p className="text-lg">Title: {book.title}</p>
                                <p className="text-lg">Description: {book.description}</p>
                                <p className="text-lg">Author: {book.author}</p>
                                <p className="text-lg">Gross Sales: {book.grossSales}</p>
                                <p className="text-lg">Published On:{book?.publishedOn}</p>
                            </div>
                        </a>
                        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} selectedBook={selectedBook} mode="edit"/>
                    </div>
                ))
            }
    </div>
    )
}