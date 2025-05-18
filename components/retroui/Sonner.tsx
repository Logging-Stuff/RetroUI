"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "!p-4 !bg-background !border !group !toast !group-[.toaster]:bg-background !rounded-none !group-[.toaster]:text-foreground !group-[.toaster]:border-border !flex !items-center !relative",
          description:
            "!group-[.toast]:text-muted-foreground !ml-2 !text-sm !font-sans",
          actionButton:
            "!group-[.toast]:bg-primary !group-[.toast]:text-primary-foreground !rounded-none !py-1 !px-2 !bg-background !border-border !shadow !border-2 !ml-auto !h-fit !min-w-fit",
          cancelButton:
            "!group-[.toast]:bg-muted !group-[.toast]:text-foreground !py-1 !px-2 !rounded-none !text-sm !bg-background !border-border !shadow !border-2 !ml-auto !h-fit !min-w-fit",
          title: "!ml-2 !font-sans !text-base",
          closeButton:
            "!absolute !bg-background !-top-1 !-left-1 !rounded-full !p-0.5",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
