'use client'
import { useEffect, useState } from "react";
import FormStep from '../formComponent/FormStep'
import Progress from '../formComponent/Progress'
import axios from "axios";

const EditBiodata = ({setCurrentPage} : any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [biodata,setBiodata] = useState({})
  useEffect(() => {
    const getBiodata = async () =>{
      try {
        const res = await axios.get('/api/user/biodata/get');
        setBiodata(res.data.biodata)
       
        
      } catch (error) {
        console.log(error)
      }
    }
    getBiodata();
  },[])
  
  return (
    <div className=' w-full min-h-full  flex flex-col sm:flex-row gap-5 p-10 px-2 sm:px-20'>
     <Progress activeIndex={activeIndex}/>
      <FormStep setCurrentPage={setCurrentPage} setActiveIndex={setActiveIndex} activeIndex={activeIndex} biodata={biodata}/>
    </div>
  )
}

export default EditBiodata;
