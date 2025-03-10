import { Slider } from "@/components/ui";

export default function SliderDefault() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="mb-6">
        <label 
          htmlFor="default-slider" 
          className="block text-sm font-medium mb-2"
        >
          Volume Control
        </label>
        <Slider
          defaultValue={[50]}
          min={0}
          max={100}
          step={1}
          aria-label="Volume Control"
        />
      </div>
    </div>
  );
}
