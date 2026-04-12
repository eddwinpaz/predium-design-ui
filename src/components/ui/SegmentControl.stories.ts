import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import SegmentControl from "./SegmentControl.vue";

const meta: Meta<typeof SegmentControl> = {
  title: "UI/SegmentControl",
  component: SegmentControl,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    size: { control: "select", options: ["compact", "default", "large"] },
    rounded: { control: "boolean" },
    variant: { control: "select", options: ["filled", "outlined"] },
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

export const Squared: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "normal",
    rounded: false,
    options: [
      { label: "Low", value: "low" },
      { label: "Normal", value: "normal" },
      { label: "High", value: "high" },
    ],
  },
};

export const Compact: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "ftl",
    size: "compact",
    options: [
      { label: "FTL", value: "ftl" },
      { label: "LTL", value: "ltl" },
      { label: "Parcel", value: "parcel" },
    ],
  },
};

export const Large: Story = {
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
    size: "large",
    options: [
      { label: "Day", value: "day" },
      { label: "Week", value: "week" },
      { label: "Month", value: "month" },
    ],
  },
};

export const LargeSquared: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "active",
    size: "large",
    rounded: false,
    options: [
      { label: "All", value: "all" },
      { label: "Active", value: "active" },
      { label: "Completed", value: "completed" },
      { label: "Cancelled", value: "cancelled" },
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

export const Outlined: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "flatbed",
    variant: "outlined",
    rounded: false,
    options: [
      { label: "Dry van", value: "dryvan", icon: "M1 3h15v13H1zM16 8h4l3 4v5h-7V8z" },
      { label: "Reefer", value: "reefer", icon: "M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" },
      { label: "Flatbed (48')", value: "flatbed", icon: "M1 14l4-8h14l2 4M5 18a2 2 0 100-4 2 2 0 000 4zM19 18a2 2 0 100-4 2 2 0 000 4zM1 14h3M7 14h8M21 14h2" },
    ],
  },
};

export const OutlinedRounded: Story = {
  render: (args) => ({
    components: { SegmentControl },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: '<SegmentControl v-bind="args" v-model="selected" />',
  }),
  args: {
    modelValue: "casa",
    variant: "outlined",
    rounded: true,
    options: [
      { label: "Casa", value: "casa", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
      { label: "Departamento", value: "depto", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M1 21h22" },
      { label: "Oficina", value: "oficina", icon: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM12 11v6M8 11v6M16 11v6" },
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
