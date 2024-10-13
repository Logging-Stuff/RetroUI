"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, IButtonProps } from "@/packages/ui";

interface ICopyButtonProps extends IButtonProps {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    // trackEvent(event);
  }
}

export function CopyButton({
  value,
  className,
  src,
  ...props
}: ICopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="sm"
      className={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}
    >
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
}
