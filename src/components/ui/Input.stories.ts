import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Input from "./Input.vue";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["compact", "default", "large"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {},
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    placeholder: "Enter your name...",
  },
};

export const WithStartEnhancer: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: `
      <Input v-bind="args" v-model="value">
        <template #startEnhancer>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </template>
      </Input>
    `,
  }),
  args: {
    placeholder: "Search...",
  },
};

export const WithEndEnhancer: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: `
      <Input v-bind="args" v-model="value">
        <template #endEnhancer>
          <span class="text-xs">USD</span>
        </template>
      </Input>
    `,
  }),
  args: {
    placeholder: "Amount",
  },
};

export const Error: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("Invalid value");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    error: true,
  },
};

export const Positive: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("Valid value");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    positive: true,
  },
};

export const Clearable: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("Clear me");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    clearable: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("Disabled input");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const compact = ref("");
      const defaultVal = ref("");
      const large = ref("");
      return { compact, defaultVal, large };
    },
    template: `
      <div class="flex flex-col gap-3">
        <Input v-model="compact" size="compact" placeholder="Compact" />
        <Input v-model="defaultVal" size="default" placeholder="Default" />
        <Input v-model="large" size="large" placeholder="Large" />
      </div>
    `,
  }),
};

export const WithEndText: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("900");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    endText: "KG",
    placeholder: "Weight",
    type: "number",
  },
};

export const WithStartText: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref("1000");
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    startText: "$",
    placeholder: "Amount",
    type: "number",
  },
};

export const WithBothEnhancers: Story = {
  name: "Start Icon + End Text",
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("800");
      return { value };
    },
    template: `
      <Input v-model="value" endText="USD" placeholder="Amount" type="number">
        <template #startEnhancer>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        </template>
      </Input>
    `,
  }),
};

export const EnhancerVariants: Story = {
  name: "Enhancer Variants",
  render: () => ({
    components: { Input },
    setup() {
      const v1 = ref("900");
      const v2 = ref("800");
      const v3 = ref("1000");
      const v4 = ref("36.5");
      const v5 = ref("250");
      const v6 = ref("50");
      return { v1, v2, v3, v4, v5, v6 };
    },
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <div>
          <p class="text-xs text-content-tertiary mb-1">End text only</p>
          <Input v-model="v1" endText="KG" placeholder="Weight" type="number" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Start icon + end text</p>
          <Input v-model="v2" endText="USD" placeholder="Amount" type="number">
            <template #startEnhancer>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </template>
          </Input>
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Start text only</p>
          <Input v-model="v3" startText="L" placeholder="Volume" type="number" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Start + end text</p>
          <Input v-model="v4" startText="Temp" endText="°C" placeholder="Temperature" type="number" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Currency</p>
          <Input v-model="v5" startText="$" endText="CLP" placeholder="Price" type="number" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Percentage</p>
          <Input v-model="v6" endText="%" placeholder="Discount" type="number" />
        </div>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const v1 = ref("");
      const v2 = ref("With value");
      const v3 = ref("Error state");
      const v4 = ref("Positive state");
      const v5 = ref("Disabled");
      const v6 = ref("Clearable text");
      return { v1, v2, v3, v4, v5, v6 };
    },
    template: `
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <div>
          <p class="text-xs text-content-tertiary mb-1">Default</p>
          <Input v-model="v1" placeholder="Placeholder" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">With Value</p>
          <Input v-model="v2" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Error</p>
          <Input v-model="v3" error />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Positive</p>
          <Input v-model="v4" positive />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Disabled</p>
          <Input v-model="v5" disabled />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Clearable</p>
          <Input v-model="v6" clearable />
        </div>
      </div>
    `,
  }),
};
