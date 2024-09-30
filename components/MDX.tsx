import { H1, H2, H3, H4, H5, H6 } from "@/packages/ui";
import { useMDXComponent } from "next-contentlayer/hooks";
import React, { HTMLAttributes } from "react";

const components = {
  h1: H1,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <H2 className="mb-2" {...props} />
  ),
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default function MDX({ code }: { code: string }) {
  const Content = useMDXComponent(code);

  return <Content components={components} />;
}
