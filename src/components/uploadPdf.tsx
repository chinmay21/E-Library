"use client";
import { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import type { OutputCollectionState } from "@uploadcare/react-uploader";

const pubKey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY;

type UploadPdfProps = {
  onUpload: (url: string) => void;
};

export default function UploadPdf({ onUpload }: UploadPdfProps) {

  const handleChangeEvent = (e: OutputCollectionState) => {
    const file = e.successEntries[0];

    if (file?.cdnUrl) {
      onUpload(file.cdnUrl); // ✅ send URL to parent
    }
  };

  return (
    <FileUploaderRegular
      pubkey={pubKey!}
      onChange={handleChangeEvent}
    />
  );
}