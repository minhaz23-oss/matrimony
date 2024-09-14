
import { progressBarData } from "@/constraints/script"
const Progress = ({activeIndex}:any) => {
  
  return (
    <div className=" w-[200px] h-full flex flex-row sm:flex-col gap-2 sm:gap-5 ">
       {progressBarData.map((val,index) => (
        <div key={index} className={` w-full h-fit justify-between flex gap-4 items-center font-semibold ${activeIndex === index && 'text-blue'}`}>
           <h1 className=" hidden sm:block">{val.text}</h1>
           <div className={` w-6 h-6 rounded-full border border-blue flex justify-center items-center text-blue text-[14px] p-1 ${activeIndex === index && 'text-white bg-blue'}`}>{val.id}</div>
        </div>
       ))}
    </div>
  )
}

export default Progress;
