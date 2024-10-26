import { cn } from "@/lib/utils";
import { DialogBackdrop, IDialogBackgroupProps } from "./DialogBackdrop";
import * as ReactDialog from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const dialogVariants = cva(
  `fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  flex flex-col border-2 border-black shadow-md gap-4 overflow-y-auto bg-white
  w-full h-fit max-h-[80vh] max-w-[97%] duration-300
  data-[state=open]:animate-in 
  data-[state=open]:slide-in-from-left-1/2 
  data-[state=open]:slide-in-from-top-[48%]
  data-[state=open]:fade-in-0 
  data-[state=open]:zoom-in-95 
  data-[state=closed]:animate-out 
  data-[state=closed]:fade-out-0 
  data-[state=closed]:slide-out-to-top-[48%] 
  data-[state=closed]:slide-out-to-left-1/2 
  data-[state=closed]:zoom-out-95`,
  {
    variants: {
      size: {
        auto: "max-w-fit",
        sm: "lg:max-w-[30%]",
        md: "lg:max-w-[40%]",
        lg: "lg:max-w-[50%]",
        xl: "lg:max-w-[60%]",
        "2xl": "lg:max-w-[70%]",
        "3xl": "lg:max-w-[80%]",
        "4xl": "lg:max-w-[90%]",
        screen: "max-w-[100%]",
      },
    },
    defaultVariants: {
      size: "auto",
    },
  }
);

export interface IDialogContentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogVariants> {
  overlay?: IDialogBackgroupProps;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  IDialogContentProps
>((inputProps: IDialogContentProps, forwardedRef) => {
  const { children, size = "auto", className, overlay, ...props } = inputProps;

  return (
    <ReactDialog.Portal>
      <DialogBackdrop {...overlay} />
      <ReactDialog.Content
        className={cn(dialogVariants({ size }), className)}
        ref={forwardedRef}
        {...props}
      >
        <VisuallyHidden>
          <ReactDialog.Title />
        </VisuallyHidden>
        <div className="flex flex-col relative">{children}</div>
      </ReactDialog.Content>
    </ReactDialog.Portal>
  );
});
