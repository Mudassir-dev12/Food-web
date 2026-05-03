import React from "react";
import Homeslide from "./Homeslide";
import Pizzapage from "./Pizzapage";
import Burgerpage from "./Burgerpage";
import Chickenpage from "./Chickenpage";
import Slider from "./carousel";

const Homepage = () => {
  return (
    <div className="w-full h-auto">
      <Slider />
      <Homeslide />
      <Pizzapage />
      <Burgerpage />
      <Chickenpage />
     
    </div>
  );
};

export default Homepage;
