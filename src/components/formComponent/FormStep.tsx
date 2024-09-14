"use client";
import { useState } from "react";
import { formPages } from "@/constraints/script";


const FormStep = ({ setActiveIndex, activeIndex,setCurrentPage,biodata }: any) => {
  const CurrentFormPage = formPages[activeIndex];
  const [formData, setFormData] = useState({
    
  });
  console.log(formData)
  return (
    <section className=" w-full">
      {CurrentFormPage && (
        <CurrentFormPage
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          setFormData={setFormData}
          formData={formData}
          setCurrentPage={setCurrentPage}
          biodata={biodata}
        />
      )}
     
    </section>
  );
};

export default FormStep;
