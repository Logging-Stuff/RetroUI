import { Input, Label } from "@/components/retroui";

export default function InputStyleWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="pokemon">Favorite Pokemon</Label>
      <Input type="pokemon" id="pokemon" placeholder="Charmander" />
    </div>
  );
}
