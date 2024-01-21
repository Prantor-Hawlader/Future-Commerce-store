"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNav = ({ data }: { data: Category[] }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    name: `${route.name}`,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="flex mx-6 items-center  space-x-4 lg:space-x-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
