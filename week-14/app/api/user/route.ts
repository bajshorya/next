import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();
export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({
    email: user?.username,
    name: "baj",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    //   console.log(req.headers.get("authorization"));
    //   console.log(req.nextUrl.searchParams.get("name"));
    return NextResponse.json({
      body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while signing up",
      },
      {
        status: 411,
      }
    );
  }
}
