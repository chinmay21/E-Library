"use client";

import { useState } from "react";
import Modal from "@/utils/modal";

export default function UploadBookBtn() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
                hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] p-1 py-2 px-3 w-50 block cursor-pointer
                transition-all ease-in mx-auto mt-15"
            >
                Upload Book
                <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                    transition-transform duration-150 ease-in top-0 h-11 w-50 rounded-lg -z-5">
                </div>
            </button>
            
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}