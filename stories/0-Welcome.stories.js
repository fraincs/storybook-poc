import React from "react";
import Welcome from "../src/Welcome";

export default {
  title: "Welcome Teaser",
  component: Welcome
};

export const Canadian = () => <Welcome name="Canadian" age={18} />;
export const American = () => <Welcome name="American" age={21} />;
export const European = () => <Welcome name="European" age={24} />;
export const Disabled = () => <Welcome name="European" age={24} disabled />;

Canadian.story = {
  name: "Canadian",
  parameters: {
    componentSubtitle: "Handy status label"
  }
};

American.story = {
  name: "American"
};

European.story = {
  name: "European"
};

Disabled.story = {
  name: "Disabled"
};
