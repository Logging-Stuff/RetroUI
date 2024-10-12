import { H1, H2, H3, H4, H5, H6 } from "@/packages/ui";
import { useMDXComponent } from "next-contentlayer/hooks";
import React, { HTMLAttributes } from "react";
import { ComponentShowcase } from "./ComponentShowcase";
import { cn } from "@/lib/utils";

const components = {
  h1: H1,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <H2 className="border-b lg:text-3xl pb-1 mb-6" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <H3 className="mb-4" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <H4 className="mb-2" {...props} />
  ),
  h5: H5,
  h6: H6,
  pre: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className={cn(
        "overflow-x-auto rounded bg-[#282A36] mt-3 mb-6 p-4",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-[#282A36] py-1 px-2 text-primary-500 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  ComponentShowcase,
};

export default function MDX({ code }: { code: string }) {
  const Content = useMDXComponent(code);

  return <Content components={components} />;
}
