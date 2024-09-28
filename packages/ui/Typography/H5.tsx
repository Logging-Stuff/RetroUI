import React, { ReactNode } from "react";

export function H5({ children }: { children: ReactNode }) {
  return <h5 className="font-head text-lg lg:text-xl font-medium">{children}</h5>;
}
