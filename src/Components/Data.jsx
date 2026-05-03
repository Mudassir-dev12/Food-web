import React, { useContext } from "react";
import { MyContext } from "../Context/FoodContext";

const data = () => {
  const user = useContext(MyContext);
  return <div className="size-5xl  text-white ">{user}</div>;
};

export default data;
