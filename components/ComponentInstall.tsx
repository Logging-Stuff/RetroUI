import { componentConfig } from "@/config";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Code } from "lucide-react";
import { HTMLAttributes } from "react";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {}

function ComponentInstallCli({ children }: { children: React.ReactNode }) {
  return <TabPanel>{children}</TabPanel>;
}

function ComponentInstallManual({ children }: { children: React.ReactNode }) {
  return <TabPanel>{children}</TabPanel>;
}

function ComponentInstall({ children }: IComponentShowcase) {
  return (
    <TabGroup>
      <TabList className="border-b bg-transparent flex space-x-4 mb-6 text-sm">
        <Tab className="min-w-12 cursor-pointer relative px-2 py-1 bg-transparent data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white focus:outline-hidden">
          CLI
        </Tab>
        <Tab className="min-w-12 cursor-pointer relative px-2 py-1 bg-transparent data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white focus:outline-hidden">
          Manual
        </Tab>
      </TabList>

      <TabPanels>{children}</TabPanels>
    </TabGroup>
  );
}

Object.assign(ComponentInstall, {
  Cli: ComponentInstallCli,
  Manual: ComponentInstallManual,
});

export { ComponentInstall };
