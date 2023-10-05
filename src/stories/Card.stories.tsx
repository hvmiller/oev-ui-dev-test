import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image:
      "https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png",
    heading: "Heading",
    description:
      "In eu sunt laborum anim do sit. Sit officia non occaecat consequat amet proident qui mollit enim. Nostrud et enim consequat est quis aliqua adipisicing exercitation eiusmod adipisicing culpa sit exercitation.",
  },
};

export const Selected: Story = {
  args: {
    image:
      "https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png",
    heading: "Heading",
    description:
      "In eu sunt laborum anim do sit. Sit officia non occaecat consequat amet proident qui mollit enim. Nostrud et enim consequat est quis aliqua adipisicing exercitation eiusmod adipisicing culpa sit exercitation.",
    isSelected: true,
  },
};
export const WithButton: Story = {
  args: {
    image:
      "https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png",
    heading: "Heading",
    description:
      "In eu sunt laborum anim do sit. Sit officia non occaecat consequat amet proident qui mollit enim. Nostrud et enim consequat est quis aliqua adipisicing exercitation eiusmod adipisicing culpa sit exercitation.",
    button: {
      href: "#",
      label: "Read more",
    },
  },
};

export const FullImage: Story = {
  args: {
    image:
      "https://cdn.sanity.io/images/767s1cf5/production/7b2c0e69da5b7d3c08402e1ff63c3f076084d49a-5969x3981.jpg?rect=0,722,5969,2537&w=600&h=600",
    heading: "Heading",
    description:
      "In eu sunt laborum anim do sit. Sit officia non occaecat consequat amet proident qui mollit enim. Nostrud et enim consequat est quis aliqua adipisicing exercitation eiusmod adipisicing culpa sit exercitation.",
  },
};
export const NoImage: Story = {
  args: {
    heading: "Heading",
    description:
      "In eu sunt laborum anim do sit. Sit officia non occaecat consequat amet proident qui mollit enim. Nostrud et enim consequat est quis aliqua adipisicing exercitation eiusmod adipisicing culpa sit exercitation.",
  },
};
