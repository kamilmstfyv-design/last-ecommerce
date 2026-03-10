"use client";
import { productsDummyData } from "@/constans/productsDummy";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetail = ({ slug }: { slug: string }) => {
  const product = productsDummyData.find((product) => product._id === slug);
  const [mainImage, setMainImage] = useState<string>(product?.image?.[0] || "");
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/2">
        <Image
          src={mainImage}
          alt={product?.name || ""}
          width={600}
          height={600}
        />
        <div>
          <div className="grid grid-cols-4 gap-4 w-[600px]">
            {product?.image?.map((image, index) => (
              <div
                key={index}
                onClick={() => setMainImage(image)}
                className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
              >
                <Image
                  src={image || mainImage}
                  alt="alt"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 mt-10">
        <p className="text-3xl font-bold">{product?.name}</p>
        <p className="text-lg font-medium">{product?.description}</p>
        <div className="flex items-center gap-2">
          <p
            className={`text-lg font-medium text-primary ${product?.offerPrice ? "text-primary font-bold line-through" : "text-gray-500 line-through"}`}
          >
            ${product?.price}
          </p>
          <p className="text-lg font-medium text-red-500">
            ${product?.offerPrice}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xl font-medium text-gray-600 pb-4 border-b border-gray-200">
            <table className="table-auto border-collapse w-full max-w-72">
              <tbody>
                <tr>
                  <td className="text-gray-600 font-medium">Brand</td>
                  <td className="text-gray-800/50 ">Generic</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Color</td>
                  <td className="text-gray-800/50 ">Multi</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Category</td>
                  <td className="text-gray-800/50">{product?.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-bold w-full hover:bg-orange-600 transition-all duration-300">
            Add to cart
          </button>
          <button className="bg-primary text-white px-8 py-4 rounded-md text-lg font-bold w-full hover:bg-primary/80 transition-all duration-300">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
