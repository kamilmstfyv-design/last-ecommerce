"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ShoppingCartBtn from "../btns/ShoppingCartBtn";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CartBtnPopUp = () => {
  const { items } = useCartStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="outline-none">
          <ShoppingCartBtn />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">Səbətim</h3>

        {items.length === 0 ? (
          <div className="py-6 text-center text-gray-500">
            Səbətiniz hələ ki boşdur.
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-3 border-b border-gray-100 pb-3"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 bg-gray-50 rounded-md">
                    <Image
                      src={item.image[0]}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden text-sm">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-gray-500">
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t flex flex-col gap-2">
              <Link href="/cart">
                <Button className="w-full font-bold" variant="outline">
                  Səbətə Get
                </Button>
              </Link>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                Ödəniş Et
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CartBtnPopUp;
