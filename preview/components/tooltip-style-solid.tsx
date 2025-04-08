"use client";

import {
    Button,
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui";

export default function TooltipStyleSolid() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent variant="solid">Add to Library</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
