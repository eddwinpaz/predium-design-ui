import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import SegmentControl from "./SegmentControl.vue";

const meta: Meta<typeof SegmentControl> = {
  title: "UI/SegmentControl",
  component: SegmentControl,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    size: { control: "select", options: ["sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentControl>;

export const Default: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "all",
    options: [
      { label: "All modes", value: "all" },
      { label: "FTL", value: "ftl" },
      { label: "LTL", value: "ltl" },
    ],
  },
};

export const ThreeOptions: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
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

export const FourOptions: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Active", value: "active" },
      { label: "Completed", value: "completed" },
      { label: "Cancelled", value: "cancelled" },
    ],
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "all",
    size: "sm",
    options: [
      { label: "All modes", value: "all" },
      { label: "FTL", value: "ftl" },
      { label: "LTL", value: "ltl" },
    ],
  },
};

export const StatusFilter: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "all",
    options: [
      { label: "All", value: "all" },
      { label: "In Transit", value: "transit" },
      { label: "Delivered", value: "delivered" },
      { label: "Cancelled", value: "cancelled" },
    ],
  },
};
