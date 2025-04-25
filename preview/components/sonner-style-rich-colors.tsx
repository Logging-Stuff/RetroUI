import { Button } from "@/components/retroui";
import { toast } from "sonner";

export default function SonnerStyleRichColors() {
  const onClick = () => {
    toast.success("Congrats man 🎉", {
      richColors: true,
    });
  };

  return <Button onClick={onClick}>Show Toast (Rick colors)</Button>;
}
