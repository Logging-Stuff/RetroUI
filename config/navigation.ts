import { INavigationConfig } from "@/types";

const componentsRoute = "/docs/components";
const chartsRoute = "/docs/charts";
const utilsRoute = "/docs/utils";

export const navConfig: INavigationConfig = {
  topNavItems: [
    { title: "Documentation", href: "/docs" },
    { title: "Components", href: `${componentsRoute}/button` },
    { title: "Blogs", href: "/blogs" },
  ],
  sideNavItems: [
    {
      title: "Getting Started",
      children: [
        { title: "Introduction", href: "/docs" },
        {
          title: "Installation",
          href: "/docs/install",
        },
      ],
    },
    {
      title: "Components",
      children: [
        { title: "Accordion", href: `${componentsRoute}/accordion` },
        { title: "Alert", href: `${componentsRoute}/alert` },
        { title: "Avatar", href: `${componentsRoute}/avatar` },
        { title: "Badge", href: `${componentsRoute}/badge` },
        { title: "Breadcrumb", href: `${componentsRoute}/breadcrumb` },
        { title: "Button", href: `${componentsRoute}/button` },
        { title: "Card", href: `${componentsRoute}/card` },
        { title: "Checkbox", href: `${componentsRoute}/checkbox` },
        { title: "Dialog", href: `${componentsRoute}/dialog` },
        { title: "Input", href: `${componentsRoute}/input` },
        { title: "Label", href: `${componentsRoute}/label` },
        { title: "Menu", href: `${componentsRoute}/menu` },
        {
          title: "Popover",
          href: `${componentsRoute}/popover`,
        },
        { title: "Progress", href: `${componentsRoute}/progress` },
        { title: "Radio", href: `${componentsRoute}/radio` },
        { title: "Select", href: `${componentsRoute}/select` },
        { title: "Slider", href: `${componentsRoute}/slider` },
        {
          title: "Sonner",
          href: `${componentsRoute}/sonner`,
        },
        { title: "Switch", href: `${componentsRoute}/switch` },
        { title: "Tab", href: `${componentsRoute}/tab` },
        { title: "Table", href: `${componentsRoute}/table`, tag: "Updated" },
        { title: "Textarea", href: `${componentsRoute}/textarea` },
        { title: "Text", href: `${componentsRoute}/text` },
        {
          title: "Toggle",
          href: `${componentsRoute}/toggle`,
        },
        {
          title: "Toggle Group",
          href: `${componentsRoute}/toggle-group`,
        },
        {
          title: "Tooltip",
          href: `${componentsRoute}/tooltip`,
        },
      ],
    },
    {
      title: "Chart",
      children: [
        { title: "Bar Chart", href: `${chartsRoute}/bar-chart`, tag: "New" },
        { title: "Line Chart", href: `${chartsRoute}/line-chart`, tag: "New" },
        { title: "Area Chart", href: `${chartsRoute}/area-chart`, tag: "New" },
        { title: "Pie Chart", href: `${chartsRoute}/pie-chart`, tag: "New" },
      ],
    },
    {
      title: "Utilities",
      children: [{ title: "cn", href: `${utilsRoute}/cn` }],
    },
  ],
};
