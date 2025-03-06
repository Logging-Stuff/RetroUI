import { Badge } from "@/components/ui";

export default function BadgeStyleVariants() {
  return (
    <div className="space-x-4">
      <Badge>Default</Badge>
      <Badge variant="outline">Outlined</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="surface">Surface</Badge>
    </div>
  );
}
