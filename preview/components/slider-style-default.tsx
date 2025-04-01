import { Slider } from "@/components/ui"
import { Label } from "@/components/ui"

export default function SliderDefault() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="mb-6">
        <Label 
          htmlFor="default-slider" 
          className="block text-sm font-medium mb-2"
        >
          Slider control
        </Label>
        <Slider
          defaultValue={[50]}
          min={0}
          max={100}
          step={1}
          variant="default"
          aria-label="Slider Control"
        />
      </div>
    </div>
  );
}