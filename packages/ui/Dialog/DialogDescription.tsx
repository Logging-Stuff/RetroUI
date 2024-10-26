import { cn } from "@/lib/utils";
import * as ReactDialog from "@radix-ui/react-dialog";
import { HTMLAttributes } from "react";

export interface IDialogDescriptionProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DialogDescription({
  children,
  className,
  ...props
}: IDialogDescriptionProps) {
  return (
    <ReactDialog.Description className={cn(className)} {...props}>
      {children}
    </ReactDialog.Description>
  );
}
