// app/api/upload/route.js
import r2 from "@/lib/rs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const userId = formData.get("userId") || "";
  const reqFileName = formData.get("name") || "file";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileExt = file.name.split(".").pop();
  const fileName = `${userId}-${reqFileName}.${fileExt}`;

  try {
    await r2
      .putObject({
        Bucket: "romify",
        Key: `uploads/${fileName}`,
        Body: buffer,
        ContentType: file.type,
      })
      .promise();

    const fileUrl = `https://pub-cd52ecd7dcb5464b8b09d3abb437d0c5.r2.dev/uploads/${fileName}`;

    console.log("File uploaded:", fileUrl);

    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
