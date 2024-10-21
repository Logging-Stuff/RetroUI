import { Typography } from "@/packages/ui";

export default function TypographyHeadings() {
  return (
    <div className="space-y-4">
      <Typography>This is H1</Typography>
      <Typography variant="h2" component="h2">
        This is H2
      </Typography>
      <Typography variant="h3" component="h3">
        This is H3
      </Typography>
      <Typography variant="h4" component="h4">
        This is H4
      </Typography>
      <Typography variant="h5" component="h5">
        This is H5
      </Typography>
      <Typography variant="h6" component="h6">
        This is H6
      </Typography>
    </div>
  );
}
