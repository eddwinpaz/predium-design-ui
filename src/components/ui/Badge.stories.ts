import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Badge from "./Badge.vue";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "neutral",
        "positive",
        "warning",
        "negative",
        "accent",
        "purple",
      ],
    },
    size: { control: "select", options: ["sm", "md"] },
    dot: { control: "boolean" },
    closeable: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: { variant: "neutral" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Neutral</Badge>',
  }),
};
export const Positive: Story = {
  args: { variant: "positive" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Active</Badge>',
  }),
};
export const Warning: Story = {
  args: { variant: "warning" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Pending</Badge>',
  }),
};
export const Negative: Story = {
  args: { variant: "negative" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Error</Badge>',
  }),
};
export const Accent: Story = {
  args: { variant: "accent" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">New</Badge>',
  }),
};
export const WithDot: Story = {
  args: { variant: "positive", dot: true },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Online</Badge>',
  }),
};
export const Closeable: Story = {
  args: { variant: "neutral", closeable: true },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Removable</Badge>',
  }),
};
export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-2">
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="positive">Positive</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="negative">Negative</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="purple">Purple</Badge>
      </div>
    `,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
      </div>
    `,
  }),
};
