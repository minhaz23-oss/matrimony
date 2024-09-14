import { connect } from "@/lib/db";
import User from "@/lib/models/user.models";
import { NextResponse } from "next/server";

export async function POST(req:any){
    try{
        
       await connect();
       const reqBody = await req.json();
       const {id} = reqBody;
       const user = await User.findOne({_id: id});
       const biodata = user.bioData;
        return NextResponse.json({message: 'success',biodata:biodata},{status:201})
    } catch (error){
        return NextResponse.json({message: error},{status: 400} )
    }
}