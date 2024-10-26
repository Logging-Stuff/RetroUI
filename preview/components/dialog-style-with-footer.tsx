import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Text,
} from "@/packages/ui";
import { DialogFooter } from "@/packages/ui/Dialog/DialogFooter";

export default function DialogStyleWithFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader position={"fixed"} asChild>
          <Text as="h5">Confirm your action?</Text>
        </DialogHeader>
        <section className="flex flex-col gap-4 p-4">
          <section className="text-xl">
            <p>Are you sure you want to delete this item?</p>
            <p>This action cannout be undone.</p>
          </section>
        </section>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button>Confirm</Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Close</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
