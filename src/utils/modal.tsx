"use client"

import { useState } from "react";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    const [file, setFile] = useState<File | null>(null);
    
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      
        {/* Backdrop */}
        <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative px-20 pt-15 bg-white rounded-2xl h-125 p-6 w-150 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Upload your Book pdf here</h2>

            <form className="flex flex-wrap w-screen gap-y-5 pt-5">
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

                <input
                    className="file:bg-neutral-400 file:mr-20 file:px-3 file:rounded-lg file:hover:cursor-pointer"
                    type="file"
                    name="file"
                    accept="application/pdf"
                    onChange={(e) => {
                        if(e.target.files) {
                            setFile(e.target.files[0]);
                        }
                    }}
                />
                
                <button
                    type="submit"
                    className="text-lg text-blue-900 group rounded-lg relative right-179 z-10 hover:text-white
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