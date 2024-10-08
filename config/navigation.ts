import { INavigationConfig } from "@/types";

const componentsRoute = "/docs/components";

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
        { title: "Avatar", href: `${componentsRoute}/avatar` },
        { title: "Badge", href: `${componentsRoute}/badge` },
        { title: "Button", href: `${componentsRoute}/button` },
        { title: "Card", href: `${componentsRoute}/card` },
        { title: "Input", href: `${componentsRoute}/input` },
        { title: "Tab", href: `${componentsRoute}/tab` },
        { title: "Textarea", href: `${componentsRoute}/textarea` },
        { title: "Typography", href: `${componentsRoute}/typography` },
      ],
    },
  ],
};
