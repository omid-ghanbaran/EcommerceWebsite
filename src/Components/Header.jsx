import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-blue-200 shadow-lg " : "bg-green-200 py-1"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to={"/"}>
          <img className="w-[70px]" src="/img/Logo.png" alt="logo site" />
        </Link>

        <div
          className="cursor-pointer flex relative max-w-[50px]"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BsCart4 className="text-3xl" />
          <div className="bg-red-300 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
