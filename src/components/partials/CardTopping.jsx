import React from "react";

const CardTopping = ({ background, emoji, topping }) => {
  return (
    <>
      {/* Card Topping   */}
      <div className="bg-white rounded-lg shadow-md w-44">
        <div className="p-5">
          <div className="my-5">
            <div className="text-center text-2xl flex items-center justify-center relative">
              <div
                className={`${background} rounded-full  size-16`}
              ></div>
              <span className="absolute">{emoji}</span>
            </div>
          </div>
          <p className=" font-medium mt-5 text-center">{topping}</p>
        </div>
      </div>
    </>
  );
};

export default CardTopping;
