import type { Meta, StoryObj } from "@storybook/vue3-vite";
import List from "./List.vue";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    hoverable: { control: "boolean" },
    divided: { control: "boolean" },
  },
  decorators: [
    () => ({
      template:
        '<div class="max-w-md border border-border rounded-lg overflow-hidden"><story /></div>',
    }),
  ],
};
export default meta;
type Story = StoryObj<typeof List>;

const defaultItems = [
  { label: "Account settings" },
  { label: "Privacy & security" },
  { label: "Notifications" },
  { label: "Payment methods" },
  { label: "Help & support" },
];

const itemsWithDescriptions = [
  {
    label: "Account settings",
    description: "Manage your personal information",
  },
  {
    label: "Privacy & security",
    description: "Control your data and permissions",
  },
  { label: "Notifications", description: "Choose what updates you receive" },
  { label: "Payment methods", description: "Add or remove payment options" },
  { label: "Help & support", description: "Get help with your account" },
];

const itemsWithEndContent = [
  { label: "Basic plan", endContent: "$9/mo" },
  { label: "Pro plan", endContent: "$29/mo" },
  { label: "Enterprise plan", endContent: "$99/mo" },
  { label: "Custom plan", endContent: "Contact us" },
];

export const Default: Story = {
  args: { items: defaultItems },
};

export const WithDescriptions: Story = {
  args: { items: itemsWithDescriptions },
};

export const WithEndContent: Story = {
  args: { items: itemsWithEndContent },
};

export const NoDividers: Story = {
  args: { items: defaultItems, divided: false },
};

export const CustomSlot: Story = {
  args: { items: itemsWithDescriptions },
  render: (args) => ({
    components: { List },
    setup: () => ({ args }),
    template: `
      <List v-bind="args">
        <template #item="{ item, index }">
          <div class="flex items-center gap-3 w-full">
            <div class="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-xs font-bold">
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-content-primary">{{ item.label }}</div>
              <div v-if="item.description" class="text-xs text-content-tertiary mt-0.5">{{ item.description }}</div>
            </div>
            <svg class="w-4 h-4 text-content-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </List>
    `,
  }),
};
