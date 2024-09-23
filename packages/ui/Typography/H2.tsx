import React, { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-head text-4xl font-semibold">{children}</h2>;
}
