import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import logo from "../../assets/images.png";
import { MdMenu } from "react-icons/md";
import {
  PiCurrencyEur,
  PiCurrencyJpy,
  PiCurrencyGbpThin,
} from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../features/currency/currencySlice";

const currencyData = ["INR", "USD", "GBD", "SGD", "AED"];
const currencyIcons = {
  INR: <TfiMoney />,
  USD: <PiCurrencyGbpThin />,
  GBD: <PiCurrencyGbpThin />,
  SGD: <PiCurrencyEur />,
  AED: <PiCurrencyJpy />,
};

const Header = () => {
  const currency = useSelector((state) => state.currency.value);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCurrency = (item) => {
    if (item) {
      dispatch(setCurrency(item));
      setDropdownVisible(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="min-w-full border-b-2 flex items-center justify-between container px-4 py-2">
      <MdMenu className="lg:hidden text-2xl" />
      <a href="/home">
        <img src={logo} alt="logo" className="h-15 ml-[12%]" width={120} />
      </a>
      <div className="hidden lg:flex items-center gap-3 text-gray-800 text-sm decoration-1" >
        <a href="/home">HOME</a>
        <a href="/Apparel">APPAREL</a>
        <a href="/gifting">GIFTING</a>
        <a href="/our-world" target="_blank">
          OUR WORLD
        </a>
      </div>
      <div className="flex justify-right items-center gap-3 ">
        <div className="flex items-center">
          <IoIosSearch className="text-xl ml-auto text-red-300" />
          <p className="hidden md:flex text-red-300 ">Search</p>
        </div>
        <div className=" md:flex items-center text-2xl gap-2 relative">
          <div className="hidden md:flex" ref={dropdownRef}>
            <div onClick={handleDropdown} className="cursor-pointer">
              <div className="flex items-center text-sm">
                {currency} {currencyIcons[currency]}
              </div>
            </div>
            {dropdownVisible && (
              <div className="absolute top-17 divide-y-2 rounded-sm border shadow-md">
                {currencyData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCurrency(item)}
                    className="bg-white hover:bg-gray-200 text-gray-600 text-sm px-7 py-2 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <CiUser className="hidden md:flex" />
          <CiHeart className="hidden md:flex" />
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
