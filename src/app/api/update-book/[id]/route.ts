import Book from "@/models/Book";
import { dbConnect } from "@/lib/database";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
   try{
        const { id } = await params;
        
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