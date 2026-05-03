"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UploadBookBtn from "@/components/uploadBookBtn";

export default function AdminDashboardPage() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    if (!isSignedIn) {
        redirect("/sign-in");
    }

    if (user?.publicMetadata.role !== "admin") {
        alert("Unauthorized User");
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-indigo-900 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-indigo-800 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-100 text-center">
                    Welcome to Admin Dashboard
                </h1>

                <div className="mt-6 sm:mt-8 flex justify-center">
                    <UploadBookBtn />
                </div>

            </div>
        </div>
    );
}