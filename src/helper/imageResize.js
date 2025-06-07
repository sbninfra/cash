// app/(admin)/blog/upload-image.tsx
"use client";
import imageCompression from "browser-image-compression";

export default async function imageCompressor({
  maxWidthOrHeight = 1200,
  maxSizeMB = 0.05,
  file = "",
}) {
  if (!file) return;

  try {
    const compressedFile = await imageCompression(file, {
      maxSizeMB: maxSizeMB,
      maxWidthOrHeight: maxWidthOrHeight,
      useWebWorker: true,
      fileType: "image/webp",
    });

    return compressedFile;
  } catch (error) {
    console.error("Error compressing image:", error);
  }
}
