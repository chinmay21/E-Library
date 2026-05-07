import { auth } from "@clerk/nextjs/server";
import User from "@/models/User";
import { dbConnect } from "@/lib/database";
import { redirect } from "next/navigation";
import { BookCards } from "@/components/bookCard";

export default async function UserDashboard() {
    const { userId } = await auth();
    
    if(!userId) return redirect("/sign-in");

    await dbConnect();

    const user = await User.findOne({ userId });

    if(user.role !== "user") {
        return ( <div>Unauthorized User</div> );
    }

    return (
        <div>
            <BookCards/>
        </div>
    );
}