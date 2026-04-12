import type { Meta, StoryObj } from "@storybook/vue3";
import Banner from "./Banner.vue";

const meta: Meta<typeof Banner> = {
  title: "UI/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: "select",
      options: ["info", "positive", "warning", "negative"],
    },
    title: { control: "text" },
    closeable: { control: "boolean" },
    action: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    kind: "info",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">This is an informational message about your account.</Banner>`,
  }),
};

export const Positive: Story = {
  args: {
    kind: "positive",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">Your changes have been saved successfully.</Banner>`,
  }),
};

export const Warning: Story = {
  args: {
    kind: "warning",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">Your trial expires in 3 days. Upgrade now to keep access.</Banner>`,
  }),
};

export const Negative: Story = {
  args: {
    kind: "negative",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">Payment failed. Please update your billing information.</Banner>`,
  }),
};

export const WithTitle: Story = {
  args: {
    kind: "warning",
    title: "Attention",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">Scheduled maintenance on April 12th from 2:00 AM to 4:00 AM UTC.</Banner>`,
  }),
};

export const WithAction: Story = {
  args: {
    kind: "info",
    title: "New version available",
    action: "Update now",
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">Version 2.5.0 is ready to install.</Banner>`,
  }),
};

export const NonCloseable: Story = {
  args: {
    kind: "negative",
    title: "Service disruption",
    closeable: false,
  },
  render: (args) => ({
    components: { Banner },
    setup: () => ({ args }),
    template: `<Banner v-bind="args">We are experiencing issues with payment processing.</Banner>`,
  }),
};
