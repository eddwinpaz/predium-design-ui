import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import FormControl from "./FormControl.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";

const meta: Meta<typeof FormControl> = {
  title: "UI/FormControl",
  component: FormControl,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  render: (args) => ({
    components: { FormControl, Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: `
      <FormControl v-bind="args">
        <Input v-model="value" placeholder="Enter value..." />
      </FormControl>
    `,
  }),
  args: {
    label: "Full Name",
  },
};

export const WithCaption: Story = {
  render: (args) => ({
    components: { FormControl, Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: `
      <FormControl v-bind="args">
        <Input v-model="value" placeholder="you@company.com" />
      </FormControl>
    `,
  }),
  args: {
    label: "Email Address",
    caption: "We will never share your email with anyone.",
  },
};

export const WithError: Story = {
  render: (args) => ({
    components: { FormControl, Input },
    setup() {
      const value = ref("bad-email");
      return { args, value };
    },
    template: `
      <FormControl v-bind="args">
        <Input v-model="value" error />
      </FormControl>
    `,
  }),
  args: {
    label: "Email Address",
    error: "Please enter a valid email address.",
  },
};

export const Required: Story = {
  render: (args) => ({
    components: { FormControl, Input },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: `
      <FormControl v-bind="args">
        <Input v-model="value" placeholder="Required field" />
      </FormControl>
    `,
  }),
  args: {
    label: "Company Name",
    required: true,
    caption: "This field is required.",
  },
};

export const Composition: Story = {
  render: () => ({
    components: { FormControl, Input, Select },
    setup() {
      const name = ref("");
      const mode = ref(null);
      const options = [
        { label: "Full Truckload", value: "ftl" },
        { label: "LTL", value: "ltl" },
        { label: "Intermodal", value: "intermodal" },
      ];
      return { name, mode, options };
    },
    template: `
      <div class="max-w-md">
        <FormControl label="Shipment Name" required caption="Give your shipment a recognizable name.">
          <Input v-model="name" placeholder="e.g. Chicago to Dallas #412" />
        </FormControl>
        <FormControl label="Shipping Mode" required>
          <Select v-model="mode" :options="options" placeholder="Select shipping mode..." />
        </FormControl>
      </div>
    `,
  }),
};
