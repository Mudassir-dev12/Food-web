import React from "react";
import pizza from "../assets/pizza.jpg";
const pizzapage = () => {
  return (
    <div id="pizza" className="w-full  h-[90vw] bg-zinc-950">
      <div className="absolute">
        <div className="heading pt-[1vw] px-[2vw] text-yellow-600 text-[11vw]">
          Home Made Pizza
        </div>
        <div className="box w-full">
          <img
            src={pizza}
            className="rounded-full size-[40vw] relative left-[55vw]"
            alt=""
          />

          <div className="content absolute top-[15vw] text-[3vw] text-white left-[4vw] w-[50vw] h-[40vw]">
            <h1>
              Classic Margherita Pizza Savor the timeless taste of our Classic
              Margherita Pizza, featuring a crispy thin crust topped with rich
              tomato sauce, fresh mozzarella cheese, and a sprinkling of
              fragrant basil. This simple yet delicious combination is a true
              celebration of Italian culinary tradition. Pepperoni Feast Pizza
              Indulge in our Pepperoni Feast Pizza, loaded with generous slices
              of zesty pepperoni 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pizzapage;
