import mongoose from "mongoose"

let isConnected = false;

export async function dbConnect() {

    if(isConnected) return;

    const url = process.env.DATABASE_URL;

    if(!url) {
        throw new Error("DATABASE_URL is not defined");
    }

    const database = await mongoose.connect(url);

    isConnected = database.connections[0].readyState === 1
}