"use client";

import { createBook } from "@/actions/addBook/action";
import UploadPdf from "@/components/uploadPdf";
import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!pdfUrl) {
      alert("Please upload a PDF file");
      return;
    }

    const signRes = await fetch("/api/sign-cloudinary", {
      method: "POST",
    });

    const { timestamp, signature, cloudName, apiKey } =
      await signRes.json();

    const cloudForm = new FormData();
    cloudForm.append("api_key", apiKey);
    cloudForm.append("timestamp", timestamp);
    cloudForm.append("signature", signature);
    cloudForm.append("folder", "Codehelp");

    const imageFile = formData.get("book-cover") as File;
    cloudForm.append("file", imageFile);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: cloudForm,
      }
    );

    const uploadData = await uploadRes.json();

    if (!uploadData.secure_url) {
      alert("Image upload failed");
      return;
    }

    const finalForm = new FormData();
    finalForm.set("title", formData.get("title") as string);
    finalForm.set("description", formData.get("description") as string);
    finalForm.set("author", formData.get("author") as string);
    finalForm.set("grossSales", formData.get("grossSales") as string);
    finalForm.set("publishedOn", formData.get("publishedOn") as string);

    finalForm.set("bookCover", uploadData.secure_url);
    finalForm.set("bookPdf", pdfUrl!);

    await createBook(finalForm);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="
        relative bg-white rounded-2xl shadow-lg
        w-full max-w-150 md:w-150
        h-auto md:h-135
        max-h-[90vh] overflow-y-auto
        px-4 md:px-20 pt-10 md:pt-15 p-6
      "
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Upload your Book pdf here
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap w-full md:w-screen gap-y-5 pt-5"
        >
          {/* Inputs unchanged */}
          <div className="w-full space-x-18">
            <label>Enter book title:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              className="focus-visible:ring focus-visible:ring-blue-400 outline-1 rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
            />
          </div>

          <div className="w-full space-x-5">
            <label>Enter book description:</label>
            <input
              type="text"
              name="description"
              placeholder="Enter book description"
              className="focus-visible:ring focus-visible:ring-blue-400 outline-1 rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
            />
          </div>

          <div className="w-full space-x-13">
            <label>Enter book author:</label>
            <input
              type="text"
              name="author"
              placeholder="Enter book author"
              className="focus-visible:ring focus-visible:ring-blue-400 outline-1 rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
            />
          </div>

          <div className="w-full space-x-4">
            <label>Enter book gross sales:</label>
            <input
              type="text"
              name="grossSales"
              placeholder="Enter book gross sales"
              className="focus-visible:ring focus-visible:ring-blue-400 outline-1 rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
            />
          </div>

          <div className="w-full space-x-2">
            <label>Enter book published on:</label>
            <input
              type="text"
              name="publishedOn"
              placeholder="Enter book published on"
              className="focus-visible:ring focus-visible:ring-blue-400 outline-1 rounded-lg px-5 focus-visible:text-blue-800 focus-visible:outline-none transition-all ease-out"
            />
          </div>

          <div className="w-full space-x-5">
            <label>Submit Book Cover:</label>
            <input
              type="file"
              name="book-cover"
              accept="image/*"
              className="file:bg-neutral-400 file:hover:bg-black file:hover:text-neutral-50 file:transition-all file:duration-200 file:mr-20 file:px-3 file:rounded-lg file:cursor-pointer"
            />
          </div>

          <div className="w-full space-x-10 flex items-center">
            <label>Submit Book Pdf:</label>
            <UploadPdf onUpload={setPdfUrl} />
          </div>

          {/* Button fix */}
          <button
            type="submit"
            onClick={() => setLoading(true)}
            className="
            text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
            hover:shadow-blue-900 hover:shadow-lg
            bg-[#FFC107] p-1 py-2 px-3 w-50 cursor-pointer
            transition-all ease-in mx-auto mt-10
            md:right-140 md:bottom-10
          "
          >
            {
              loading ? (<p>Submitting...</p>) : (<p>Submit</p>)
            }
            <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-in top-0 h-11 w-50 rounded-lg -z-5"></div>
          </button>
        </form>

        {/* Close */}
        <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-200 bg-red-600 px-3 rounded-lg
            hover:cursor-pointer hover:bg-red-900 transition-all duration-150 group"
        >
            <p className="transition-all duration-500 delay-75 group-hover:rotate-360">✕</p>
        </button>
      </div>
    </div>
  );
}