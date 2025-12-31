import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db;
}

// this code initializes a Prisma client instance for database interaction.