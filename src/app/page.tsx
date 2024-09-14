
import Nav from "@/components/Nav";
import SearchBar from "@/components/searchComponent/SearchBar";

export default function Home() {
  return (
    
    <main className="   w-full min-h-screen pb-10">
      <Nav />
     <div className=" w-full flex flex-col items-center">


      <div className=" bg-none sm:bg-[url('/bg.png')] bg-center bg-cover w-[80%] h-fit sm:h-[400px] pt-10 sm:pt-20 flex flex-col items-center mt-1 sm:mt-10"
>
        <h1 className=" font-black text-pink text-[40px] sm:text-[60px] text-center leading-none "><span className="text-blue">Bangladeshi Islamic</span> <br /> Matrimony </h1>
        <p className=" text-gray font-semibold text-[16px] sm:text-[22px] text-center mt-3">You can find your partner from your own town here !</p>
      </div>
        <div className=" text-center flex flex-col justify-center items-center mt-5 w-[80%] h-[100px] sm:h-[150px] rounded-lg border border-gray bg-white">
        <p className=" text-gray text-[18px] sm:text-[25px]">
          “Whoever desires Paradise, let him seek it through marriage.”
        </p>
        <p className=" text-pink text-[16px] sm:text-[22px]">(Musnad Ahmad 18478)</p>
        </div>
        <SearchBar />
      

     </div>
    </main>
    
  );
}
