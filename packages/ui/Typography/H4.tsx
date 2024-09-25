import React, { ReactNode } from "react";

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="font-head text-xl lg:text-2xl font-medium">{children}</h4>;
}
