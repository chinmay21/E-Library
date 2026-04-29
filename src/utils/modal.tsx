"use client"

import { createBook } from "@/actions/addBook/action";
import UploadPdf from "@/components/uploadPdf";
import { useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    if(!isOpen) return null;

    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    // ✅ Upload PDF using Uploadcare
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();   

        const form = e.currentTarget;
        const formData = new FormData(form);

        if (!pdfUrl) {
            alert("Please upload a PDF file");
            return;
        }
       
        console.log("PDF URL:", pdfUrl);

        // ✅ Cloudinary (image upload)
        const signRes = await fetch("/api/sign-cloudinary", {
            method: "POST",
        });

        const { timestamp, signature, cloudName, apiKey } = await signRes.json();

        const cloudForm = new FormData();
        cloudForm.append("api_key", apiKey);
        cloudForm.append("timestamp", timestamp);
        cloudForm.append("signature", signature);
        cloudForm.append("folder", "Codehelp");

        const imageFile = formData.get("book-cover") as File;

        cloudForm.append("file", imageFile);

        const uploadRes = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, // ✅ FIXED
            {
                method: "POST",
                body: cloudForm,
            }
        );

        const uploadData = await uploadRes.json();

        if (!uploadData.secure_url) {
            alert("Image upload failed");
            return;
        }

        // ✅ Final form
        const finalForm = new FormData();
        finalForm.set("title", formData.get("title") as string);
        finalForm.set("description", formData.get("description") as string);
        finalForm.set("author", formData.get("author") as string);
        finalForm.set("grossSales", formData.get("grossSales") as string);
        finalForm.set("publishedOn", formData.get("publishedOn") as string);

        finalForm.set("bookCover", uploadData.secure_url);
        finalForm.set("bookPdf", pdfUrl!);

        console.log("THIS IS FINALFORM:", finalForm);
        console.log("THIS IS PDFURL:", pdfUrl);

        await createBook(finalForm);

        onClose();
    };

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      
        {/* Backdrop */}
        <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative px-20 pt-15 bg-white rounded-2xl h-135 p-6 w-150 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Upload your Book pdf here</h2>

            <form onSubmit={handleSubmit} className="flex flex-wrap w-screen gap-y-5 pt-5">
                <div className="w-full space-x-18">
                    <label htmlFor="title">Enter book title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter book title"
                        className="focus-visible:ring focus-visible:ring-blue-400 outline-1 
                        rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
                    />
                </div>

                <div className="w-full space-x-5">
                    <label htmlFor="title">Enter book description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter book description"
                        className="focus-visible:ring focus-visible:ring-blue-400 outline-1 
                        rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
                    />
                </div>
                
                <div className="w-full space-x-13">
                    <label htmlFor="title">Enter book author:</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="Enter book author"
                        className="focus-visible:ring focus-visible:ring-blue-400 outline-1 
                        rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
                    />
                </div>

                <div className="w-full space-x-4">
                    <label htmlFor="title">Enter book gross sales:</label>
                    <input
                        type="text"
                        name="grossSales"
                        placeholder="Enter book gross sales"
                        className="focus-visible:ring focus-visible:ring-blue-400 outline-1 
                        rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
                    />

                </div>
                
                <div className="w-full space-x-2">
                    <label htmlFor="title">Enter book published on:</label>
                    <input
                        type="text"
                        name="publishedOn"
                        placeholder="Enter book published on"
                        className="focus-visible:ring focus-visible:ring-blue-400 outline-1 
                        rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
                    />
                </div>

                <div className="w-full space-x-5">
                    <label htmlFor="book-cover">Submit Book Cover:</label>
                    <input
                        className="file:bg-neutral-400 file:hover:bg-black file:hover:text-neutral-50
                        file:transition-all file:delay-75 file:duration-200 file:mr-20 file:px-3 file:rounded-lg
                        file:hover:cursor-pointer"
                        type="file"
                        name="book-cover"
                        accept="image/*"
                    />
                </div>       

                <div className="w-full space-x-10 flex items-center">
                    <label htmlFor="UploadPdf">Submit Book Pdf:</label>
                    {/* <input
                        className="file:bg-neutral-400 file:hover:bg-black file:hover:text-neutral-50
                        file:transition-all file:delay-75 file:duration-200 file:mr-20 file:px-3 file:rounded-lg
                        file:hover:cursor-pointer"
                        type="file"
                        name="file"
                        accept="application/pdf"
                    />  */}
                    <UploadPdf onUpload={setPdfUrl}/>
                </div>
                
                <button
                    type="submit"
                    className="text-lg text-blue-900 group rounded-lg relative right-140 bottom-10 z-10 hover:text-white
                    hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] p-1 py-2 px-3 w-50 block cursor-pointer
                    transition-all ease-in mx-auto mt-15"
                >
                    Submit
                    <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                        transition-transform duration-150 ease-in top-0 h-11 w-50 rounded-lg -z-5">
                    </div>
                </button>

            </form>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-200 bg-red-600 px-3 rounded-lg
            hover:cursor-pointer hover:bg-red-900 transition-all duration-150 group"
            >
                <p className="transition-all duration-500 delay-75 group-hover:rotate-360">✕</p>
            </button>
        </div>
    </div>
    )
}