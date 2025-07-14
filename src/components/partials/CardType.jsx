import React from "react";

const CardType = ({ background, icon, type, description }) => {
  return (
    <>
      {/* Card type */}
      <div className="bg-pink-100 rounded-lg shadow-md">
        <div className="my-5">
            <div className="text-center text-2xl flex  items-center justify-center">
                  <div className={`${background} rounded-full absolute size-12`}></div>
                  <span className="relative">{icon}</span>
            </div>
        </div>
        <div className="px-10">
            <h5 className="text-xl font-semibold text-center my-3">{type}</h5>
            <p className="text-center mb-3 gray-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardType;
