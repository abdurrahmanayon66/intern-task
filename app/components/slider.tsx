"use client";
import React, { useState } from "react";
import images from "../assets/images";
import Image from "next/image";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const divs: number[] = [1, 2, 3, 4, 5, 6, 7];
  const colors: string[] = ["#ff8f8e", "#c89ffb", "#95f9d3", "#8c1096", "#1c345a", "#de9852", "#8c1096"];

  const handleNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex < divs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
       <div className="absolute top-[-360px] w-full h-screen flex items-center">
      <div className="relative w-full flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 18}vw + 50vw - 9vw))`,
          }}
        >
          {divs.map((div, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[18vw] m-2 flex items-center justify-center transition-all duration-500 ${
                currentIndex === index ? "h-[400px]" : "h-[300px]"
              }`}
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              <span className="text-white"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute flex w-[10%] justify-between right-5 top-[600px]">
        
        {currentIndex > 0 && (
          <button onClick={handleNext}>
            <Image src={images.left} alt="left arrow" />
          </button>
        )}
        <button onClick={handlePrev}>
          <Image src={images.right} alt="right arrow" />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Slider
