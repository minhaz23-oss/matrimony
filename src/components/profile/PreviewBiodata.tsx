"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  educationTableInfo,
  expectedPartnersTableInfo,
  familyTableInfo,
  marriageRelatedTableInfo,
  occupationalTableInfo,
  personalTableInfo,
  pledgeTableInfo,
  contactTableInfo
} from "@/constraints/script";
import Loader from "../Loader";
interface Biodata {
  generalInfo?: {
    biodataType?: string;
    maritalStatus?: string;
    birthYear?: string;
    height?: string;
    complexion?: string;
    weight?: string;
    bloodGroup?: string;
    nationality?: string;
  };
  address?: {
    country?: string;
    district?: string;
    division?: string;
    grewUpAt?: string;
    upazilla?: string;
  };
  education?: {
    educationMethod: string;
    highestEducation: string;
    studyUpTo: string;
    sscPassYear: string;
    sscGroup: string;
    sscResult: string;
    hscPassYear: string;
    hscGroup: string;
    hscResult: string;
    diplomaSubject: string;
    diplomaInstitute: string;
    diplomaPassYear: string;
    graduationSubject: string;
    graduationInstitute: string;
    graduationPassYear: string;
    doctorateSubject: string;
    doctorateInstitute: string;
    doctoratePassYear: string;
    qawmiInstitute: string;
    qawmiResult: string;
    qawmiPassYear: string;
    takhasusPassYear: string;
    takhasusResult: string;
    takhasusInstitute: string;
    takhassusSubject: string;
  };
  familyInfo?: {
    fathersName?: string;
    isFatherAlive?: string;
    fathersProfession?: string;
    mothersName?: string;
    isMotherAlive?: string;
    mothersProfession?: string;
    brotherCount?: string;
    sisterCount?: string;
    familyStatus?: string;
    financialDesc?: string;
    religiousStatus?: string;
  };
  personalInfo?: {
    clothes?: string;
    beard?: string;
    aboveAnkles?: string;
    niqab?: string;
    prayers?: string;
    complyingMahram?: string;
    quranRecite?: string;
    fiqh?: string;
    mazarBelief?: string;
    favouriteScholars?: string;
    hobbies?: string;
    mobileNumber?: string;
    imgUrl?: string;
  };
  occupationalInfo?: {
    monthlyIncome: string;
    occupation: string;
    professionDesc: string;
  };
  marriageRelatedInfo?: {
    gurdiansAgreement?: string,
    wifeInVeil?: string,
    wifeStudyAfterMarriage?: string,
    wifeJobAfterMarriage?: string,
    afterMarriageLiving?: string,
    giftFromBrides?: string,
    whyGettingMarried?: string,
    studyAfterMarriage?: string,
    jobAfterMarriage?: string,
  };
  expectedPartnersInfo?: {
    partnersMinAge?: string,
    partnersMaxAge?: string,
    partnersComplexion?: string,
    partnersHeight?: string,
    partnersEducation?: string,
    partnersDistrict?: string,
    partnersProfession?: string,
    partnersQualities?: string,
    partnersMaritalStatus?: string,
    partnersFinancialStatus?: string,
  };
  pledge?: {
    parentsAgreementInSubmitting?: string,
    testifyInformation?: string,
    informationResponsibility?: string,
  };
  contact?: {
    name?: string,
    gurdiansMobileNum?: string,
    relationWithGurdian?: string,
    gurdiansEmail?: string,
  }

}

const PreviewBiodata = ({setCurrentPage}:any) => {
  const [biodata, setBiodata] = useState<Biodata>({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getBiodata = async () => {
      try {
        const res = await axios.get("/api/user/biodata/get");
        console.log(res.data.biodata);
        setBiodata(res.data.biodata);
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    };
    getBiodata();
  }, []);

  if(loading) {
    return (
      <div className=" w-full h-screen flex justify-center items-center">
        <Loader color='blue' />
      </div>
    ) 
  }

  return (
    <section className="  py-[30px] px-[20px] sm:px-[50px]  max-w-full min-h-screen">
      {biodata && Object.keys(biodata).length > 0 && <h1 className="text-blue  text-[35px] mb-3">Preview Biodata</h1>}
      
      {biodata && Object.keys(biodata).length > 0 ? 
      <div className="pb-20 sm:pb-0 w-full min-h-screen flex sm:flex-row flex-col gap-10">
        <div className=" w-[300px] border-2 border-blue rounded-md h-fit flex flex-col items-center p-3">
          <img src="/profile.jpg" className="w-32 h-32 rounded-full" />
          <div className=" w-full">
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%]">
                    Biodata Type
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.biodataType || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Marital Status
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.maritalStatus || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Birth Year
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.birthYear || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Height
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.height || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Complexion
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.complexion || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Weight
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.weight || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Blood Group
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.bloodGroup || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="  w-full mt-4">
              <thead>
                <tr>
                  <th className="text-blue border border-slate-600 w-[50%] ">
                    Nationality
                  </th>
                  <th className="border border-slate-600 text-[14px]">
                    {biodata?.generalInfo?.nationality || "loading..."}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className=" w-full sm:w-[calc(100%-300px)] min-h-[100vh]   ">
          <table className="w-full border-collapse border border-blue rounded-md table-fixed">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/2 border border-blue p-2 font-semibold break-words">
                  Present Address
                </td>
                <td className="w-1/2 border border-blue p-2 break-words">
                  {biodata?.address
                    ? `${biodata?.address?.division}, ${biodata?.address?.country}, ${biodata?.address?.upazilla}, ${biodata?.address?.district}`
                    : "loading..."}
                </td>
              </tr>
              <tr>
                <td className="w-1/2 border border-blue p-2 font-semibold break-words">
                  Permanent Address
                </td>
                <td className="w-1/2 border border-blue p-2 break-words">
                  {biodata?.address
                    ? `${biodata?.address?.division}, ${biodata?.address?.country}, ${biodata?.address?.upazilla}, ${biodata?.address?.district}`
                    : "loading..."}
                </td>
              </tr>
              <tr>
                <td className="w-1/2 border border-blue p-2 font-semibold break-words">
                  Where Did You Grow Up?
                </td>
                <td className="w-1/2 border border-blue p-2 break-words">
                  {biodata?.address
                    ? `${biodata?.address?.grewUpAt}`
                    : "loading..."}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Education
                </th>
              </tr>
            </thead>
            <tbody>
              {educationTableInfo.map(
                (val) =>
                  biodata?.education?.[
                    val.key as keyof Biodata["education"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.education[
                            val.key as keyof Biodata["education"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Family Info
                </th>
              </tr>
            </thead>
            <tbody>
              {familyTableInfo.map(
                (val) =>
                  biodata?.familyInfo?.[
                    val.key as keyof Biodata["familyInfo"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.familyInfo[
                            val.key as keyof Biodata["familyInfo"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Personal Information
                </th>
              </tr>
            </thead>
            <tbody>
              {personalTableInfo.map(
                (val) =>
                  biodata?.personalInfo?.[
                    val.key as keyof Biodata["personalInfo"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.personalInfo[
                            val.key as keyof Biodata["personalInfo"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Occupational Information
                </th>
              </tr>
            </thead>
            <tbody>
              {occupationalTableInfo.map(
                (val) =>
                  biodata?.occupationalInfo?.[
                    val.key as keyof Biodata["occupationalInfo"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.occupationalInfo[
                            val.key as keyof Biodata["occupationalInfo"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Marriage Related Information
                </th>
              </tr>
            </thead>
            <tbody>
              {marriageRelatedTableInfo.map(
                (val) =>
                  biodata?.marriageRelatedInfo?.[
                    val.key as keyof Biodata["marriageRelatedInfo"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.marriageRelatedInfo[
                            val.key as keyof Biodata["marriageRelatedInfo"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Expected Life Partners Information
                </th>
              </tr>
            </thead>
            <tbody>
              {expectedPartnersTableInfo.map(
                (val) =>
                  biodata?.expectedPartnersInfo?.[
                    val.key as keyof Biodata["expectedPartnersInfo"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.expectedPartnersInfo[
                            val.key as keyof Biodata["expectedPartnersInfo"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Pledge
                </th>
              </tr>
            </thead>
            <tbody>
              {pledgeTableInfo.map(
                (val) =>
                  biodata?.pledge?.[
                    val.key as keyof Biodata["pledge"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td className="w-1/2 border border-blue p-2">
                        {
                          biodata.pledge[
                            val.key as keyof Biodata["pledge"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <table className="w-full border-collapse border border-blue rounded-md table-fixed mt-4">
            <thead>
              <tr>
                <th colSpan={2} className="border border-blue p-2 text-blue">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {contactTableInfo.map(
                (val) =>
                  biodata?.contact?.[
                    val.key as keyof Biodata["contact"]
                  ] && (
                    <tr key={val.key}>
                      <td className="w-1/2 border border-blue p-2 font-semibold">
                        {val.label}
                      </td>
                      <td
                      style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                      className="w-1/2 border border-blue p-2">
                        {
                          biodata.contact[
                            val.key as keyof Biodata["contact"]
                          ]
                        }
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div> :
       <div className=" w-full  flex flex-col items-center">
         <h1 className=' leading-none text-center font-bold text-[30px] text-red-500'>You haven't created your biodata yet</h1>
         <button onClick={() => setCurrentPage('editBiodata')} className="mt-5 px-5 sm:px-20 py-2 bg-blue rounded-md text-white">Go create biodata</button>
      </div> }
      
    </section>
  );
};

export default PreviewBiodata;
