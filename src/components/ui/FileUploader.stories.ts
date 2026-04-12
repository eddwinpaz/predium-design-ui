import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FileUploader from "./FileUploader.vue";

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
  argTypes: {
    accept: { control: "text" },
    multiple: { control: "boolean" },
    maxSize: { control: "number" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
  decorators: [
    () => ({
      template: '<div class="max-w-md"><story /></div>',
    }),
  ],
};
export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {},
};

export const AcceptPDF: Story = {
  args: { accept: ".pdf,.doc,.docx", label: "Drop documents here or" },
};

export const Multiple: Story = {
  args: { multiple: true, label: "Drop multiple files here or" },
};

export const WithFiles: Story = {
  render: () => ({
    components: { FileUploader },
    template: "<FileUploader multiple />",
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
};
