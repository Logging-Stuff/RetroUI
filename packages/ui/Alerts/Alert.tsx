import { HtmlHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Text } from "../Text";

const alertVariants = cva("relative w-full border-2 border-black p-4", {
  variants: {
    variant: {
      default: "bg-primary-300 text-foreground",
      secondary: "bg-black text-white",
      destructive:
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface IAlertProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = ({ className, variant, ...props }: IAlertProps) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);
Alert.displayName = "Alert";

interface IAlertTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}
const AlertTitle = ({ className, ...props }: IAlertTitleProps) => (
  <Text as="h5" className={cn("mb-1", className)} {...props} />
);
AlertTitle.displayName = "AlertTitle";

interface IAlertDescriptionProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {}
const AlertDescription = ({ className, ...props }: IAlertDescriptionProps) => (
  <div className={cn("text-muted", className)} {...props} />
);

AlertDescription.displayName = "AlertDescription";

const AlertComponent = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertComponent as Alert };
