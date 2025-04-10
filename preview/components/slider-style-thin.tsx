import { Slider } from "@/components/ui";
import { Label } from "@/components/ui"

export default function SliderDefault() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="mb-6">
        <Label 
          htmlFor="default-slider" 
          className="block text-sm font-medium mb-2"
        >
          Volume Control
        </Label>
        <Slider
          defaultValue={[45]}
          min={0}
          max={100}
          step={1}
          variant="thin"
          aria-label="Volume Control"
        />
      </div>
    </div>
  );
}