import React from "react";
import burger from "../assets/burger.jpg";
const pizzapage = () => {
  return (
    <div id="burger" className="w-full h-[90vw]  bg-zinc-950">
      <div className="relative">
        <div className="heading pt-[1vw] px-[2vw] text-yellow-600 text-[10vw]">
          Home Made Burger
        </div>
        <div className="box w-full">
          <img
            src={burger}
            className="rounded-full size-[40vw] relative left-[55vw]"
            alt=""
          />

          <div className="content absolute top-[15vw] text-[3vw] text-white left-[4vw] w-[50vw] h-[40vw]">
            <h1>
              the Best Burgers in Town Welcome to Our Restaurant , where we
              serve the juiciest, most delicious burgers that will leave your
              taste buds dancing with delight! Our passion for crafting the
              perfect burger is evident in every bite. Here’s why our burgers
              stand out: Premium Ingredients We believe that great burgers start
              with the finest ingredients. 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pizzapage;
