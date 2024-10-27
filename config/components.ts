import { lazy } from "react";

export const componentConfig = {
  core: {
    accordion: {
      name: "accordion",
      filePath: "packages/ui/Accordions/Accordion.tsx",
    },
    avatar: {
      name: "avatar",
      filePath: "packages/ui/Avatars/Avatar.tsx",
    },
    button: {
      name: "button",
      filePath: "packages/ui/Buttons/Button.tsx",
    },
    card: {
      name: "card",
      filePath: "packages/ui/Cards/Card.tsx",
    },
    text: {
      name: "text",
      filePath: "packages/ui/Text/Text.tsx",
    },
    dialog: {
      name: "dialog",
      filePath: "packages/ui/Dialog/Dialog.tsx",
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
    "avatar-style-circle-fallbacks": {
      name: "avatar-style-fallbacks",
      filePath: "preview/components/avatar-style-circle-fallbacks.tsx",
      preview: lazy(
        () => import("@/preview/components/avatar-style-circle-fallbacks")
      ),
    },
    "avatar-style-circle-sizes": {
      name: "avatar-style-circle-sizes",
      filePath: "preview/components/avatar-style-circle-sizes.tsx",
      preview: lazy(
        () => import("@/preview/components/avatar-style-circle-sizes")
      ),
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
    "button-style-outline": {
      name: "button-style-default",
      filePath: "preview/components/button-style-outline.tsx",
      preview: lazy(() => import("@/preview/components/button-style-outline")),
    },
    "button-style-link": {
      name: "button-style-link",
      filePath: "preview/components/button-style-link.tsx",
      preview: lazy(() => import("@/preview/components/button-style-link")),
    },
    "card-style-default": {
      name: "card-style-default",
      filePath: "preview/components/card-style-default.tsx",
      preview: lazy(() => import("@/preview/components/card-style-default")),
    },
    "card-style-commerce": {
      name: "card-style-commerce",
      filePath: "preview/components/card-style-commerce.tsx",
      preview: lazy(() => import("@/preview/components/card-style-commerce")),
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
    "text-headings": {
      name: "text-headings",
      filePath: "preview/components/text-headings.tsx",
      preview: lazy(() => import("@/preview/components/text-headings")),
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
    "dialog-style-default": {
      name: "dialog-style-default",
      filePath: "preview/components/dialog-style-default.tsx",
      preview: lazy(() => import("@/preview/components/dialog-style-default")),
    },
    "dialog-style-with-footer": {
      name: "dialog-style-with-footer",
      filePath: "preview/components/dialog-style-with-footer.tsx",
      preview: lazy(
        () => import("@/preview/components/dialog-style-with-footer")
      ),
    },
    "dialog-style-width-variant": {
      name: "dialog-style-width-variant",
      filePath: "preview/components/dialog-style-width-variant.tsx",
      preview: lazy(
        () => import("@/preview/components/dialog-style-width-variant")
      ),
    },
    "dialog-style-with-form": {
      name: "dialog-style-with-form",
      filePath: "preview/components/dialog-style-with-form.tsx",
      preview: lazy(
        () => import("@/preview/components/dialog-style-with-form")
      ),
    },
  },
};
