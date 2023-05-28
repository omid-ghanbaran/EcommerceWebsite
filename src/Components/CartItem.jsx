import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, image, title, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="flex gap-x-4 border-b lg:px-1 w-full border-gray-200 font-light text-gray-500">
      <div className=" min-h-[110px] flex items-center gap-x-4 px-3">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt={title} />
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center">
        <div className="flex justify-between items-center mb-2">
          <Link
            to={`/product/${id}`}
            className="text-sm uppercase font-medium max-w-[200px] max-h-[36px] overflow-hidden text-primary hover:underline"
          >
            {title}
          </Link>
          <div
            onClick={() => {
              removeFromCart(id);
            }}
            className="text-xl cursor-pointer"
          >
            <BsTrash className="hover:text-red-400 transition" />
          </div>
        </div>
        <div className="flex text-sm gap-x-2 h-[26px]">
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
            <div
              onClick={() => {
                decreaseAmount(id);
              }}
              className="flex-1 flex justify-center h-full items-center cursor-pointer text-xl"
            >
              -
            </div>
            <div className="h-full px-2 flex justify-center items-center">
              {amount}
            </div>
            <div
              onClick={() => {
                increaseAmount(id);
              }}
              className="flex-1 flex justify-center h-full items-center cursor-pointer text-xl"
            >
              +
            </div>
          </div>
          <div className="flex flex-1 items-center justify-around font-medium text-primary">
            ${price}
          </div>
          <div className="flex flex-1 items-center justify-end font-medium text-primary">
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
