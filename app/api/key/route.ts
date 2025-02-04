import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest) {
    const API_KEY = process.env.API_KEY
    return NextResponse.json({ key: API_KEY })

}