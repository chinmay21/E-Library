import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import { redirect } from "next/navigation";
import UploadBookBtn from "@/components/uploadBookBtn";
import { BookCards } from "./bookCard";

export default async function AdminDashboardPage() {
const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    await dbConnect();

    const user = await User.findOne({ userId });

    if (user.role !== "admin") {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-indigo-900 py-15 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-indigo-800 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-100 text-center">
                    Welcome to Admin Dashboard
                </h1>

                <div className="mt-6 mb-10 sm:mt-8 flex justify-center">
                    <UploadBookBtn />
                </div>

                <div className="py-10">
                    <BookCards/>
                </div>


            </div>
        </div>
    );
}