import { Button } from "@/components/retroui";
import { toast } from "sonner";

export default function SonnerStyleWarning() {
  const onClick = () => {
    toast.warning("This is a serious warning");
  };

  return <Button onClick={onClick}>Show Toast (Warning)</Button>;
}
