import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Skeleton from "./Skeleton.vue";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["text", "circle", "rect"] },
    width: { control: "text" },
    height: { control: "text" },
    rows: { control: "number" },
    animated: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const TextLines: Story = {
  args: { variant: "text", rows: 3 },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<div class="w-80"><Skeleton v-bind="args" /></div>',
  }),
};

export const Circle: Story = {
  args: { variant: "circle", width: "48px" },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
};

export const Rectangle: Story = {
  args: { variant: "rect", width: "320px", height: "180px" },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
};

export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-start gap-3 p-4 border border-border rounded-xl w-80">
        <Skeleton variant="circle" width="48px" />
        <div class="flex-1">
          <Skeleton variant="text" :rows="3" />
        </div>
      </div>
    `,
  }),
};

export const NoAnimation: Story = {
  args: { variant: "text", rows: 3, animated: false },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<div class="w-80"><Skeleton v-bind="args" /></div>',
  }),
};
