import React from "react";

const ProductDisplay = ({ name, img, price }) => {
  return (
    <div className="mt-20 pl-28 hover:bg-blue-400 transition">
      <img src={img} className="h-[250px]" alt="product" />
      <h4 className="pt-10 font-medium">{name}</h4>
      <h3 className="pb-10 font-semibold text-lg">{price}</h3>
    </div>
  );
};

export default ProductDisplay;
