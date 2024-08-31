import React from "react";
import { Button, H1, H2, H3, H4, H5, H6, Input, Textarea } from "@/components";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto">
      <H1>Welcome to RetroUI</H1>

      <div className="space-y-8 mt-12">
        <div>
          <H3>Typography</H3>

          <H1>This is H1</H1>
          <H2>This is H2</H2>
          <H3>This is H3</H3>
          <H4>This is H4</H4>
          <H5>This is H5</H5>
          <H6>This is H6</H6>
        </div>
        <div>
          <H3>Buttons</H3>
          <Button>Primary Button</Button>
        </div>

        <div>
          <H3>Forms</H3>
          <Input />
          <div className="h-4"></div>
          <Textarea />
        </div>

        <div>
          <H3>Forms</H3>
          <Input />
          <div className="h-4"></div>
          <Textarea />
        </div>
      </div>
    </div>
  );
}
