import type { Meta, StoryObj } from "@storybook/vue3";
import ButtonGroup from "./ButtonGroup.vue";
import { ref } from "vue";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["compact", "default"] },
    modelValue: { control: "text" },
    options: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => ({
    components: { ButtonGroup },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <ButtonGroup
        v-bind="args"
        v-model="selected"
      />
    `,
  }),
  args: {
    modelValue: "week",
    options: [
      { label: "Day", value: "day" },
      { label: "Week", value: "week" },
      { label: "Month", value: "month" },
    ],
  },
};

export const WithDisabled: Story = {
  render: (args) => ({
    components: { ButtonGroup },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <ButtonGroup
        v-bind="args"
        v-model="selected"
      />
    `,
  }),
  args: {
    modelValue: "day",
    options: [
      { label: "Day", value: "day" },
      { label: "Week", value: "week", disabled: true },
      { label: "Month", value: "month" },
    ],
  },
};

export const Compact: Story = {
  render: (args) => ({
    components: { ButtonGroup },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <ButtonGroup
        v-bind="args"
        v-model="selected"
      />
    `,
  }),
  args: {
    modelValue: "week",
    size: "compact",
    options: [
      { label: "Day", value: "day" },
      { label: "Week", value: "week" },
      { label: "Month", value: "month" },
    ],
  },
};

export const FourOptions: Story = {
  render: (args) => ({
    components: { ButtonGroup },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <ButtonGroup
        v-bind="args"
        v-model="selected"
      />
    `,
  }),
  args: {
    modelValue: "grid",
    options: [
      { label: "List", value: "list" },
      { label: "Grid", value: "grid" },
      { label: "Board", value: "board" },
      { label: "Timeline", value: "timeline" },
    ],
  },
};
