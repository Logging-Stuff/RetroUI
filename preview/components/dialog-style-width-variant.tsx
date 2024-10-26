import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Text,
} from "@/packages/ui";
import { useState } from "react";

type Variants =
  | "auto"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "screen";

export default function DialogStyleWidthVariant() {
  const [variant, setVariant] = useState<Variants>("auto");

  const sizes: Variants[] = [
    "auto",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "screen",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent size={variant}>
        <DialogHeader>
          <Text as="h5">Dialog with variants</Text>
        </DialogHeader>
        <section className="flex flex-col gap-4 p-4">
          <section className="text-xl">
            <p>Choose your width size</p>
            <section className="flex flex-wrap gap-4">
              {sizes.map((singleVariant) => (
                <Button
                  key={"variant-list-" + singleVariant}
                  type="button"
                  variant={singleVariant == variant ? "default" : "outline"}
                  onClick={() => setVariant(singleVariant)}
                >
                  {singleVariant}
                </Button>
              ))}
            </section>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
}
