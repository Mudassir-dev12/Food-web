import React, { useContext } from "react";
import { FoodContext } from "../Context/FoodContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodItems = () => {
  const { foodItems, addToCart } = useContext(FoodContext);

  const Cartnotify = () => {
    toast.success("Add To Cart Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!foodItems) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <>
      <h1 className='food_head text-white  absolute left-1/2 transform -translate-x-1/2  '>
        FOOD ITEMS
      </h1>
      <br />
      <div className='meals '>
        {foodItems.map((item) => (
          <div key={item.id} className=''>
            <div className='card bg-zinc-900 '>
              <img
                src={item.image}
                className='h-10 object-cover rounded-t-xl'
              />
              <div className='p-4 text-center ml-5 mt-4 '>
                <h1 className='text-xl font-semibold   text-white '>
                  {item.name}
                </h1>
                <br />
                <div className='flex items-center  gap-4'>
                  <button
                    className='Buttons'
                    onClick={() => {
                      addToCart(item);
                      Cartnotify();
                    }}
                  >
                    ADD To Cart
                  </button>

                  <h2 className='text-white text-[20px]'>
                    RS = <span className='text-[#cc9917]'>{item.price}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
};

export default FoodItems;
