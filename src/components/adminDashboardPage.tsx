"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UploadBookBtn from "@/components/uploadBookBtn";

export default function AdminDashboardPage() {
    const { isSignedIn, isLoaded } = useUser();

    if(!isLoaded) return <div>Loading...</div>

    if(!isSignedIn) {
        redirect("/sign-in");
    }
    return(
        <div>
            <div className="bg-indigo-900 w-screen h-100">
                <div>
                    <p className="text-4xl font-semibold text-blue-100 mx-auto w-fit pt-15">
                        Welcome to Admin Dashboard
                    </p>
                    <UploadBookBtn/>
                </div>
            </div>
        </div>
    )
}