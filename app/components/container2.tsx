import React from "react";
import images from "../assets/images";
import Image from "next/image";

function Container2() {
  return (
    <div className="px-16 w-full flex justify-between h-[100vh]">
      <section className="w-[45%] pt-[4%]">
        <div className="relative w-[220px] top-[7%] left-[2%]">
          <div className="w-[220px] h-[200px] rounded-3xl flex items-center pl-3 relative overflow-hidden">
           
            <p className="text-white absolute top-1/3 left-5 text-3xl font-medium z-10">
              Photo 1
            </p>
            <Image
              src={images.background2}
              alt="vector1"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
          <Image
            src={images.Ellipse1}
            alt="vector1"
            className="absolute size-16 bottom-[-35px] right-[-30px]"
          />
        </div>

        <div className="relative w-[200px] h-[180px] left-[50%] top-[-5%]">
          <div className="w-full h-full rounded-3xl overflow-hidden relative">
            <Image
              src={images.background1}
              alt="vector1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <p className="text-black text-3xl font-medium absolute top-1/3 left-3">
              Photo 2
            </p>
          </div>
          <Image
            src={images.Ellipse3}
            alt="vector1"
            className="absolute size-16 bottom-[-35px] right-[-30px]"
          />
        </div>

        <div className="relative w-[170px] top-[-10%] left-[10%]">
          <div className="w-[170px] h-[170px] rounded-3xl flex items-center pl-3 relative overflow-hidden">
           
            <p className="text-white absolute top-1/3 left-3 text-3xl font-medium z-10">
              Photo 1
            </p>
            <Image
              src={images.background3}
              alt="vector1"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
          <Image
            src={images.Ellipse2}
            alt="vector1"
            className="absolute size-16 bottom-[-35px] right-[-30px]"
          />
        </div>

      </section>
      <section className="w-[45%] flex flex-col justify-center">
        <p className="text-xl px-16 text-black font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <div className="flex justify-center mt-5">
          <button className="bg-white w-28 text-[#4000FF] border-2 border-[#4000FF] py-2 rounded-2xl font-medium transition duration-300 ease-in-out hover:bg-[#4000FF] hover:text-white">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default Container2;
