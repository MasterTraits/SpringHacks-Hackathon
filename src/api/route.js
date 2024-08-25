import Users from "@/app/(models)/Users";
import { NextResponse } from "next/server";


export async function GET(res) {
  try {
    const users = await Users.find()
    return NextResponse.json(users, {status: 200})
  } catch (error) {
    return NextResponse.error({message: "Error", error}, {status: 500})
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    await Users.create(userData)

    return NextResponse.json({message: "User created successfully"}, {status: 201}) 
  } catch (error) {
    return NextResponse.error({message: "Error", error}, {status: 500})
  }
}

