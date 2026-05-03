import { useContext, useMemo } from "react";
import { FoodContext } from "../Context/FoodContext";
import { RxCross2 } from "react-icons/rx";

const CartPanel = () => {
  const { CartItem, isCartOpen, toggleCartPanel, removeFromCart } =
    useContext(FoodContext);

  // 💰 Calculate subtotal
  const subTotal = useMemo(() => {
    return CartItem.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  }, [CartItem]);

  // 🚚 Delivery Charges
  const deliveryFee = CartItem.length > 0 ? 150 : 0;

  // 🧾 Total
  const total = subTotal + deliveryFee;

  return (
    <div
      className={`fixed top-0 right-0 w-[320px] h-full z-[1000] bg-zinc-800 text-white p-4 flex flex-col transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCartPanel}>
          <RxCross2 size={25} />
        </button>
      </div>

      {/* ITEMS */}
      <div className="flex-1 overflow-y-auto">
        {CartItem.length > 0 ? (
          CartItem.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-600 py-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded"
                  alt="food"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-yellow-400">Rs {item.price}</p>
                </div>
              </div>

              <button
                className="text-red-400 text-sm"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Cart is empty</p>
        )}
      </div>

      {/* 💳 BILL SUMMARY */}
      {CartItem.length > 0 && (
        <div className="border-t border-gray-600 pt-4 mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>Rs {subTotal}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Delivery</span>
            <span>Rs {deliveryFee}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-green-400">Rs {total}</span>
          </div>

          {/* 🛒 ORDER BUTTON */}
          <button
            className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition"
            onClick={() => alert("Order Placed 🚀")}
          >
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPanel;