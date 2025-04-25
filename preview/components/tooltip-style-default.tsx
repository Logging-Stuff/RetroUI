"use client";

import {
  Button,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/retroui";

export default function TooltipStyleDefault() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent variant="default">Add to Library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
