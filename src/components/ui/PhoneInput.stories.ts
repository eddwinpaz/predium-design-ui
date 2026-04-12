import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import PhoneInput from "./PhoneInput.vue";

const meta: Meta<typeof PhoneInput> = {
  title: "UI/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    countryCode: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    size: { control: "select", options: ["compact", "default", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: (args) => ({
    components: { PhoneInput },
    setup() {
      const phone = ref("");
      const code = ref("+1");
      return { phone, code, args };
    },
    template: `
      <div class="flex flex-col gap-2">
        <PhoneInput v-model="phone" v-model:countryCode="code" v-bind="args" />
        <span class="text-sm text-content-secondary">{{ code }} {{ phone }}</span>
      </div>
    `,
  }),
};

export const WithValue: Story = {
  args: {
    modelValue: "(555) 123-4567",
    countryCode: "+1",
  },
};

export const Error: Story = {
  args: {
    modelValue: "123",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "(555) 123-4567",
    disabled: true,
  },
};

export const MexicoCode: Story = {
  args: {
    modelValue: "55 1234 5678",
    countryCode: "+52",
  },
};

export const Compact: Story = {
  render: (args) => ({
    components: { PhoneInput },
    setup() {
      const phone = ref("");
      const code = ref("+1");
      return { phone, code, args };
    },
    template: `<PhoneInput v-model="phone" v-model:countryCode="code" size="compact" v-bind="args" />`,
  }),
};
