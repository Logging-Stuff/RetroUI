import { Slider } from "@/components/ui";


type SliderConfig = {
  title: string;
} & React.ComponentProps<typeof Slider>;


const sliderConfigurations: SliderConfig[] = [
  {
    title: "Thin Slider",
    defaultValue: [75],
    min: 0,
    max: 100,
    step: 5,
    alwaysShowTooltip: true,
    trackVariant: "thin",
    thumbVariant: "smallThumb"
  },
  {
    title: "Visible Grid with Black Thumb",
    defaultValue: [0],
    min: -12,
    max: 12,
    step: 1,
    thumbColor: "black",
    thumbVariant: "mediumThumb",
    showGridLines: 1
  },
  {
    title: "Square Thumb",
    defaultValue: [20],
    min: 0,
    max: 100,
    alwaysShowTooltip: true,
    showGridLines: 0,
    thumbVariant: "mediumThumb"
  },
  {
    title: "Smaller thumb",
    defaultValue: [30],
    min: 0,
    max: 100,
    showValue: false,
    thumbVariant: "thinThumb",
    trackVariant: "thin"
  }
];

export default function SliderVariants() {
  const SliderVariant = (config: SliderConfig) => {
    const { title, ...sliderProps } = config;
    
    return (
      <div key={title}>
        <h3 className="text-lg mb-3">{title}</h3>

        <Slider
          aria-label={title}
          {...sliderProps}
        />
      </div>
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-8">
      
      {sliderConfigurations.map(SliderVariant)}
    </div>
  );
}
