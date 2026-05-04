import React, { createContext, useState } from "react";
export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Your full food list (fixed "prize" → "price")
  const [foodItems, setFoodItems] = useState([
    {
      id: "1",
      price: 499,
      name: "Chicken Zinger Burger",
      image: "/1.jpg",
    },
    {
      id: "2",
      price: 340,
      name: "Mozzarella Sticks",
      image: "/2.jpg",
    },
    {
      id: "3",
      price: 600,
      name: "Chicken Quesadillas",
      image: "/3.jpg",
    },
    {
      id: "4",
      price: 540,
      name: "Chicken Burger",
      image: "/4.jpg",
    },
    {
      id: "5",
      price: 700,
      name: "Egg and Cheese Sandwich",
      image: "/5.jpg",
    },
    {
      id: "6",
      price: 428,
      name: "Breakfast Burrito",
      image: "/6.jpg",
    },
    {
      id: "7",
      price: 570,
      name: "Soft Drinks",
      image: "/7.jpg",
    },
    {
      id: "8",
      price: 250,
      name: "Coffee",
      image: "/8.jpg",
    },
    {
      id: "9",
      price: 340,
      name: "Red Sauce Pasta",
      image: "/9.jpg",
    },
    {
      id: "10",
      price: 700,
      name: "Roasted Chicken",
      image: "/10.jpg",
    },
    {
      id: "11",
      price: 560,
      name: "Turkey Sandwich",
      image: "/11.jpg",
    },
    {
      id: "12",
      price: 900,
      name: "Fried Whole Fish",
      image: "/12.jpg",
    },
    {
      id: "13",
      price: 850,
      name: "Fried Fish",
      image: "/13.jpg",
    },
    {
      id: "14",
      price: 400,
      name: "Fruit Juices",
      image: "/14.jpg",
    },
    {
      id: "15",
      price: 250,
      name: "Chicken Tikka",
      image: "/15.jpg",
    },
    {
      id: "16",
      price: 1450,
      name: "Beef Burger",
      image: "/16.jpg",
    },
    {
      id: "17",
      price: 800,
      name: "Margherita Pizza",
      image: "/17.jpg",
    },
    {
      id: "18",
      price: 1650,
      name: "BBQ Chicken Pizza",
      image: "/18.jpg",
    },
    {
      id: "19",
      price: 600,
      name: "Chicken Tikka",
      image: "/19.jpg",
    },
    {
      id: "20",
      price: 450,
      name: "Peshawari Ice Cream",
      image: "/20.jpg",
    },
    {
      id: "21",
      price: 400,
      name: "Food Bites",
      image: "/21.jpg",
    },
    {
      id: "22",
      price: 590,
      name: "White Sauce Pasta",
      image: "/22.jpg",
    },
    {
      id: "23",
      price: 340,
      name: "Pizza Pie",
      image: "/23.jpg",
    },
    {
      id: "24",
      price: 690,
      name: "Delight Ice Cream",
      image: "/24.jpg",
    },
  ]);

  // ✅ Add to cart
  const addToCart = (item) => {
    setCartItem((prev) => [...prev, item]);
  };

  // ✅ Remove from cart
  const removeFromCart = (index) => {
    setCartItem((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Toggle cart panel
  const toggleCartPanel = () => {
    setIsCartOpen((prev) => !prev);
  };

  const CartCount = CartItem.length;

  return (
    <FoodContext.Provider
      value={{
        CartItem,
        CartCount,
        isCartOpen,
        toggleCartPanel,
        addToCart,
        removeFromCart,
        foodItems,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
