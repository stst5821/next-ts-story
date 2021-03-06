import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import { Persons } from "./Persons";

//๐ This default export determines where your story goes in the story list
export default {
  title: "Persons",
  component: Persons,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof Persons>> = (args) => (
  <Persons {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};
