import React from "react";
import images from "../assets/images";
import Image from "next/image";

function Container3() {
  return (
    <div className="flex justify-between px-16 h-[150vh]">
      <section className="w-[45%] flex flex-col justify-center">
        <p className="text-xl px-16 text-black font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white w-32 text-[#4000FF] border-2 border-[#4000FF] py-2 px-2 rounded-2xl font-medium transition duration-300 ease-in-out hover:bg-[#4000FF] hover:text-white">
            Explore Now
          </button>
        </div>
      </section>
      <section className="w-[45%] flex items-center relative">
        <div className="w-[400px] h-[350px] bg-[#1f3c68] rounded-3xl absolute z-30 px-12 py-6">
          <p className="text-white text-3xl font-medium">Lorem ipsum</p>
          <div className="mt-4 flex gap-x-3">
            <span>
              <Image
                src={images.Ellipse4}
                alt="vector1"
                className="size-[22px]"
              />
            </span>
            <span className="text-white">Wade Warren</span>
          </div>
          <div className="relative w-[300px] mt-[40%] space-y-2 px-3 py-3 text-white border-1 bg-white bg-opacity-20 backdrop-blur-[5px] border border-white border-opacity-10 rounded-3xl shadow-lg">
          <p className="text-2xl">Lawrance Stroll</p>
          <p>Hegifueshho dhfsui foiehhsio</p>
          </div>
        </div>
        <div className="w-[400px] h-[310px] bg-[#980fa7] rounded-3xl absolute left-10 z-20"></div>
        <div className="w-[400px] h-[280px] bg-[#2f096b] rounded-3xl absolute left-20 z-10"></div>
      </section>
    </div>
  );
}

export default Container3;
