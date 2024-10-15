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
      <TabList className="space-x-4 ">
        <Tab className="text-lg px-1 border-black data-[selected]:border-b-2 focus:outline-none">
          Preview
        </Tab>
        <Tab className="text-lg px-1 border-black data-[selected]:border-b-2 focus:outline-none">
          Code
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="border rounded p-6 mt-4">
            <Preview />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative rounded overflow-auto">{Code}</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
