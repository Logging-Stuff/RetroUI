import { Switch } from "@/packages/ui";
import React from "react";

export default function SwitchStyleDefault() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notification" />
      <label htmlFor="notification">Email Notifications</label>
    </div>
  );
}
