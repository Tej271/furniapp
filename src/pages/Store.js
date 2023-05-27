import React from "react";
import Chair from "../assets/product-1.png";
import AeroChair from "../assets/product-2.png";
import ErgoChair from "../assets/product-3.png";
import ProductDisplay from "../components/ProductDisplay";

const Store = () => {
  const products = [
    {
      name: "Nordic Chair",
      img: Chair,
      price: "$50.00",
    },
    {
      name: "Kruzo Aero Chair",
      img: AeroChair,
      price: "$78.00",
    },
    {
      name: "Ergonomic Chair",
      img: ErgoChair,
      price: "$43.00",
    },
  ];

  return (
    <div className="flex flex-row w-[85%] items-center justify-between">
      <div className="pt-36 w-[18%] ml-48 flex flex-col items-start">
        <div className="mb-8">
          {["Crafted with", "excellent", "material."].map((text) => (
            <h2 className="text-[#2F2F2F] text-left text-4xl font-medium">
              {text}
            </h2>
          ))}
        </div>
        <p className="text-left">
          Donec mattis porta eros. aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <button className=" bg-[#2F2F2F] w-[130px] h-[50px] rounded-3xl text-[#fff] font-normal mt-14">
          Explore
        </button>
      </div>

      <div className="flex flex-row items-center">
        {products.map((product) => (
          <ProductDisplay
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
