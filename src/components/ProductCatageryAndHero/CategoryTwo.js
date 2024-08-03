import React from "react";

const CategoryTwo = () => {
  return (
    <div className="w-full relative max-md:p-1">
      <img src="https://www.my-furniture.com/media/catalog/product/cache/cc368a6b8cc4f25274cea070f9183754/h/e/heidi-bed-white-ls-web_1.jpg" alt="bed" className="w-full max-h-[800px]"/>
      <div className="md:absolute top-64 right-16 text-center md:max-w-sm flex flex-col gap-10  p-7 md:p-3 text-lime-900 max-md:bg-lime-100">
        <h1 className="text-3xl  md:text-5xl italic">Bed Of Dreams</h1>
        <p className="text-xl italic">Soft hand block prints create a cocoon of comfort and warmth to sink into on a  rainy day</p>
        <a className="underline text-xl  " href="#">SHOP MORE TEXTILE</a>
      </div>
    </div>
  );
};

export default CategoryTwo;
