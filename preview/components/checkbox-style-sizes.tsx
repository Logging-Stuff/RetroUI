import { Checkbox } from "@/packages/ui";

export default function CheckboxStyleSizes() {
  return (
    <div className="flex gap-4">
      <Checkbox size="sm" />
      <Checkbox />
      <Checkbox size="lg" />
    </div>
  );
}
