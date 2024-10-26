import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Input,
  Text,
} from "@/packages/ui";
import { DialogFooter } from "@/packages/ui/Dialog/DialogFooter";

export default function DialogStyleWithForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Form</Button>
      </DialogTrigger>
      <DialogContent size={"md"}>
        <DialogHeader position={"fixed"}>
          <Text as="h5">Contact Us</Text>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col p-4 gap-4">
            <div className="flex-col gap-2">
              <label htmlFor="name">
                Your name <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Type your name" required />
            </div>
            <div className="flex-col gap-2">
              <label htmlFor="name">
                Your e-email <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Type your name" required />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit">Submit</Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
