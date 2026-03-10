"use client";
import { productsDummyData } from "@/constans/productsDummy";
import { Product } from "@/types/productType";
import ProductCard from "@/components/layouts/ProductCard";
import React from "react";
import { useRouter } from "next/navigation";

const Shop = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center pt-14 px-container">
      <p className="text-3xl font-bold text-left w-full pb-6">All products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
        {productsDummyData.map((product) => (
          <ProductCard key={product._id} product={product as Product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
