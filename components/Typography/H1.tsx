import React, { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="font-head text-6xl font-bold">{children}</h1>;
}
