"use client";

import { forwardRef, useState, useEffect, useCallback, useRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";


const THUMB_VARIANTS = {
  thinThumb: "h-5 w-3",
  smallThumb: "h-4 w-4",
  mediumThumb: "h-6 w-6",
  defaultThumb: "h-8.5 w-3.5",
  largeThumb: "h-9 w-4.5"
};

const TRACK_VARIANTS = {
  default: "h-5.5",
  thin: "h-3.5"
};


interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, "className"> {
  showValue?: boolean;
  alwaysShowTooltip?: boolean;
  value?: number[];  
  defaultValue?: number[];  
  onValueChange?: (value: number[]) => void;
  thumbVariant?: keyof typeof THUMB_VARIANTS;
  trackVariant?: keyof typeof TRACK_VARIANTS;
  showGridLines?: 0 | 1;
  thumbColor?: "white" | "black"; 
}

const Slider = forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      showValue = true,
      alwaysShowTooltip = false,
      value,
      defaultValue = [0],
      onValueChange,
      thumbVariant = "defaultThumb",
      trackVariant = "default",
      showGridLines,
      thumbColor = "white", 
      ...props
    },
    ref
  ) => {

    const [internalValue, setInternalValue] = useState(
      Array.isArray(value) ? value[0] : value ?? defaultValue[0]
    );
    const [showValueTooltip, setShowValueTooltip] = useState(alwaysShowTooltip);
    const valueTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
      if (Array.isArray(value)) {
        setInternalValue(value[0]); 
      } else if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);


    useEffect(() => {
      setShowValueTooltip(alwaysShowTooltip);
    }, [alwaysShowTooltip]);


    const handleValueChange = useCallback(
      (vals: number[]) => {
        const newVal = vals[0];  
        setInternalValue(newVal); 
        onValueChange?.(vals);  
       
        if (showValue && !alwaysShowTooltip) {
          setShowValueTooltip(true);


          if (valueTimeoutRef.current) {
            clearTimeout(valueTimeoutRef.current);
          }

          valueTimeoutRef.current = setTimeout(() => {
            if (!alwaysShowTooltip) {
              setShowValueTooltip(false);
            }
          }, 800);
        }
      },
      [showValue, alwaysShowTooltip, onValueChange]
    );


    useEffect(() => {
      return () => {
        if (valueTimeoutRef.current) {
          clearTimeout(valueTimeoutRef.current);
        }
      };
    }, []);


    const GridLines = () => (
      <div className="absolute inset-y-0 left-0 w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[1px] bg-black/20"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>
    );

    return (
      <div className="space-y-2">
        <div className="relative">
          <SliderPrimitive.Root
            ref={ref}
            value={[internalValue]}  
            onValueChange={handleValueChange}
            className={cn(
              "relative flex w-full touch-none select-none items-center"
            )}
            {...props}
          >
            <SliderPrimitive.Track className={cn(
              "relative w-full grow overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]",
              TRACK_VARIANTS[trackVariant]
            )}>
              {showGridLines === 0 && <GridLines />}
              <SliderPrimitive.Range className="absolute h-full bg-[#FFDB33]" />
              {showGridLines === 1 && <GridLines />}
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={cn(
              "block border-2 border-black bg-white transition-colors focus-visible:outline-none disabled:pointer-events-none", 
              THUMB_VARIANTS[thumbVariant]
            )}>
              <div className={cn(
                "absolute inset-0 -translate-x-[2px] -translate-y-[2px] border-2 border-black transition-transform hover:-translate-y-1 active:translate-y-0",
                thumbColor === "black" ? "bg-black" : "bg-white"
              )}>
                <div className="absolute inset-x-0 -top-1 h-[2px] bg-black/10" />
                <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-black/10" />
              </div>
            </SliderPrimitive.Thumb>
          </SliderPrimitive.Root>

          {showValue && (
            <div
              className={cn(
                "absolute -right-16 top-1/2 -translate-y-1/2 transition-opacity duration-300",
                showValueTooltip ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="relative flex h-8 w-14 items-center justify-center border-2 border-black bg-white font-mono text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <span>{Math.round(internalValue)}</span>
                <div className="absolute -left-[6px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-black bg-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Slider.displayName = "RetroSlider";

export { Slider };