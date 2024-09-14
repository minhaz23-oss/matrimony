"use client";

import axios from "axios";
import { useState } from "react";
import Loader from "../Loader";

const ConfirmPage = ({ activeIndex, setActiveIndex, formData,setCurrentPage }: any) => {
  const [isSaved, setIsSaved] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleSave = async () => {
    try {
      setLoading(true)
      const res = await axios.post("/api/user/biodata/save", formData);
      if (res.status === 201) {
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };
  return (
    <section className=" ml-1 sm:ml-10 w-full py-[200px] px-5 flex flex-col justify-center  items-center gap-4">
      {isSaved ? (
        <>
          <p className=" text-gray font-semibold text-[18px]">Your Biodata is saved successfully</p>
          <button onClick={() => setCurrentPage('dashboard')} className="bg-blue text-white px-4 py-2 rounded-md">Go to the Dashboard</button>
        </>
      ) : (
        <>
          <p className="text-center text-[18px] text-grey-500 font-semibold">
            By clicking on confirm, you agree with our terms and conditions and
            your information will be saved. (if you want to check you biodata go
            back )
          </p>
          {loading ? <Loader color='blue' /> : (

          <div className=" flex gap-3">
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              className=" py-2 px-4 border border-blue rounded-md text-blue hover:bg-blue hover:text-white"
            >
              Go Back
            </button>
            <button
              onClick={handleSave}
              className="py-2 px-4 bg-blue hover:bg-blue/[80%] rounded-md text-white"
            >
              Save Biodata
            </button>
          </div>
          )}
        </>
      )}
    </section>
  );
};

export default ConfirmPage;
