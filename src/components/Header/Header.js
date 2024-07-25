import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import logo from "../../assets/images.png";
import { MdMenu } from "react-icons/md";
const Header = () => {
  return (
    <div className="min-w-full border flex items-center justify-between container px-4 py-2 ">
      <MdMenu className="lg:hidden text-2xl" />
      <img src={logo} alt="logo" className="h-15  ml-[12%]" width={120} />
      <div className=" hidden lg:flex items-center gap-3 text-gray-500">
        <a>HOME</a>
        <a>APPAREL</a>
        <a>GIFTING</a>
        <a>OUR WORLD</a>
      </div>
      <div className="flex justify-right items-center gap-2">
        <div className="flex items-center">
          <IoIosSearch className="text-2xl ml-auto text-gray-600" />
          <p className="hidden md:flex text-gray-500">Search</p>
        </div>
        <div className="md:flex items-center text-2xl gap-2 ">
          <CiHeart className="hidden " />
          <div className="relative flex flex-col items-center">
            <span className="absolute -top-5 right-2.5 text-sm text-gray-500">
              1
            </span>
            <IoBagOutline className="text-2xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
