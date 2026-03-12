"use client";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import React from "react";

const ShoppingCartBtn = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0,
  );
  return (
    <div className="relative">
      <ShoppingCart />
      <span
        className={`absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ${totalItems === 0 ? "hidden" : "block"}`}
      >
        {totalItems === 0 ? "" : totalItems}
      </span>
    </div>
  );
};

export default ShoppingCartBtn;
