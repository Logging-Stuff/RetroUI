import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function TabStyleDefault() {
  return (
    <TabGroup>
      <TabList>
        <Tab className="px-4 py-1 border-2 border-transparent data-[selected]:border-black data-[selected]:bg-primary-400 data-[selected]:font-semibold focus:outline-none">
          Home
        </Tab>
        <Tab className="px-4 py-1 border-2 border-transparent data-[selected]:border-black data-[selected]:bg-primary-400 data-[selected]:font-semibold focus:outline-none">
          About
        </Tab>
        <Tab className="px-4 py-1 border-2 border-transparent data-[selected]:border-black data-[selected]:bg-primary-400 data-[selected]:font-semibold focus:outline-none">
          Contact
        </Tab>
      </TabList>
      <TabPanels className="border-2 border-black mt-2 p-4">
        <TabPanel>
          Welcome to RetroUI, a retro styled UI library built with React,
          Tailwind CSS & Headless UI.
        </TabPanel>
        <TabPanel>This is the about section!</TabPanel>
        <TabPanel>And, this is the contact section!</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
