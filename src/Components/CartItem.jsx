import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const { id, image, title, price, amount } = item;
  return (
    <div className="flex">
      <div className="flex w-full min-h-[150px] items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
