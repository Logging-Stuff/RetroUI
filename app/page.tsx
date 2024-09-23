import React from "react";
import {
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Input,
  Textarea,
  Accordion,
  BasicCard,
  ProductCard,
  Avatar,
  Badge
} from "@/packages/ui";
import { Login } from "@/packages/ui/Login";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto mb-96">
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
          <H3>Avatars</H3>
          <Avatar />
        </div>

        <div>
          <H3>Buttons</H3>
          <Button>Primary Button</Button>
        </div>

        <div>
          <H3>Badges</H3>
          <div className="space-x-2 mt-2">
            <Badge>Default Badge</Badge>
            <Badge variant="error">Error Badge</Badge>
            <Badge variant="success">Success Badge</Badge>
            <Badge className="rounded-full">Rounded Badge</Badge>
          </div>
        </div>

        <div>
          <H3>Forms</H3>
          <Input />
          <div className="h-4"></div>
          <Textarea />
        </div>

        <div>
          <H3>Accordions</H3>
          <Accordion />
        </div>

        <div>
          <H3>Cards</H3>
          <BasicCard />
          <div className="h-4"></div>
          <ProductCard />
        </div>

        <div>
          <H3>Login</H3>
          <Login />
        </div>
      </div>
    </div>
  );
}
