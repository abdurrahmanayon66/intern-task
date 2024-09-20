import React from "react";
import Image from "next/image"; 
import images from "../assets/images"; 

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="navbar bg-[#363636] text-white px-6 flex justify-between py-4">
        <ul className="w-1/2 flex justify-evenly">
          <li className="flex items-center">
            Home
            <Image
              src={images.downArrow}
              alt="Down arrow"
              width={16}
              height={16}
              className="ml-2"
            />
          </li>
          <li className="flex items-center">
            Event
            <Image
              src={images.downArrow} 
              alt="Down arrow"
              width={16}
              height={16}
              className="ml-2" 
            />
          </li>
          <li className="flex items-center">
            Contact
            <Image
              src={images.downArrow} 
              alt="Down arrow"
              width={16} 
              height={16}
              className="ml-2" 
            />
          </li>
          <li className="flex items-center">
            Blog
            <Image
              src={images.downArrow} 
              alt="Down arrow"
              width={16} 
              height={16}
              className="ml-2" 
            />
          </li>
        </ul>
        <label className="input input-bordered bg-white flex items-center gap-2 rounded-full mr-20 w-[300px]">
          <input type="text" className="grow text-black" placeholder="Search" />
          <Image
              src={images.search} 
              alt="Search"
              width={30} 
              height={30}
              className="ml-2" 
            />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
