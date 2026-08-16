import { NextResponse } from "next/server";

export async function GET() {
    // const {id} = await params
    return NextResponse.json({
        message:"yes i am user"
    })
}