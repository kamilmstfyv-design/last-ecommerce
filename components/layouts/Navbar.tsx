"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constans/datas";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`cursor-pointer hover:text-primary transition-colors text-xl md:text-base font-bold px-2 md:px-2 ${
            pathname === link.href
              ? "underline underline-offset-3 text-primary font-bold text-red-500"
              : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
