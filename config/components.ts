import { lazy } from "react";

export const componentConfig = {
  core: {
    avatar: {
      name: "avatar",
      filePath: "packages/ui/Avatars/Avatar.tsx",
    },
  },
  examples: {
    "accordion-style-default": {
      name: "accordion-style-default",
      filePath: "preview/components/accordion-style-default.tsx",
      preview: lazy(
        () => import("@/preview/components/accordion-style-default")
      ),
    },
    "avatar-style-circle": {
      name: "avatar-style-circle",
      filePath: "preview/components/avatar-style-circle.tsx",
      preview: lazy(() => import("@/preview/components/avatar-style-circle")),
    },
    "badge-style-default": {
      name: "badge-style-default",
      filePath: "preview/components/badge-style-default.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-default")),
    },
    "badge-style-success": {
      name: "badge-style-default",
      filePath: "preview/components/badge-style-success.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-success")),
    },
    "badge-style-error": {
      name: "badge-style-default",
      filePath: "preview/components/badge-style-error.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-error")),
    },
    "badge-style-filled": {
      name: "badge-style-default",
      filePath: "preview/components/badge-style-filled.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-filled")),
    },
    "button-style-default": {
      name: "button-style-default",
      filePath: "preview/components/button-style-default.tsx",
      preview: lazy(() => import("@/preview/components/button-style-default")),
    },
    "card-style-default": {
      name: "card-style-default",
      filePath: "preview/components/card-style-default.tsx",
      preview: lazy(() => import("@/preview/components/card-style-default")),
    },
    "input-style-default": {
      name: "input-style-default",
      filePath: "preview/components/input-style-default.tsx",
      preview: lazy(() => import("@/preview/components/input-style-default")),
    },
    "textarea-style-default": {
      name: "textarea-style-default",
      filePath: "preview/components/textarea-style-default.tsx",
      preview: lazy(
        () => import("@/preview/components/textarea-style-default")
      ),
    },
    "typography-headings": {
      name: "typography-headings",
      filePath: "preview/components/typography-headings.tsx",
      preview: lazy(() => import("@/preview/components/typography-headings")),
    },
    "typography-p": {
      name: "typography-p",
      filePath: "preview/components/typography-p.tsx",
      preview: lazy(() => import("@/preview/components/typography-p")),
    },
    "tab-style-default": {
      name: "typography-p",
      filePath: "preview/components/tab-style-default.tsx",
      preview: lazy(() => import("@/preview/components/tab-style-default")),
    },
  },
};
