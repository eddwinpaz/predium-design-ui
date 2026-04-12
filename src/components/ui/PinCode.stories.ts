import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import PinCode from "./PinCode.vue";

const meta: Meta<typeof PinCode> = {
  title: "UI/PinCode",
  component: PinCode,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    length: { control: { type: "number", min: 2, max: 8 } },
    mask: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    size: { control: "select", options: ["compact", "default"] },
  },
};

export default meta;
type Story = StoryObj<typeof PinCode>;

export const Default: Story = {
  render: (args) => ({
    components: { PinCode },
    setup() {
      const code = ref("");
      return { code, args };
    },
    template: `
      <div class="flex flex-col gap-2">
        <PinCode v-model="code" v-bind="args" />
        <span class="text-sm text-content-secondary">Value: "{{ code }}"</span>
      </div>
    `,
  }),
};

export const Masked: Story = {
  render: (args) => ({
    components: { PinCode },
    setup() {
      const code = ref("");
      return { code, args };
    },
    template: `<PinCode v-model="code" mask v-bind="args" />`,
  }),
};

export const Error: Story = {
  args: {
    modelValue: "12",
    error: true,
  },
};

export const Compact: Story = {
  render: (args) => ({
    components: { PinCode },
    setup() {
      const code = ref("");
      return { code, args };
    },
    template: `<PinCode v-model="code" size="compact" v-bind="args" />`,
  }),
};

export const SixDigit: Story = {
  render: (args) => ({
    components: { PinCode },
    setup() {
      const code = ref("");
      return { code, args };
    },
    template: `<PinCode v-model="code" :length="6" v-bind="args" />`,
  }),
};

export const Filled: Story = {
  args: {
    modelValue: "8492",
    length: 4,
  },
};
