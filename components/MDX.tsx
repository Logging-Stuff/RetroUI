"use client";

import { Typography } from "@/packages/ui";
import { useMDXComponent } from "next-contentlayer/hooks";
import React, { HTMLAttributes } from "react";
import { ComponentShowcase } from "./ComponentShowcase";
import { cn } from "@/lib/utils";
import { ComponentSource } from "./ComponentSource";
import { CodeBlock } from "./CodeBlock";

const components = {
  h1: Typography,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography
      variant="h2"
      component="h2"
      className="border-b lg:text-3xl pb-1 mb-6"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h3" component="h3" className="mb-4" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h4" component="h4" className="mb-2" {...props} />
  ),
  h5: (props: HTMLAttributes<HTMLHeadElement>) => (
    <Typography variant="h5" component="h5" {...props} />
  ),
  h6: (props: HTMLAttributes<HTMLHeadElement>) => (
    <Typography variant="h6" component="h6" {...props} />
  ),
  pre: CodeBlock,
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-[#282A36] p-1 text-primary-500 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  ComponentShowcase,
  ComponentSource,
};

export default function MDX({ code }: { code: string }) {
  const Content = useMDXComponent(code);

  return <Content components={components} />;
}
