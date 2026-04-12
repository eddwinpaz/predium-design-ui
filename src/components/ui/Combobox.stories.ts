import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Combobox from "./Combobox.vue";

const carrierOptions = [
  { label: "GlobalFlow Logistics", value: "globalflow" },
  { label: "Knight-Swift Transportation", value: "knight-swift" },
  { label: "XPO Logistics", value: "xpo" },
  { label: "J.B. Hunt Transport Services", value: "jb-hunt" },
  { label: "Schneider National", value: "schneider" },
  { label: "Werner Enterprises", value: "werner" },
  { label: "Landstar System", value: "landstar" },
  { label: "Old Dominion Freight Line", value: "old-dominion" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["compact", "default", "large"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  decorators: [
    () => ({
      template: '<div class="max-w-xs"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: (args) => ({
    components: { Combobox },
    setup() {
      const selected = ref<string | null>(null);
      return { selected, args, carrierOptions };
    },
    template: `
      <Combobox
        v-model="selected"
        :options="carrierOptions"
        placeholder="Select a carrier..."
        v-bind="args"
      />
      <p class="mt-3 text-xs text-content-tertiary">Selected: {{ selected ?? 'none' }}</p>
    `,
  }),
};

export const WithValue: Story = {
  render: () => ({
    components: { Combobox },
    setup() {
      const selected = ref<string | null>("xpo");
      return { selected, carrierOptions };
    },
    template: `
      <Combobox
        v-model="selected"
        :options="carrierOptions"
        placeholder="Select a carrier..."
      />
      <p class="mt-3 text-xs text-content-tertiary">Selected: {{ selected }}</p>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Combobox },
    setup() {
      const selected = ref<string | null>("knight-swift");
      return { selected, carrierOptions };
    },
    template: `
      <Combobox
        v-model="selected"
        :options="carrierOptions"
        placeholder="Select a carrier..."
        disabled
      />
    `,
  }),
};

export const Compact: Story = {
  render: () => ({
    components: { Combobox },
    setup() {
      const selected = ref<string | null>(null);
      return { selected, carrierOptions };
    },
    template: `
      <Combobox
        v-model="selected"
        :options="carrierOptions"
        placeholder="Select a carrier..."
        size="compact"
      />
    `,
  }),
};

export const ManyOptions: Story = {
  render: () => ({
    components: { Combobox },
    setup() {
      const selected = ref<string | null>(null);
      const manyOptions = [
        { label: "GlobalFlow Logistics", value: "globalflow" },
        { label: "Knight-Swift Transportation", value: "knight-swift" },
        { label: "XPO Logistics", value: "xpo" },
        { label: "J.B. Hunt Transport Services", value: "jb-hunt" },
        { label: "Schneider National", value: "schneider" },
        { label: "Werner Enterprises", value: "werner" },
        { label: "Landstar System", value: "landstar" },
        { label: "Old Dominion Freight Line", value: "old-dominion" },
        { label: "FedEx Freight", value: "fedex-freight" },
        { label: "UPS Freight", value: "ups-freight" },
        { label: "Saia Inc.", value: "saia" },
        { label: "Estes Express Lines", value: "estes" },
        { label: "R+L Carriers", value: "rl-carriers" },
        { label: "ABF Freight System", value: "abf" },
        { label: "Southeastern Freight Lines", value: "southeastern" },
        { label: "Heartland Express", value: "heartland" },
        { label: "USA Truck", value: "usa-truck" },
        { label: "Marten Transport", value: "marten" },
        { label: "PAM Transport", value: "pam" },
        { label: "Covenant Transport", value: "covenant" },
      ];
      return { selected, manyOptions };
    },
    template: `
      <Combobox
        v-model="selected"
        :options="manyOptions"
        placeholder="Search 20 carriers..."
      />
      <p class="mt-3 text-xs text-content-tertiary">Selected: {{ selected ?? 'none' }}</p>
    `,
  }),
};
