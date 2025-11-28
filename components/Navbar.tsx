"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

type NavItem = {
  name: string;
  href: `/${string}`;
};

function BrandShimmer() {
  return (
    <motion.h1
      initial={{ backgroundPosition: "-150% 0" }}
      animate={{ backgroundPosition: ["-150% 0", "150% 0"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="
        font-bold text-3xl
        bg-linear-to-r 
        from-purple-200/20 
        via-purple-400 
        to-purple-200/20
        bg-[length:300%_100%]
        bg-clip-text 
        text-transparent
        select-none
      "
    >
      <Link href="/">DayFlow</Link>
    </motion.h1>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Prayer Schedule", href: "/prayer-schedule" },
    { name: "Drink Tracker", href: "/drink-tracker" },
  ];
  return (
    <nav className="flex justify-center bg-[#191919] py-2">
      <div className="flex flex-row items-center justify-between w-full max-w-3xl">
        <BrandShimmer />
        <div className="flex gap-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={
                  active ? "text-purple-400 font-semibold" : "text-white"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
