"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Cart = () => {
  const { removeItem, items, decrementQuantity, incrementQuantity } =
    useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalSubTotal = items.reduce(
    (acc, item) => acc + Math.round(item.price * item.quantity * 100) / 100,
    0,
  );
  return (
    <div className="px-container py-10 flex gap-10">
      <div className="w-4/5">
        <div className="flex items-center justify-between mb-8 border-b border-gray-500/30 pb-6">
          <p className="text-2xl md:text-3xl text-gray-500">
            Your <span className="font-medium text-orange-600">Cart</span>
          </p>
          <p className="text-lg md:text-xl text-gray-500/80">
            {cartCount} items
          </p>
        </div>
        <div className="hidden md:grid grid-cols-4 w-full">
          <p className="text-2xl md:text-3xl text-gray-500">Product Details</p>
          <p className="text-lg md:text-xl text-gray-500/80">Price</p>
          <p className="text-lg md:text-xl text-gray-500/80">Quantity</p>
          <p className="text-lg md:text-xl text-gray-500/80">Sub Total</p>
        </div>

        <div className="w-full mt-6">
          {items.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full py-4 border-b border-gray-500/20"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <div>
                  <p>{item.name}</p>
                  <Button
                    onClick={() => removeItem(item._id)}
                    variant="outline"
                    size="icon"
                    className="hover:bg-red-500 hover:text-white"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-1">
                <p className="md:hidden text-sm text-gray-500/80">Price</p>
                <p className="flex-1">${item.price}</p>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-1">
                <p className="md:hidden text-sm text-gray-500/80">Quantity</p>
                <div className="flex items-center gap-2">
                  <Minus
                    className="w-4 h-4"
                    onClick={() => decrementQuantity(item._id)}
                  />
                  <p>{item.quantity}</p>
                  <Plus
                    className="w-4 h-4"
                    onClick={() => incrementQuantity(item._id)}
                  />
                </div>
              </div>

              {/* Sub Total */}
              <div className="flex flex-col gap-1">
                <p className="md:hidden text-sm text-gray-500/80">Sub Total</p>
                <p className="flex-1">
                  ${Math.round(item.price * item.quantity * 100) / 100}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/5 h-full bg-gray-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold border-b border-gray-500/30 pb-4">
          Order Summary
        </h1>
        <div className="border-b border-gray-500/30 pb-4">
          <label className="text-sm text-gray-500/80">
            Select Address
            <Select>
              <SelectTrigger className="w-full border-none shadow-none">
                <SelectValue placeholder="Select Address" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Address 1</SelectItem>
                <SelectItem value="1">Add New Address</SelectItem>
              </SelectContent>
            </Select>
          </label>{" "}
          <label className="text-sm text-gray-500/80">
            Promo Code
            <Input type="text" placeholder="Enter Promo Code" />
            <Button
              variant="default"
              className="block mt-2 bg-orange-600 text-white hover:bg-orange-700 "
            >
              Apply
            </Button>
          </label>
        </div>
        <div className="border-b border-gray-500/30 pb-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Items ({cartCount})</p>
            <p>${totalSubTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping Cost</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Tax (2%)</p>
            <p>${(Math.round(totalSubTotal * 0.02 * 100) / 100).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p>Total</p>
          <p>
            $
            {(
              totalSubTotal +
              Math.round(totalSubTotal * 0.02 * 100) / 100
            ).toFixed(2)}
          </p>
        </div>
        <Button className="w-full mt-4 bg-orange-600 text-white hover:bg-orange-700">
          Checkout
        </Button>
      </div>{" "}
    </div>
  );
};
export default Cart;
