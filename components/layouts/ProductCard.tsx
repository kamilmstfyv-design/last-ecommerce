import { Product } from "@/types/productType";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col group items-center justify-center cursor-pointer relative bg-gray-100 rounded-lg overflow-hidden gap-2">
      <Image
        src={product.image[0]}
        alt={product.name}
        width={800}
        height={800}
        className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
      />
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
        <HeartIcon className="h-4 w-4  " />
      </button>
      <div
        className="flex flex-col px-10 gap-2"
        onClick={() => router.push(`/products/${product._id}`)}
      >
        <p className="text-lg font-bold">{product.name}</p>
        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-2 pb-6 mt-2">
          <p
            className={`text-lg font-medium ${product.offerPrice ? "text-red-500 line-through" : "text-green-500"}`}
          >
            {product.price}
          </p>
          <p className="text-lg font-medium">{product.offerPrice}</p>
          <button className="ml-auto max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition ">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
