import React from "react";

const Types = () => {
  return (
    <>
      {/* Types */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-4xl ml-10">
              Discover the{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Joy
              </span>{" "}
              of Milk Tea
            </h1>
            <p className="my-5">
              Creamy, sweet, and refreshing our milk tea will transport you to
              flavor paradise with every sip.
            </p>
            <button className="flex justify-center items-center bg-pink-500 px-6 py-2 size-fit rounded-full text-white font-bold">
              Explore Flavors
            </button>
          </div>
          <div className="relative">
            <div className="backdrop-opacity-10 blur-lg rounded-full w-44 h-44 p-6 bg-pink-200"></div>
            <span className=" text-8xl -top-16 absolute flex justify-center items-center">
              🧋
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Types;
