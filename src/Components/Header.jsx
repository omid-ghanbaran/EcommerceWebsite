import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-red-300">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BsCart4 className="text-3xl" />
      </div>
    </header>
  );
};

export default Header;
