import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        course: data.course || "",
        quota: data.quota || "",
      },
    });
    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
