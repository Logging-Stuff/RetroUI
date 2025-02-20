import { Checkbox, Text } from "@/packages/ui";

export default function CheckboxStyleVariants() {
  return (
    <div className="flex gap-4">
      <Checkbox />
      <Checkbox variant="outline" />
      <Checkbox variant="solid" />
    </div>
  );
}
