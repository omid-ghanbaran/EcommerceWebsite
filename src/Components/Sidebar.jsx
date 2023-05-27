import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsFillForwardFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
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
      <div className="flex flex-col gap-y-2 h-[470px] lg-h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-3 mt-3 ">
        <div className="flex justify-between w-full items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer bg-red-200 w-12 h-12 flex text-2xl items-center justify-center"
          >
            <AiOutlineClear />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
