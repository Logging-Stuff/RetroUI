import { Text } from "@/packages/ui";

export default function TextHeadings() {
  return (
    <div className="space-y-4">
      <Text tag="h1" variant="h1">
        This is H1
      </Text>
      <Text variant="h2" tag="h2">
        This is H2
      </Text>
      <Text variant="h3" tag="h3">
        This is H3
      </Text>
      <Text variant="h4" tag="h4">
        This is H4
      </Text>
      <Text variant="h5" tag="h5">
        This is H5
      </Text>
      <Text variant="h6" tag="h6">
        This is H6
      </Text>
    </div>
  );
}
