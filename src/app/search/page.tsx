"use client";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import SearchSlideBar from "@/components/searchComponent/SearchSlideBar";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
interface GeneralInfo {
  biodataType: string;
  maritalStatus: string;
  birthYear: string;
  height: string;
  complexion: string;
  weight: string;
  bloodGroup: string;
  nationality: string;
}

interface Address {
  country: string;
  division: string;
  district: string;
  upazilla: string;
  grewUpAt: string;
}

interface OccupationalInfo {
  monthlyIncome:string,
  occupation :string,
  professionDesc:string,


}

interface BioData {
  generalInfo: GeneralInfo;
  address: Address;
  occupationalInfo: OccupationalInfo
  // Add other sections as needed, e.g., education, familyInfo, etc.
}

interface mainInfo {
  bioData: BioData;
  _id: string
}

const page = () => {
  const [biodata, setBiodata] = useState<mainInfo[]>([]);
  const [loading,setLoading] = useState(false);
  const [filterData,setFilterData] = useState();
  const router = useRouter();
  
      const findData = async (searchData: any) => {
        try {
          setLoading(true)
          console.log(searchData)
          const res = await axios.post("/api/user/biodata/find", searchData);
          console.log(res.data.biodata)
          setBiodata(res.data.biodata);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false)
        }
      };
      

      useEffect(() => {
        if (filterData) {
          console.log(filterData)
          findData(filterData);
        } else {
          const data = localStorage.getItem("searchKey");
          console.log(data)
          if (data) {
            findData(JSON.parse(data));
          }
        }
      }, [filterData]);
    

  return (
    <main className="w-full h-screen">
      <Nav />

      <div className=" w-full min-h-[calc(100%-60px)] flex">
          <SearchSlideBar setFilterData={setFilterData}/>
        <div className="flex-1  min-h-screen p-10 flex gap-[15px] justify-center items-start flex-wrap">
          {loading ? <Loader color={'blue'}/> : (biodata
            ? biodata.map((val, index) => (
                <div className=" w-[300px] h-[380px]  py-4 ">
                  <div className=" w-full min-h-[50%] rounded-t-md bg-blue flex justify-center items-center ">
                    <img
                      src="/male.jpg"
                      alt="malePic"
                      className="w-[100px] h-[100px] rounded-full"
                    />
                  </div>
                  <div className='py-3 w-full min-h-[50%] flex flex-col items-center  border border-blue'>
                    <table className="w-full border-collapse border border-blue rounded-md table-fixed">
                      <tbody>
                        <tr>
                          <td className="w-1/2 border border-blue/[50%] p-2 font-semibold break-words">
                            Birth Year
                          </td>
                          <td className="w-1/2 border border-blue/[50%] p-2 break-words">
                            {val.bioData.generalInfo.birthYear}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/2 border border-blue/[50%] p-2 font-semibold break-words">
                            Height
                          </td>
                          <td className="w-1/2 border border-blue/[50%] p-2 break-words">
                            {val.bioData.generalInfo.height}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/2 border border-blue/[50%] p-2 font-semibold break-words">
                            Occupation
                          </td>
                          <td className="w-1/2 border border-blue/[50%] p-2 break-words">
                            {val.bioData.occupationalInfo.occupation}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button onClick={() => router.push(`/search/${val._id}`)} className=" px-5 py-2 bg-blue rounded-[20px] text-white font-semibold mt-4">Full Biodata</button>
                  </div>
                </div>
              ))
            : " biodata not found")}
        </div>
      </div>
    </main>
  );
};

export default page;
