import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsFillForwardFill } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { cart } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="font-semibold uppercase text-sm">Shoping Bag (0)</div>
        <div
          onClick={handleClose}
          className="flex cursor-pointer w-6 h-6 justify-center items-center"
        >
          <BsFillForwardFill className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
