import React from "react";
import menImage from "../img/men_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-green-200 h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-20 border-b border-gray-300">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-[30px] h-[2px] bg-blue-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
            Stylish winter sale <br />
            <span className="font-semibold">MENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start font-semibold uppercase border-b-2 border-black"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="h-full" src={menImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
