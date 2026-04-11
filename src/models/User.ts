import mongoose from "mongoose";

type User = {
    clerkId: string;
    role: "user" | "admin";
}

const userSchema = new mongoose.Schema<User>({
    clerkId: {
        type:String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        required: true,
    }
});

const userModel = mongoose.model("User", userSchema);
export default userModel;