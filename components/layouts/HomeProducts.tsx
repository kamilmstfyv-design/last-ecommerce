"use client";
import { productsDummyData } from "@/constans/productsDummy";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/productType";
import { useRouter } from "next/navigation";
const HomeProducts = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
        {productsDummyData.map((product) => (
          <ProductCard key={product._id} product={product as Product} />
        ))}
      </div>
      <button
        onClick={() => router.push("/shop")}
        className="mt-10 text-sm text-gray-500 hover:text-primary transition cursor-pointer border border-gray-500/20 rounded-full px-4 py-2"
      >
        View all products
      </button>
    </div>
  );
};

export default HomeProducts;
