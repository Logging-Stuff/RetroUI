import { Slider } from "@/components/ui";

export default function SliderVariants() {
  return (
    <div className="p-6 max-w-md mx-auto space-y-8">
      <div>
        <h3 className="text-lg mb-3">Thin Slider</h3>
        <Slider
          aria-label="Thin Slider"
          defaultValue={[75]}
          min={0}
          max={100}
          step={5}
          alwaysShowTooltip={true}
          trackVariant="thin"
          thumbVariant="smallThumb"
        />
      </div>

      <div>
        <h3 className="text-lg mb-3">Visible Grid with Black Thumb</h3>
        <Slider
          aria-label="Visible Grid with Black Thumb"
          defaultValue={[0]}
          min={-12}
          max={12}
          step={1}
          thumbColor="black"
          thumbVariant="mediumThumb"
          showGridLines={1}
        />
      </div>

      <div>
        <h3 className="text-lg mb-3">Square Thumb</h3>
        <Slider
          aria-label="Square Thumb"
          defaultValue={[20]}
          min={0}
          max={100}
          alwaysShowTooltip={true}
          showGridLines={0}
          thumbVariant="mediumThumb"
        />
      </div>

      <div>
        <h3 className="text-lg mb-3">Smaller thumb</h3>
        <Slider
          aria-label="Smaller thumb"
          defaultValue={[30]}
          min={0}
          max={100}
          showValue={false}
          thumbVariant="thinThumb"
          trackVariant="thin"
        />
      </div>
    </div>
  );
}
