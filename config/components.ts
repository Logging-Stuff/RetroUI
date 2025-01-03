import { lazy } from "react";

export const componentConfig = {
  core: {
    accordion: {
      name: "accordion",
      filePath: "packages/ui/Accordions/Accordion.tsx",
    },
    alert: {
      name: "alert",
      filePath: "packages/ui/Alerts/Alert.tsx",
    },
    avatar: {
      name: "avatar",
      filePath: "packages/ui/Avatars/Avatar.tsx",
    },
    badge: {
      name: "badge",
      filePath: "packages/ui/Badges/Badge.tsx",
    },
    button: {
      name: "button",
      filePath: "packages/ui/Buttons/Button.tsx",
    },
    card: {
      name: "card",
      filePath: "packages/ui/Cards/Card.tsx",
    },

    dialog: {
      name: "dialog",
      filePath: "packages/ui/Dialog/Dialog.tsx",
    },
    menu: {
      name: "menu",
      filePath: "packages/ui/Menu/Menu.tsx",
    },
    text: {
      name: "text",
      filePath: "packages/ui/Text/Text.tsx",
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
    "alert-style-default": {
      name: "alert-style-default",
      filePath: "preview/components/alert-style-default.tsx",
      preview: lazy(() => import("@/preview/components/alert-style-default")),
    },
    "alert-style-solid": {
      name: "alert-style-solid",
      filePath: "preview/components/alert-style-solid.tsx",
      preview: lazy(() => import("@/preview/components/alert-style-solid")),
    },
    "alert-style-with-icon": {
      name: "alert-style-with-icon",
      filePath: "preview/components/alert-style-with-icon.tsx",
      preview: lazy(() => import("@/preview/components/alert-style-with-icon")),
    },
    "alert-style-all-status": {
      name: "alert-style-all-status",
      filePath: "preview/components/alert-style-all-status.tsx",
      preview: lazy(
        () => import("@/preview/components/alert-style-all-status")
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
    "badge-style-variants": {
      name: "badge-style-variants",
      filePath: "preview/components/badge-style-variants.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-variants")),
    },
    "badge-style-rounded": {
      name: "badge-style-default",
      filePath: "preview/components/badge-style-rounded.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-rounded")),
    },
    "badge-style-sizes": {
      name: "badge-style-sizes",
      filePath: "preview/components/badge-style-sizes.tsx",
      preview: lazy(() => import("@/preview/components/badge-style-sizes")),
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
    "card-style-testimonial": {
      name: "card-style-testimonial",
      filePath: "preview/components/card-style-testimonial.tsx",
      preview: lazy(
        () => import("@/preview/components/card-style-testimonial")
      ),
    },
    "input-style-default": {
      name: "input-style-default",
      filePath: "preview/components/input-style-default.tsx",
      preview: lazy(() => import("@/preview/components/input-style-default")),
    },
    "menu-style-default": {
      name: "menu-style-default",
      filePath: "preview/components/menu-style-default.tsx",
      preview: lazy(() => import("@/preview/components/menu-style-default")),
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
