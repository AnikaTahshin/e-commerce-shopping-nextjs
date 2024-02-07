'use client';
import HeroSlider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-around p-24">
      {/* left side starts */}

      <div className="w-full sm:w-[250px] md:w-[500px]">
        <p className="text-[6px] md:text-[12px]">100% QUALITY, 100% SATISFACTION</p>
        <p className="text-[32px] md:text-[64px]">Where the world comes to shop.</p>
        <p className="text-[9px] md:text-[18px]">Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="bg-black rounded-full p-1 md:p-2 w-[120px] md:w-[145px] flex flex-col justify-center items-center">
            <button className="text-white text-[12px] md:text-[16px]">Shop Now</button>

          </div>
          <div >
            <p className="text-[8px] md:text-[16px]">Start from</p>
            <p className="text-[12px] md:text-[16px]">110.00$</p>
          </div>
        </div>
      </div>
      {/* left side ends */}


      {/* middle side starts */}
      <div className="relative">
        <div className="rounded-full p-4 border-solid border-cyan-500 border-[8px] bg-white w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center overflow-hidden">
          <HeroSlider />
        </div>
      </div>
      {/* middle side starts */}

      <div className="flex flex-col justify-center items-center ">
        <div className="rounded-full p-4  bg-white w-[130px] h-[130px] flex justify-center items-center mb-4">

          <img className="object-contain" src="../assets/logo.png" alt="" />

        </div>
        <div className="rounded-full p-4 border-solid border-cyan-500 bg-white w-[130px] h-[130px] flex justify-center items-center">

          <img className="object-contain" src="../assets/logo.png" alt="" />

        </div>
      </div>
    </main>
  );
}
