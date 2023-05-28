import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-red-400 rounded-full animate-spin">
          <div className="w-10 h-10 border-4 border-gray-400 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const { title, price, image, description } = product;

  return (
    <section className="pt-32 pb-12 h-screen lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[100px] lg:max-w-[200px]"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium text-red-500 mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
