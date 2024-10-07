import { componentConfig } from "@/config";
import { H5 } from "@/packages/ui";
import React, { HTMLAttributes } from "react";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof componentConfig.registry;
}

export function ComponentShowcase({ name, children }: IComponentShowcase) {
  const { preview: Preview, codeHtml } = componentConfig.registry[name];
  const Code = React.Children.toArray(children)[0];

  return (
    <div className="space-y-6">
      <div>
        <H5>Preview</H5>
        <div className="mt-2 border rounded p-6">
          <Preview />
        </div>
      </div>

      <div>
        <H5>Code</H5>
        <div className="relative rounded  overflow-auto">{Code}</div>
      </div>
    </div>
  );
}
