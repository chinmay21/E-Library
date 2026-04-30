"use client";

import { useRouter } from "next/navigation";

export default function DashboardButton() {
    const router = useRouter();
    return(
        <button 
            onClick={() => {
                router.push("/dashboard");
            }}
            className="rounded-md cursor-pointer p-1 px-3 text-blue-500 bg-indigo-200
            hover:bg-indigo-300 transition-all ml-10 ease-in duration-200 hover:scale-110"
        >
            Dashboard
        </button>
    )
}