import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid">
            {products.map((product) => {
              return (
                <div className="w-full h-[300px] bg-pink-200" key={product.id}>
                  {product.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
