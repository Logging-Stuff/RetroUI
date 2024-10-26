import { cn } from "@/lib/utils";
import { DialogTrigger } from "@/packages/ui/Dialog/DialogTrigger";
import * as ReactDialog from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";

const dialogHeaderVariants = cva(
  "flex items-center justify-between border-b-2 border-black px-4 min-h-12",
  {
    variants: {
      variant: {
        default: "bg-primary-400 text-black",
      },
      position: {
        fixed: "sticky top-0",
        static: "static",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "static",
    },
  }
);

function DialogHeaderDefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <DialogTrigger title="Close pop-up" className="cursor-pointer" asChild>
        <X />
      </DialogTrigger>
    </>
  );
}

export interface IDialogHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogHeaderVariants>,
    ReactDialog.DialogTitleProps {}

export function DialogHeader({
  children,
  className,
  position,
  variant,
  asChild,
  ...props
}: IDialogHeaderProps) {
  return (
    <div
      className={cn(dialogHeaderVariants({ position, variant }), className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <DialogHeaderDefaultLayout>{children}</DialogHeaderDefaultLayout>
      )}
    </div>
  );
}
