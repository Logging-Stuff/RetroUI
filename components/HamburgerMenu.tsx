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
      >
        {isOpen ? <X /> : <AlignJustify />}
      </Button>
      {isOpen && <div className=" w-44"> <SideNav /> </div> }
    </div>
  );
}
