"use client";

import {
    Button,
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui";

export default function TooltipStylePrimary() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent variant="primary">
                    Add to Library
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
