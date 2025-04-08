import { Button } from "@/components/ui";
import { toast } from "sonner";

export default function SonnerStyleError() {
    const onClick = () => {
        toast.error("Oops! you ran into a pot hole");
    };

    return <Button onClick={onClick}>Show Toast (Error)</Button>;
}
