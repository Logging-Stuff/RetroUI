import { Text } from "@/packages/ui";

export default function TextExamples() {
  return (
    <div className="space-y-4">
      <Text variant="h3" tag="h1">
        Creating an `h1` Element with `h3` Styles.
      </Text>
      <Text variant="h5" tag="h4">
        Creating an `h4` Element with `h5` Styles.
      </Text>
      <Text variant="h6" tag="h6">
        Creating an `h6` Element with `h6` Styles.
      </Text>
    </div>
  );
}
