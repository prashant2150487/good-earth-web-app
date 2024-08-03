import React from "react";

const CategoryOne = () => {
  return (
    <div className="p-10 px-60 h-screen ">
      <div className="h-30 flex  flex-col sm:flex-row max-h-fit bg-slate-400 gap-4 ">
        <div className="h-sm ">
          <img
            src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00229108-1625206331.jpg"
            alt="plp"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2  bg-slate-700 gap-4 h-fit">
          <div className="w-full h-3/4 relative">
            <img
              src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00229108-1625206331.jpg"
              alt="plp"
              className="w-full h-full"
            />
            <a className="absolute z-10 bottom-5 left-40 border-b-2 border-b-white">
              SHOP TEA AND COFFEE SETS
            </a>
          </div>
          <div className="w-full h-3/4 relative">
            <img
              src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00229108-1625206331.jpg"
              alt="plp"
              className="w-full h-full"
            />
            <a className="absolute z-10 bottom-5 left-40 border-b-2 border-b-white">
              SHOP TEA AND COFFEE SETS
            </a>
          </div>{" "}
          <div className="w-full h-3/4 relative">
            <img
              src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00229108-1625206331.jpg"
              alt="plp"
              className="w-full h-full"
            />
            <a className="absolute z-10 bottom-5 left-40 border-b-2 border-b-white">
              SHOP TEA AND COFFEE SETS
            </a>
          </div>{" "}
          <div className="w-full h-3/4 relative">
            <img
              src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00229108-1625206331.jpg"
              alt="plp"
              className="w-full h-full"
            />
            <a className="absolute z-10 bottom-5 left-40 border-b-2 border-b-white">
              SHOP TEA AND COFFEE SETS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOne;
