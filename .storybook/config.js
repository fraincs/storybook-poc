import React from "react";
import { configure, addDecorator } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure([require.context("../stories", true, /\.stories\.mdx$/)], module);
configure([require.context("../stories", true, /\.stories\.js$/)], module);
