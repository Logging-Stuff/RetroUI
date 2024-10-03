// import { Code } from "bright";
import { componentConfig } from "@/config";
import dynamic from "next/dynamic";
import { H5 } from "@/packages/ui";
import React, { HTMLAttributes, Suspense } from "react";
const Code = dynamic(() => import("bright").then(mod => mod.Code));

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof componentConfig.registry;
}

export function ComponentShowcase({ name }: IComponentShowcase) {
  const { preview: Preview, codeHtml } = componentConfig.registry[name];
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
        <div className="relative rounded  overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Code lang="html" theme="dracula-soft">{codeHtml}</Code>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
