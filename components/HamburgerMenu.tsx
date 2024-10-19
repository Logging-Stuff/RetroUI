"use client";

import { useState } from "react";
import SideNav from "./SideNav";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/packages/ui";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setIsOpen((prev) => !prev)}
        className="z-50 absolute top-3 left-2 mb-3"
      >
        {isOpen ? <X /> : <AlignJustify />}
      </Button>
      
      {isOpen && (
        <div className="absolute top-0 z-40 w-full h-screen bg-black opacity-50" onClick={() => setIsOpen(false)} />
      )}
      
      {isOpen && (
        <div className="absolute top-0 left-0 z-50">
          <SideNav />
        </div>
      )}
    </div>
  );
}
