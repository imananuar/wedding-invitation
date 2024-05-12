import prisma from '../../../lib/prisma'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const contacts = await req.json();
    console.log(contacts);
    const createMany = await prisma.user.createMany({
        data: contacts
    })
    return NextResponse.json({msg: "hello world"});
}