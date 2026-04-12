import type { Meta, StoryObj } from "@storybook/vue3-vite";
import EmptyState from "./EmptyState.vue";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["search", "document", "inbox", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No results found",
    description:
      "Try adjusting your search or filter to find what you are looking for.",
    actionLabel: "Clear filters",
    icon: "search",
  },
};

export const NoProperties: Story = {
  args: {
    title: "No properties yet",
    description: "Get started by adding your first property to the platform.",
    actionLabel: "Add property",
    secondaryActionLabel: "Import from CSV",
    icon: "inbox",
  },
};

export const NoDocuments: Story = {
  args: {
    title: "No documents",
    description:
      "Upload lease agreements, inspection reports, or other documents.",
    actionLabel: "Upload document",
    icon: "document",
  },
};

export const ErrorState: Story = {
  args: {
    title: "Something went wrong",
    description: "We encountered an error loading this page. Please try again.",
    actionLabel: "Retry",
    secondaryActionLabel: "Contact support",
    icon: "error",
  },
};

export const NoAction: Story = {
  args: {
    title: "All caught up!",
    description: "There are no pending maintenance requests at this time.",
    icon: "inbox",
  },
};

export const CustomIcon: Story = {
  render: () => ({
    components: { EmptyState },
    template: `
      <EmptyState
        title="No tenants assigned"
        description="This unit doesn't have any tenants yet. Create a lease to assign a tenant."
        actionLabel="Create lease"
      >
        <template #icon>
          <svg class="w-[36px] h-[36px] text-content-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        </template>
      </EmptyState>
    `,
  }),
};
