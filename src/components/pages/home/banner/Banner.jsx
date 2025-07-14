import React from "react";

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-36 justify-between items-center ">
            <div className="flex flex-col">
              <h1 className="font-bold text-4xl  text-center lg:text-start">
                Discover the{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Joy
                </span>{" "}
                of Milk Tea
              </h1>
              <p className="my-5 text-center lg:text-start">
                Creamy, sweet, and refreshing our milk tea will transport you to
                flavor paradise with every sip.
              </p>
              <div className="flex justify-center items-center lg:justify-start">
                <button className=" bg-pink-500 px-6 py-2 size-fit rounded-full text-white font-bold  hover:text-pink-500 hover:bg-pink-200 duration-300 transition-all ease-in-out">
                  Explore Flavors
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div className="   absolute backdrop-opacity-10 blur-lg rounded-full w-44 h-44 p-6 bg-pink-200"></div>
                <span className=" text-8xl -top-24  relative flex justify-center items-center">
                  🧋
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
