import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    },
    grossSales:  {
        type: String,
        required: true
    },
    publishedOn:  {
        type: String,
    },
    bookPdf: {
        type: String,
        required: true
    },
    bookCover:{
        type: String,
        required: true
    },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;