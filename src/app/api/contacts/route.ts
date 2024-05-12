import prisma from '../../../lib/prisma'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const contacts = await req.json();
    console.log(contacts);
    const createMany = await prisma.user.createMany({
        data: contacts
    })
    // const user = await prisma.user.create({
    //     data: {
    //         email: "iman5367@gmail.com",
    //         fullName: "Iman Anuar",
    //         role: "guest",
    //         phoneNumber: 60175259031,
    //         guest: 5
    //     },
    // })
    return NextResponse.json({msg: "hello world"});
}