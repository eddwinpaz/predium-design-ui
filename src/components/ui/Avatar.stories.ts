import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./Avatar.vue";
import { h } from "vue";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "John Doe",
    size: "md",
  },
};

export const WithImage: Story = {
  args: {
    name: "Jane Smith",
    size: "md",
    src: "https://i.pravatar.cc/150?u=jane",
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-3">
        <Avatar name="Alice Brown" size="xs" />
        <Avatar name="Alice Brown" size="sm" />
        <Avatar name="Alice Brown" size="md" />
        <Avatar name="Alice Brown" size="lg" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-3">
        <Avatar name="Alice Brown" />
        <Avatar name="Bob Carter" />
        <Avatar name="Charlie Davis" />
        <Avatar name="Diana Evans" />
        <Avatar name="Edward Fox" />
        <Avatar name="Fiona Grant" />
      </div>
    `,
  }),
};

export const Group: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center">
        <Avatar name="Alice Brown" size="md" class="ring-2 ring-white" />
        <Avatar name="Bob Carter" size="md" class="-ml-2 ring-2 ring-white" />
        <Avatar name="Charlie Davis" size="md" class="-ml-2 ring-2 ring-white" />
        <Avatar name="Diana Evans" size="md" class="-ml-2 ring-2 ring-white" />
      </div>
    `,
  }),
};
