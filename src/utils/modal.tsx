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
        <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Upload your Book pdf here</h2>

            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter book title"
                />
                <label htmlFor="title">Enter book title</label>

                <input
                    type="text"
                    name="description"
                    placeholder="Enter book description"
                />
                <label htmlFor="title">Enter book description</label>

                <input
                    type="text"
                    name="author"
                    placeholder="Enter book author"
                />
                <label htmlFor="title">Enter book author</label>

                <input
                    type="text"
                    name="grossSales"
                    placeholder="Enter book gross sales"
                />
                <label htmlFor="title">Enter book gross sales</label>

                <input
                    type="text"
                    name="publishedOn"
                    placeholder="Enter book published on"
                />
                <label htmlFor="title">Enter book published on</label>

                <input
                    type="file"
                    name="file"
                    accept="application/pdf"
                    onChange={(e) => {
                        if(e.target.files) {
                            setFile(e.target.files[0]);
                        }
                    }}
                />

            </form>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500"
            >
            ✕
            </button>
        </div>
    </div>
    )
}