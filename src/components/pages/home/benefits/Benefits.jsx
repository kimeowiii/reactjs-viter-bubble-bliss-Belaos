import React from "react";

const Benefits = () => {
  return (
    <>
      {/* Benefits */}
      <section id="benefits" className="bg-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
            <div className="text-center lg:text-start">
              <h3 className="font-bold text-2xl mb-5">
                Why{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Milk Tea
                </span>{" "}
                is Good For You
              </h3>
              <div className="flex  flex-col lg:flex-row  gap-3  ">
                <div className="flex items-center justify-center">
                  <span className="bg-pink-100 text-pink-500 h-fit w-fit rounded-full p-2 flex items-center justify-center">
                    ✓
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Antioxidant Rich</p>
                  <p className="text-gray-500">
                    Tea contains polyphenols that help fight free radicals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 my-5  ">
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-500 h-fit w-fit rounded-full p-2 flex items-center justify-center">
                    ✓
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Energy Boost</p>
                  <p className="text-gray-500">
                    Natural caffeine provides a gentle lift without coffee
                    jitters.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3  ">
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-100 text-yellow-500 h-fit w-fit rounded-full p-2 flex items-center justify-center">
                    ✓
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Mood Enahncer</p>
                  <p className="text-gray-500">
                    The comforting warmth and sweetness can brighten your day.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-center ">
              <div className="bg-purple-100 rounded-lg shadow-lg p-5 h-56 w-fit">
                <div className="flex flex-col justify-center items-center pt-7">
                  <span className="text-6xl">💖</span>
                  <p className="font-medium my-5">
                    "A cup of milk tea a day <br />
                    keeps the stress away!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
