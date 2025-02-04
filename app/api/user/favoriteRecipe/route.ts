import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const { id, userId } = await req.json()
    try {
        await prisma.favoriteRecipes.create({ data: { id, userId } })
        return NextResponse.json('Recipe has been added successfully', { status: 200 })
    } catch (err: any) {
        return NextResponse.json(err.message, { status: 400 })
    }

}
export async function DELETE(req: NextRequest) {
    const { id, userId } = await req.json()
    try {
        await prisma.favoriteRecipes.delete({ where: { id, userId } })
        return NextResponse.json('Recipe has been deleted successfully', { status: 200 })
    } catch (err: any) {
        return NextResponse.json(err.message, { status: 400 })
    }

}
