import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsFillForwardFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-3 lg:px-[10px]`}
    >
      <div className="flex justify-between items-center py-2 border-b">
        <div className="font-semibold uppercase text-sm ">
          Shoping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="flex cursor-pointer w-6 h-6 justify-center items-center"
        >
          <BsFillForwardFill className="text-2xl" />
        </div>
      </div>
      <div className="w-full flex flex-col overflow-y-auto overflow-x-hidden h-[580px]">
        <div className="flex flex-col gap-y-1 h-auto overflow-y-auto overflow-x-hidden border-b md:h-[500px] sm:h-[400px]">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col gap-y-2 mt-1 ">
          <div className="flex justify-between w-full items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">total:</span>${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={clearCart}
              className="cursor-pointer bg-red-100 w-12 h-12 flex text-2xl items-center justify-center"
            >
              <AiOutlineClear />
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="bg-gray-200 p-1 flex justify-center items-center font-medium w-full text-black">
              View Cart
            </Link>
            <Link className="bg-black p-1 flex justify-center items-center font-medium w-full text-white">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
