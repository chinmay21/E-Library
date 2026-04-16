import mongoose from "mongoose";

type User = {
    userId: string;
    role: "user" | "admin";
}

const userSchema = new mongoose.Schema<User>({
    userId: {
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

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;