import React, { ReactNode } from "react";

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-head text-3xl font-medium">{children}</h3>;
}
