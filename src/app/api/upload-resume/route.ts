import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Forward the file directly to Cloudinary using their unsigned upload preset
    const cloudinaryForm = new FormData();
    cloudinaryForm.append("file", file);
    cloudinaryForm.append("upload_preset", "blog-img");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/mccollins-media/auto/upload",
      {
        method: "POST",
        body: cloudinaryForm,
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Failed to upload resume to Cloudinary" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      url: data.secure_url,
    });
  } catch (error: any) {
    console.error("Resume upload error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload resume to Cloudinary" },
      { status: 500 }
    );
  }
}
