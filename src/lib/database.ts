import mongoose from "mongoose"
require('dotenv').config();

let isConnected = false;

export default async function dbConnect() {

    if(isConnected) return;

    const database = await mongoose.connect('process.env.DATABASE_URL');

    isConnected = database.connections[0].readyState === 1
}