import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-around p-24">
    {/* left side starts */}
    
     <div className="w-[500px]">
      <p className="text-[12px]">100% QUALITY, 100% SATISFACTION</p>
      <p className="text-[64px]">Where the world comes to shop.</p>
      <p className="text-[18px]">Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>

      <div className="flex flex-row justify-between items-center">
      <div className="bg-black rounded-full p-2 w-[145px] flex flex-col justify-center items-center">
        <button className="text-white ">Shop Now</button>
        
      </div>
      <div >
          <p>Start from</p>
          <p>110.00$</p>
        </div>
      </div>
     </div>
     {/* left side ends */}
     

     {/* middle side starts */}
     <div className="rounded-full p-4  bg-white w-[400px] h-[400px] flex justify-center items-center">
      
      <img className="object-contain" src="../assets/logo.png" alt="" />
      
     </div>
     {/* middle side starts */}

     <div className="flex flex-col justify-center items-center">
     <div className="rounded-full p-4 border-solid border-cyan-500 bg-white w-[130px] h-[130px] flex justify-center items-center mb-4">
      
      <img className="object-contain" src="../assets/logo.png" alt="" />
      
     </div>
     <div className="rounded-full p-4 border-solid border-cyan-500 bg-white w-[130px] h-[130px] flex justify-center items-center">
      
      <img className="object-contain" src="../assets/logo.png" alt="" />
      
     </div>
     </div>
    </main>
  );
}
