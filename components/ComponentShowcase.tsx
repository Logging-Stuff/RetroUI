import { componentConfig } from "@/config";
import { H5 } from "@/packages/ui";
import React, { HTMLAttributes } from "react";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof componentConfig.registry;
}

export function ComponentShowcase({ name }: IComponentShowcase) {
  const { preview: Preview, codeHtml } = componentConfig.registry[name];
  return (
    <div>
      <div>
        <H5>Preview</H5>
        <div className="border rounded p-6">
          <Preview />
        </div>
      </div>

      <div>
        <H5>Code</H5>
        <div className="border relative rounded p-4 bg-[#222222] text-zinc-200">
          <code>
            <pre>{codeHtml}</pre>
          </code>
        </div>
      </div>
    </div>
  );
}
