import { Checkbox, Text } from "@/components/ui";

export default function CheckboxStyleDefault() {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <Text>Accept terms and conditions</Text>
    </div>
  );
}
