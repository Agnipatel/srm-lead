import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    // In a real app, use environment variables like process.env.ADMIN_PASSWORD
    // For this demonstration, we'll hardcode it to "admin123"
    const validPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === validPassword) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "admin_auth",
        value: "true",
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");
  return NextResponse.json({ success: true }, { status: 200 });
}
