import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer text-3xl md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ShopAz</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4">
          <Navbar />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
