import Link from "next/link";
import Navbar from "./Navbar";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { useCartStore } from "@/store/useCartStore";
import ShoppingCartBtn from "../btns/ShoppingCartBtn";
import CartBtnPopUp from "./CartBtnPopUp";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

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
          <CartBtnPopUp />
          <Search />

          {/* User profile button (Clerk) */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-colors font-bold"
              >
                <User />
                Account
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
};

export default Header;
