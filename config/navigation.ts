import { INavigationConfig } from "@/types";

const componentsRoute = "/docs/components";
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
        { title: "Introduction", href: "/docs", tag: "Updated" },
        {
          title: "Installation",
          href: "/docs/install",
          tag: "New",
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
        { title: "Button", href: `${componentsRoute}/button` },
        { title: "Card", href: `${componentsRoute}/card` },
        { title: "Checkbox", href: `${componentsRoute}/checkbox` },
        { title: "Dialog", href: `${componentsRoute}/dialog` },
        { title: "Input", href: `${componentsRoute}/input` },
        { title: "Label", href: `${componentsRoute}/label`, tag: "New" },
        { title: "Menu", href: `${componentsRoute}/menu` },
        { title: "Progress", href: `${componentsRoute}/progress` },
        { title: "Radio", href: `${componentsRoute}/radio` },
        { title: "Select", href: `${componentsRoute}/select` },
        { title: "Slider", href: `${componentsRoute}/slider`, tag: "New" },
        { title: "Switch", href: `${componentsRoute}/switch` },
        { title: "Tab", href: `${componentsRoute}/tab` },
        { title: "Textarea", href: `${componentsRoute}/textarea` },
        { title: "Text", href: `${componentsRoute}/text` },
      ],
    },
    {
      title: "Utilities",
      children: [{ title: "cn", href: `${utilsRoute}/cn` }],
    },
  ],
};
