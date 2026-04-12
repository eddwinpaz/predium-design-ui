import type { Meta, StoryObj } from "@storybook/vue3";
import Drawer from "./Drawer.vue";
import { ref } from "vue";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    side: { control: "select", options: ["left", "right"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    title: { control: "text" },
    open: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg"
          @click="isOpen = true"
        >
          Open Drawer
        </button>
        <Drawer v-bind="args" :open="isOpen" @close="isOpen = false">
          <div class="space-y-4">
            <p class="text-sm text-content-secondary">This is the drawer content. You can place any content here.</p>
            <div class="p-4 bg-bg-secondary rounded-lg">
              <p class="text-sm text-content-primary font-medium">Section Title</p>
              <p class="text-sm text-content-secondary mt-1">Some detailed information goes here.</p>
            </div>
            <div class="p-4 bg-bg-secondary rounded-lg">
              <p class="text-sm text-content-primary font-medium">Another Section</p>
              <p class="text-sm text-content-secondary mt-1">More content for the drawer panel.</p>
            </div>
          </div>
        </Drawer>
      </div>
    `,
  }),
  args: {
    title: "Drawer Title",
    side: "right",
    size: "md",
  },
};

export const LeftSide: Story = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg"
          @click="isOpen = true"
        >
          Open Left Drawer
        </button>
        <Drawer v-bind="args" :open="isOpen" @close="isOpen = false">
          <p class="text-sm text-content-secondary">This drawer slides in from the left side.</p>
        </Drawer>
      </div>
    `,
  }),
  args: {
    title: "Left Drawer",
    side: "left",
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg"
          @click="isOpen = true"
        >
          Open Large Drawer
        </button>
        <Drawer v-bind="args" :open="isOpen" @close="isOpen = false">
          <div class="space-y-4">
            <p class="text-sm text-content-secondary">This is a large drawer with more space for content.</p>
            <div v-for="n in 8" :key="n" class="p-4 bg-bg-secondary rounded-lg">
              <p class="text-sm text-content-primary font-medium">Item {{ n }}</p>
              <p class="text-sm text-content-secondary mt-1">Description for item {{ n }}.</p>
            </div>
          </div>
        </Drawer>
      </div>
    `,
  }),
  args: {
    title: "Large Drawer",
    side: "right",
    size: "lg",
  },
};

export const WithFooter: Story = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg"
          @click="isOpen = true"
        >
          Open Drawer with Footer
        </button>
        <Drawer v-bind="args" :open="isOpen" @close="isOpen = false">
          <div class="space-y-4">
            <p class="text-sm text-content-secondary">This drawer has a footer with action buttons.</p>
            <div class="p-4 bg-bg-secondary rounded-lg">
              <p class="text-sm text-content-primary font-medium">Form Content</p>
              <p class="text-sm text-content-secondary mt-1">Fill in the details and use the footer buttons to save or cancel.</p>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2">
              <button
                class="px-4 py-2 text-sm font-medium text-content-primary bg-bg-secondary rounded-lg hover:bg-border transition-colors"
                @click="isOpen = false"
              >
                Cancel
              </button>
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-btn-primary rounded-lg hover:bg-content-secondary transition-colors"
                @click="isOpen = false"
              >
                Save
              </button>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
  args: {
    title: "Edit Details",
    side: "right",
    size: "md",
  },
};
