import bcrypt from 'bcrypt';
import { z } from 'zod';
import prisma from './prisma';


const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3).max(10).optional()
});

export async function authenticateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error('user Not Found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('incorrect password');
    }

    return user;
}
export async function hashUserPassword(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user) {
        throw new Error('user already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    return hashedPassword
}

export async function validateUserInput(email: string, password: string, name?: string) {
    return userSchema.parse({ email, password, name });
}