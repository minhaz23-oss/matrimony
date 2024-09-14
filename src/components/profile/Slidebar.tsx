"use client";
import { slideBarLinks } from "@/constraints/script";
import { useState,useEffect } from "react";
const Slidebar = ({ setCurrentPage,currentPage }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleItemClick = (page: string, index: number) => {
    setCurrentPage(page);
    setActiveIndex(index);
  };
  useEffect(() => {
    const index = slideBarLinks.findIndex((link) => link.page === currentPage);
    setActiveIndex(index !== -1 ? index : null);
  }, [currentPage]);
  
  return (
    <section className=" bg-white w-full sm:static sm:bottom-auto sm:left-auto fixed bottom-0 left-0  sm:w-[300px] border-t-2 sm:border-r-2 border-blue  h-[80px] sm:min-h-screen sm:pt-10 p-3 pt-0">
      <div className="w-full hidden sm:flex flex-col justify-center items-center">
        <div className=" w-28 h-28 rounded-full mb-2 overflow-hidden">
          <img src="/profile.jpg" alt="pfp" className=" w-full h-full" />
        </div>
        <p>Biodata Status</p>
        <button onClick={() => setCurrentPage('previewBiodata')} className=" px-5 py-2 bg-violet rounded-md text-white mt-2">My Biodata</button>
      </div>
      <div className=" w-full h-[80px] sm:h-fit  sm:mt-4 flex flex-row sm:flex-col sm:gap-0 gap-2 justify-between items-center sm:items-start ">
      <div onClick={() => setCurrentPage('previewBiodata')} className=" sm:hidden block w-10 h-10 rounded-full mb-2 overflow-hidden">
          <img src="/profile.jpg" alt="pfp" className=" w-full h-full" />
        </div>
        {slideBarLinks.map((val, index) => (
          <div
            onClick={() => handleItemClick(val.page, index)}
            key={index}
            className={` w-fit sm:w-full  flex flex-col sm:flex-row gap-1 sm:gap-3 items-center mb-3 hover:bg-blue/50 p-2 rounded-md cursor-pointer ${(activeIndex === index || currentPage === val.page) && 'bg-blue/50'}`}
          >
            <div className=" w-[30px] h-[30px] rounded-md bg-blue/20 flex justify-center items-center">
              <img
                src={`/${val.icon}`}
                alt="icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <p className=" hidden sm:block">{val.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slidebar;
