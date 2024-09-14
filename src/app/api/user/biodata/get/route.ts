import { connect } from "@/lib/db";
import User from "@/lib/models/user.models";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(){
    try {
        await connect();
        const loggedInUser = await currentUser();
        const currentUserEmail = loggedInUser?.emailAddresses[0].emailAddress;

        const user = await User.findOne({email: currentUserEmail});

        const biodata = user.bioData;

       return NextResponse.json({message: 'success', biodata: biodata},{status: 201}) 
    } catch (error) {
       return NextResponse.json({message: error},{status: 400}) 
    }
}