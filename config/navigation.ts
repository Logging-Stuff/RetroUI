import { INavigationConfig } from "@/types";

const componentsRoute = "/docs/components";
const utilsRoute = "/docs/utils";

export const navConfig: INavigationConfig = {
  topNavItems: [
    { title: "Documentation", href: "/docs" },
    { title: "Components", href: `${componentsRoute}/button` },
  ],
  sideNavItems: [
    {
      title: "Getting Started",
      children: [{ title: "Introduction", href: "/docs" }],
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
        { title: "Dialog", href: `${componentsRoute}/dialog` },
        { title: "Input", href: `${componentsRoute}/input` },
        { title: "Menu", href: `${componentsRoute}/menu` },
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
