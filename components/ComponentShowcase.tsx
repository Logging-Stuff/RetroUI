import { componentConfig } from "@/config";
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import React, { HTMLAttributes } from "react";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof componentConfig.examples;
}

export function ComponentShowcase({ name, children }: IComponentShowcase) {
  const { preview: Preview } = componentConfig.examples[name];
  const Code = React.Children.toArray(children)[0];

  return (
    <TabGroup>
      <TabList className="space-x-4 border-b mb-6 text-sm">
        <Tab className="min-w-12 cursor-pointer relative px-2 py-1 bg-transparent data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white focus:outline-hidden">
          Preview
        </Tab>
        <Tab className="min-w-12 cursor-pointer relative px-2 py-1 bg-transparent data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white focus:outline-hidden">
          Code
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="border rounded-sm p-6 mt-4">
            <Preview />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative rounded-sm overflow-auto">{Code}</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
