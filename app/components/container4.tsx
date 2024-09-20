"use client"; // Client Component

import React, { useState } from "react";
import images from "../assets/images";
import Image from "next/image";
import Slider from './slider'

function Container4() {
  const [bigDivColor, setBigDivColor] = useState("#10a957");
  const [activeDiv, setActiveDiv] = useState(null);

  const divs = [
    { color: "#10a957" }, 
    { color: "#10a957" },
    { color: "#bd92fb" },
    { color: "#feadac" },
    { color: "#2e4f3e" },
    { color: "#25dbdc" },
    { color: "#b126db" },
    { color: "#db4127" },
  ];

  const handleClick = (color, index) => {
    setBigDivColor(color);
    setActiveDiv(index);
  };

  return (
    <div className="relative max-h-[180vh]">
      <Slider/>
      <div className="absolute text-black w-[30%] ml-16 mt-32 space-y-6">
        <p className="text-4xl font-bold">Overview</p>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      
      <Image
        src={images.background4}
        alt="vector1"
        className="object-contain max-w-[100%]"
      />

      <Image
        src={images.background5}
        alt="vector2"
        className="object-contain max-w-[100%] relative bottom-"
      />

      
      <div className="w-full flex justify-between px-16 relative bottom-80">
        
        <section className="w-[45%] mt-8">
          <div className="grid grid-cols-4 h-screen gap-7">
            
            <div
              className="col-span-3 row-span-1 size[360px] rounded-2xl"
              style={{ backgroundColor: bigDivColor }}
            ></div>

      
            <div className="col-span-1 row-span-1 flex flex-col justify-between">
              {divs.slice(1, 4).map((div, index) => (
                <div
                  key={index}
                  className={`size-[120px] rounded-2xl cursor-pointer ${
                    activeDiv === index + 1 ? "border-4 border-black" : ""
                  }`}
                  style={{ backgroundColor: div.color }}
                  onClick={() => handleClick(div.color, index + 1)}
                ></div>
              ))}
            </div>

       
            <div className="col-span-3 row-span-1 flex justify-between">
              {divs.slice(4, 7).map((div, index) => (
                <div
                  key={index + 4}
                  className={`size-[120px] rounded-2xl cursor-pointer ${
                    activeDiv === index + 4 ? "border-4 border-black" : ""
                  }`}
                  style={{ backgroundColor: div.color }}
                  onClick={() => handleClick(div.color, index + 4)}
                ></div>
              ))}
            </div>

         
            <div
              className={`col-span-1 row-span-1 size-[120px] rounded-2xl cursor-pointer ${
                activeDiv === 7 ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: divs[7].color }}
              onClick={() => handleClick(divs[7].color, 7)}
            ></div>
          </div>
        </section>

       
        <section className="w-[45%] gap-y-4 text-black flex flex-col justify-center px-12">
          <p className="text-4xl font-bold">Collection Featured</p>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa
          </p>
        </section>
      </div>
    </div>
  );
}

export default Container4;
