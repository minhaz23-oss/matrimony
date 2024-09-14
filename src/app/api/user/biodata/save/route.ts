import { connect } from "@/lib/db";
import User from "@/lib/models/user.models";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
export async function POST(req: any) {
  try {
    await connect();
    const loggedInUser = await currentUser();
    const currentEmail = loggedInUser?.emailAddresses[0].emailAddress;
    const reqBody = await req.json();

    const updatedInfo = {
      ...reqBody,
      isVerified: false
    }
    
    const updatedUser = await User.findOneAndUpdate(
        { email: currentEmail },
        { $set: { bioData: updatedInfo } }, 
        { new: true } 
      );

 
    
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
