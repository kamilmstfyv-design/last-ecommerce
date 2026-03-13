"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

const WishlistPage = () => {
  const { wishList, toggleWishlist, addItem } = useCartStore();

  // Boş wishlist yoxlaması
  if (wishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-xl font-medium text-gray-600">
          Your wishlist is empty.
        </h2>
        <Link
          href="/"
          className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-container py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        My wishlist ({wishList.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishList.map((item) => (
          <div
            key={item._id}
            className="border border-gray-200 rounded-xl p-4 flex flex-col gap-3 hover:shadow-lg transition group"
          >
            <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={item.image[0]}
                alt={item.name}
                fill
                className="object-contain p-2 group-hover:scale-105 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-gray-800 truncate">
                {item.name}
              </h2>
              <p className="text-orange-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex gap-2 mt-auto">
              {/* Səbətə at */}
              <button
                onClick={() => addItem(item)}
                className="flex-1 bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-black transition"
              >
                <ShoppingCart size={16} /> Add
              </button>

              {/* Silmə düyməsi */}
              <button
                className="p-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition"
                onClick={() => toggleWishlist(item)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
