import React from "react";
import pizza from "../assets/pizza.jpg";
import chicken from "../assets/chicken.jpg";
import burger from "../assets/burger.jpg";
const Homeslide = () => {
  return (
    <div className="w-full   h-[20vw] px-4 flex items-center   justify-between bg-yellow-600">
      <div className="box-1 w-[33.33vw] border-r-[1px] border-zinc-100   flex items-center justify-center">
        <div className="text-zinc-950 px-[1.5vw] text-[3vw] ">
          <a href="#pizza">
            Home <br /> Made Pizza
          </a>
        </div>
        <div className="circle-1   size-[12vw] ">
          <img src={pizza} className="rounded-full bg-center bg-cover" />
        </div>
      </div>
      <div className="box-2 w-[33.33vw]  border-r-[1px] border-zinc-100 flex items-center ">
        <div className="text-zinc-950 px-[1.5vw] text-[3vw] ">
          <a href="#burger">
            Home <br /> Made Burger
          </a>
        </div>
        <div className="circle-2 size-[13vw] ">
          <img src={burger} className="rounded-full bg-center bg-cover" />
        </div>
      </div>
      <div className="box-3 w-[33.33vw]  flex items-center justify-center ">
        <div className="text-zinc-950 px-[1.5vw] text-[3vw] ">
          <a href="#chicken">
            Home <br /> Made Chicken
          </a>
        </div>
        <div className="circle-3  size-[12vw] ">
          <img src={chicken} className="rounded-full bg-center bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default Homeslide;
