"use client";
import { forwardRef, useMemo } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const sliderVariants = cva("relative w-full grow", {
  variants: {
    variant: {
      default: "h-5.5",
      thin: "h-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  variant?: "default" | "thin";
}

const Slider = forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      variant = "default",
      className,
      defaultValue,
      value,
      min = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    const _values = useMemo(
      () =>
        Array.isArray(value)
          ? value
          : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
      [value, defaultValue, min, max]
    );

    return (
      <div className="space-y-2">
        <div className="relative">
          <SliderPrimitive.Root
            ref={ref}
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            className={cn(
              "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
              className
            )}
            {...props}
          >
            <SliderPrimitive.Track
              className={cn(
                sliderVariants({ variant }),
                "overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              )}
            >
              <SliderPrimitive.Range className="absolute h-full bg-primary" />
            </SliderPrimitive.Track>
            {_values.map((_, index) => (
              <SliderPrimitive.Thumb
                key={index}
                className={cn(
                  "block transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                  variant === "default"
                    ? "h-5 w-5 border-2 border-black bg-white"
                    : "h-4 w-4 border-2 border-black bg-white"
                )}
              >
                <div className="absolute inset-0 -translate-x-[2px] -translate-y-[2px] border-2 border-black transition-transform hover:-translate-y-1 active:translate-y-0 bg-white group-data-[disabled]:pointer-events-none">
                  <div className="absolute inset-x-0 -top-1 h-[2px] bg-black/10" />
                  <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-black/10" />
                </div>
              </SliderPrimitive.Thumb>
            ))}
          </SliderPrimitive.Root>
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
