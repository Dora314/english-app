import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/lib/db";

export async function PUT(request: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const avatarFile = formData.get("avatar") as File;
    
    // TODO: Upload avatar to storage (e.g., AWS S3, Cloudinary)
    const avatarUrl = "uploaded_avatar_url"; // Replace with actual upload logic
    
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { avatar: avatarUrl },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update avatar" },
      { status: 500 }
    );
  }
} 