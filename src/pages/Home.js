import React from "react";
import logo from "../assets/Furni..png";
import user from "../assets/User.png";
import cart from "../assets/Cart.png";
import ShopBtn from "../components/ShopBtn";
import ExploreBtn from "../components/ExploreBtn";
import Sofa from "../assets/couch 1.png";
import Dotted from "../assets/Dotted.png";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#3B5D4F] flex flex-row w-[100%] justify-evenly ">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] h-[25px] ml-30 mt-10 mb-5"
        />
        <div className="pl-20 mt-10 w-[40%] flex justify-evenly text-[#9DAEA6]">
          {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
            (menuItem) => (
              <span className="hover:text-[#fff] hover:underline underline-offset-8 decoration-4 decoration-[#F8BF28]">
                {menuItem}
              </span>
            )
          )}
        </div>
        <div className="flex flex-row mt-3 ">
          <img src={user} alt="user" className="w-[27px] h-[50px] pl-2 " />
          <img src={cart} alt="cart" className="w-[27px] h-[50px] pl-2" />
        </div>
      </div>

      {/* Box */}
      <div className="bg-[#3B5D4F] flex flex-row w-[100%] relative z-0">
        {/* header & btns */}
        <div className="pl-48 pt-28 pb-4">
          {["Modern Interior", "Design Studio"].map((text) => (
            <h1 className="text-[#fff] text-left text-6xl font-medium">
              {text}
            </h1>
          ))}
          <div className="flex flex-row pt-28">
            <ShopBtn />
            <ExploreBtn />
          </div>
        </div>
        {/* Sofa */}
        <div className="w-[50%] relative">
          <img src={Sofa} className="z-10" alt="couch" />
          <img
            src={Dotted}
            className="w-[30%] absolute top-20 right-0 -z-10"
            alt="dots"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
