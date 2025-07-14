import React from "react";
import CardTopping from "../../../partials/CardTopping";

const Toppings = () => {
  return (
    <>
      {/* Toppings */}
      <section id="toppings" className="bg-purple-100 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="font-bold text-2xl text-center ">
              Delicious{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Toppings
              </span>
            </h3>
            <p className="text-gray-500 my-5">
              Customize your milk tea with these tasty additions that add
              texture and flavor.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <CardTopping
              background={"bg-pink-100"}
              emoji={"🟤"}
              topping={"Bobba Pearls"}
            />
            <CardTopping
              background={"bg-yellow-100"}
              emoji={"🍮"}
              topping={"Pudding"}
            />
            <CardTopping
              background={"bg-red-100"}
              emoji={"🧊"}
              topping={"Jelly"}
            />
            <CardTopping
              background={"bg-green-100"}
              emoji={"🥥"}
              topping={"Coconut"}
            />
            <CardTopping
              background={"bg-blue-100"}
              emoji={"🧈"}
              topping={"Chesse Foam"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Toppings;
