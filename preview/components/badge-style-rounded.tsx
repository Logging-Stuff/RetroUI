import { Badge } from "@/components/ui";

export default function BadgeStyleRounded() {
  return (
    <div className="space-x-4">
      <Badge variant="solid" className="rounded">
        Rounded
      </Badge>
      <Badge variant="solid" className="rounded-full">
        Full
      </Badge>
    </div>
  );
}
