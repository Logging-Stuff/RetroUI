import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Text,
} from "@/packages/ui";

export default function DialogStyleDefault() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Text as="h5">Confirm your action?</Text>
        </DialogHeader>
        <section className="flex flex-col gap-4 p-4">
          <section className="text-xl">
            <p>Are you sure you want to delete this item?</p>
            <p>This action cannout be undone.</p>
          </section>
          <section className="flex w-full justify-end">
            <DialogTrigger asChild>
              <Button>Confirm</Button>
            </DialogTrigger>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
}
