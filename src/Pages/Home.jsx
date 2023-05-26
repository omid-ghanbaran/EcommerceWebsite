import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "../Components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product key={product.id} item={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
