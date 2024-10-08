import {
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsPanels,
  TabsTrigger,
  TabsTriggerList,
} from "@/packages/ui";
import React from "react";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto space-y-6">
      <div className="space-x-4">
        <Button>Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
      <div className="space-x-4">
        <Badge>Badge</Badge>
        <Badge variant="success">Badge</Badge>
        <Badge variant="error">Badge</Badge>
        <Badge variant="filled">Badge</Badge>
      </div>

      <div>
        <Tabs>
          <TabsTriggerList>
            <TabsTrigger>Tab 1</TabsTrigger>
            <TabsTrigger>Tab 2</TabsTrigger>
            <TabsTrigger>Tab 3</TabsTrigger>
          </TabsTriggerList>
          <TabsPanels>
            <TabsContent>Content 1</TabsContent>
            <TabsContent>Content 2</TabsContent>
            <TabsContent>Content 3</TabsContent>
          </TabsPanels>
        </Tabs>
      </div>
    </div>
  );
}
