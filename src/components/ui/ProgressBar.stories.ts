import type { Meta, StoryObj } from "@storybook/vue3";
import ProgressBar from "./ProgressBar.vue";

const meta: Meta<typeof ProgressBar> = {
  title: "UI/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    color: {
      control: "select",
      options: ["primary", "positive", "warning", "negative", "accent"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Colors: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div class="w-80 space-y-4">
        <div>
          <p class="text-xs text-content-tertiary mb-1">primary</p>
          <ProgressBar :value="75" color="primary" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">positive</p>
          <ProgressBar :value="75" color="positive" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">warning</p>
          <ProgressBar :value="75" color="warning" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">negative</p>
          <ProgressBar :value="75" color="negative" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">accent</p>
          <ProgressBar :value="75" color="accent" />
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div class="w-80 space-y-4">
        <div>
          <p class="text-xs text-content-tertiary mb-1">sm</p>
          <ProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">md</p>
          <ProgressBar :value="60" size="md" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">lg</p>
          <ProgressBar :value="60" size="lg" />
        </div>
      </div>
    `,
  }),
};

export const WithLabel: Story = {
  args: {
    value: 67,
    showLabel: true,
  },
};

export const Animated: Story = {
  args: {
    value: 45,
    animated: true,
    color: "accent",
  },
};
