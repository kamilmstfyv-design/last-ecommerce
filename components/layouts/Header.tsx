import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="px-container py-3 border-b border-gray-300 text-gray-700">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Link
            href="/"
            className="cursor-pointer w-28 md:w-32 font-bold text-3xl"
          >
            ShopAz
          </Link>
        </div>

        {/* nav links */}
        <nav className="hidden md:flex">
          <Navbar />
        </nav>

        {/* search bar and user login   (right side) */}
        <div className="flex items-center gap-4">
          <ShoppingCart />
          <Search />
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-colors font-bold"
          >
            <User />
            Account
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
