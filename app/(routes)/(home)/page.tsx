import React from "react";
import HeaderSlider from "@/components/layouts/HeaderSlider";
import HomeProducts from "@/components/layouts/HomeProducts";
const Home = () => {
  return (
    <div className="px-container">
      <HeaderSlider />
      <HomeProducts />
    </div>
  );
};

export default Home;
