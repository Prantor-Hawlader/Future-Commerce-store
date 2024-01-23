import Link from "next/link";
import React from "react";
import MainNav from "./MainNav";

import NavbarActions from "./NavbarActions";
import getCategories from "./actions/getCategories";
export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <nav className="border-b">
      <div className="relative bg-white flex px-4 lg:px-8 sm:px-6 items-center h-16">
        <Link href="/">
          <p className=" text-xl font-bold">FutureStore</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
