import { NextResponse } from "next/server";

export async function POST(request) {
  const body=await request.json();
  const {email, password} = body  
  console.log(await body)
  return NextResponse.json({
    message:"successful"
  })
}