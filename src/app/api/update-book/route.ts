import Book from "@/models/Book";
import { dbConnect } from "@/lib/database";
import { NextResponse } from "next/server";

export default async function PUT(req: Request, { params }: { params: { id: string } }) {
   try{
        const { id } = params;
        
        const body = await req.json();

        await dbConnect();

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                ...body,
            },
            { new: true }
        );

        return NextResponse.json({ success: true, data: updatedBook });
    } catch(error) {
        return NextResponse.json({ success:false, error });
    }
}