import React, { useState } from "react";
import { PiCurrencyGbpThin } from "react-icons/pi";
import { PiCurrencyEur, PiCurrencyJpy } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";

const currencyData = ["INR", "USD", "GBD", "SGD", "AED"];
const DropDownOption = () => {
  const [currency, setCurrency] = useState("INR");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCurrency = (item) => {
    if (item === "INR") {
      setCurrency(`item ${(<TfiMoney />)}`);
    }
    setCurrency(item);
    setDropdownVisible(false);
    console.log(currency);
  };
  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div onClick={() => handleDropdown()} className="cursor-pointer">
      <div className="flex items-center text-sm">
        {currency}
        {currency === "INR" ? <TfiMoney className="" /> : null}{" "}
        {currency === "USD" ? <PiCurrencyGbpThin className="" /> : null}
        {currency === "GBD" ? <PiCurrencyGbpThin className="" /> : null}
        {currency === "EUR" ? <PiCurrencyEur className="" /> : null}
        {currency === "JPY" ? <PiCurrencyJpy className="" /> : null}
      </div>

      {dropdownVisible && (
        <div className="absolute top-17 divide-y-2 rounded-sm border shadow-md">
          {currencyData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCurrency(item)}
              className="bg-white hover:bg-gray-200 text-gray-600 text-sm  px-7 py-2  cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownOption;
