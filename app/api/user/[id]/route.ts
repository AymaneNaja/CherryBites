import { hashUserPassword, validateUserInput } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Prisma } from '@prisma/client'; // Correct import

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const id = Number(params.id)
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }, include: {
                favoriteRecipes: true,
            }
        })
        return NextResponse.json(user, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}