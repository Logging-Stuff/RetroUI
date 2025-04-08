import { Toggle } from "@/components/ui";
import { Italic } from "lucide-react";

export default function ToggleStyleSolid() {
    return (
        <Toggle variant="solid">
            <Italic /> Italics
        </Toggle>
    );
}
