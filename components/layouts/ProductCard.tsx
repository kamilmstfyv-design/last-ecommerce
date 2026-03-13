"use client";
import { Product } from "@/types/productType";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { isSignedIn } = useAuth();
  const handleAddToCart = () => {
    if (!isSignedIn) {
      toast.error("Add to cart failed! Please sign in to add to cart.");
      return;
    }
    addItem(product);
    toast.success("Product added to cart successfully!");
  };

  const router = useRouter();
  const { addItem, wishList, toggleWishlist } = useCartStore();
  console.log(wishList);
  const isInWishlist = wishList.some((item: any) => item._id === product._id);

  return (
    <div className="flex flex-col group items-center justify-center cursor-pointer relative bg-gray-100 rounded-lg overflow-hidden gap-2">
      <Image
        src={product.image[0]}
        alt={product.name}
        width={800}
        height={800}
        className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
      />
      <button
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        <HeartIcon
          className={`h-4 w-4  ${isInWishlist ? "text-red-500 fill-red-500" : "text-gray-500 fill-none"}`}
        />
      </button>
      <div>
        <div className="flex flex-col px-10 gap-2 pb-6">
          <p
            className="text-lg font-bold"
            onClick={() => router.push(`/products/${product._id}`)}
          >
            {product.name}
          </p>
          <p
            className="text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-1 cursor-pointer"
            onClick={() => router.push(`/products/${product._id}`)}
          >
            {product.description}
          </p>
          <div
            className="flex items-center gap-2 pb-6 mt-2 cursor-pointer"
            onClick={() => router.push(`/products/${product._id}`)}
          >
            <p
              className={`text-lg font-medium ${product.offerPrice ? "text-red-500 line-through" : "text-green-500"}`}
            >
              {product.price}
            </p>
            <p className="text-lg font-medium">{product.offerPrice}</p>
          </div>
          <button
            className="ml-auto  px-4 py-1.5 bg-orange-600 text-white font-bold border border-transparent rounded-full text-xs hover:bg-white hover:text-orange-600 hover:border-orange-600 transition-all duration-300 w-full text-center"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
