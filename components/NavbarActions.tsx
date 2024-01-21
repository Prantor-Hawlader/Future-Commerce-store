"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full py-2">
        <ShoppingBag size={20} color="white" />
        <span className="font-bold text-sm ml-2 text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
