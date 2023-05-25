import { GoDiffAdded } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { id, image, category, title, price } = item;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition  ">
        <div
          className="w-full h-full
         flex justify-center items-center"
        >
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            ></img>
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div className="flex justify-center items-center w-12 h-12 text-white bg-red-300">
                <GoDiffAdded className="text-3xl" />
              </div>
            </button>
            <Link
              className="flex bg-white justify-center items-center w-12 h-12 text-primary drop-shadow-xl"
              to={`/product/${id}`}
            >
              <GoEye className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Product;
