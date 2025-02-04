import { hashUserPassword, validateUserInput } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Prisma } from '@prisma/client'; // Correct import

import { NextRequest, NextResponse } from "next/server";

import { z } from "zod"

export async function POST(req: NextRequest) {
    const { email, password, name } = await req.json()
    try {
        await validateUserInput(email, password, name)
        const hashedPasswords = await hashUserPassword(email, password)
        await prisma.user.create({ data: { email, password: hashedPasswords, name } })

        return NextResponse.json('user added successfully', { status: 200 })

    } catch (error: any) {
        let statusCode = 500;
        let message = 'An unexpected error occurred';

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.log('Prisma Error Details:', error); // Log the whole error object

            if (error.code === 'P2002') {
                statusCode = 409;
                message = 'User with this email already exists';
            } else {
                statusCode = 400;
                message = 'Database error occurred,make sure you are online...';
            }
        } else if (error instanceof z.ZodError) {
            statusCode = 400;
            message = 'Validation failed';
        }

        console.error('Error occurred:', error);
        return NextResponse.json({ message, ...(error instanceof z.ZodError ? { errors: error.errors } : {}) }, { status: statusCode });
    }
}

export async function GET(req: NextRequest) {
    const { id } = await req.json()
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }, include: {
                favoriteRecipes: true,
            }
        })
        return NextResponse.json(user, { status: 200 })

    } catch (error: any) {
        return NextResponse.json(error.message, { status: 400 })
    }
}