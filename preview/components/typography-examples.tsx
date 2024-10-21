import { Typography } from "@/packages/ui";

export default function TypographyExamples() {
  return (
    <div className="space-y-4">
      <Typography variant="h3">
        Creating an `h1` Element with `h3` Styles.
      </Typography>
      <Typography variant="h5" component="h4">
        Creating an `h4` Element with `h5` Styles.
      </Typography>
      <Typography component="h6" variant="h6">
        Creating an `h6` Element with `h6` Styles.
      </Typography>
    </div>
  );
}
