import { connect } from "@/lib/db";
import User from "@/lib/models/user.models";
import { NextResponse } from "next/server";
import dayjs from "dayjs";

export async function POST(req: any) {
  try {
    await connect();
    const reqBody = await req.json();
    const { biodataType, maritalStatus, division, district, upazilla } = reqBody;
    console.log(biodataType, maritalStatus, division, district, upazilla )
    const minAge = reqBody?.minAge;
    const maxAge = reqBody?.maxAge;
    const education = reqBody?.education;
    const minHeight = reqBody?.minHeight;
    const maxHeight = reqBody?.maxHeight;
    const complexion = reqBody?.complexion;
    const fiqh = reqBody?.fiqh;

    const query: any = {
      $and: [
        {
          "bioData.generalInfo.biodataType": {
            $regex: biodataType,
            $options: "i",
          },
        },
        {
          
            "bioData.generalInfo.maritalStatus": maritalStatus,  // Exact match
          
        },
      ],
    };

    // Add the location conditions to $or
    const locationConditions = [];
    if (division) locationConditions.push({ "bioData.address.division": { $regex: division, $options: "i" } });
    if (district) locationConditions.push({ "bioData.address.district": { $regex: district, $options: "i" } });
    if (upazilla) locationConditions.push({ "bioData.address.upazilla": { $regex: upazilla, $options: "i" } });

    if (locationConditions.length > 0) {
      query.$and.push({ $or: locationConditions });
    }

    // Handle age filtering
    if (minAge || maxAge) {
      const currentDate = dayjs();
      const minDOB = minAge ? currentDate.subtract(minAge, "year").format("YYYY-MM-DD") : null;
      const maxDOB = maxAge ? currentDate.subtract(maxAge, "year").format("YYYY-MM-DD") : null;

      if (minDOB || maxDOB) {
        query.$and.push({
          "bioData.generalInfo.birthYear": {
            ...(minDOB && { $lte: minDOB }),
            ...(maxDOB && { $gte: maxDOB }),
          },
        });
      }
    }

    // Handle height filtering
    if (minHeight || maxHeight) {
      const minInches = minHeight ? convertHeightToInches(minHeight) : null;
      const maxInches = maxHeight ? convertHeightToInches(maxHeight) : null;

      query.$and.push({
        "bioData.generalInfo.height": {
          ...(minInches && { $gte: minInches }),
          ...(maxInches && { $lte: maxInches }),
        },
      });
    }

    // Handle education, complexion, and fiqh
    if (education) {
      query.$and.push({ "bioData.education.educationMethod": { $regex: education, $options: "i" } });
    }

    if (complexion) {
      query.$and.push({ "bioData.generalInfo.complexion": { $regex: complexion, $options: "i" } });
    }

    if (fiqh) {
      query.$and.push({ "bioData.personalInfo.fiqh": { $regex: fiqh, $options: "i" } });
    }

    const biodata = await User.find(query, { bioData: 1, _id: 1 });

    if (biodata.length === 0) {
      return NextResponse.json({ message: "No biodata found" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "success", biodata },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

// Convert height from "5'6''" to inches
function convertHeightToInches(height: string): number {
  const [feet, inches] = height.split("'").map(part => parseInt(part, 10) || 0);
  return feet * 12 + inches;
}
