import type { Meta, StoryObj } from "@storybook/vue3";
import Stepper from "./Stepper.vue";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const threeSteps = [
  { label: "Event details" },
  { label: "Add lanes" },
  { label: "Invite carriers" },
];

export const Step1: Story = {
  render: () => ({
    components: { Stepper },
    setup() {
      return { steps: threeSteps };
    },
    template: `
      <div class="max-w-lg mx-auto py-8">
        <Stepper :steps="steps" :activeStep="0" />
      </div>
    `,
  }),
};

export const Step2: Story = {
  render: () => ({
    components: { Stepper },
    setup() {
      return { steps: threeSteps };
    },
    template: `
      <div class="max-w-lg mx-auto py-8">
        <Stepper :steps="steps" :activeStep="1" />
      </div>
    `,
  }),
};

export const Step3: Story = {
  render: () => ({
    components: { Stepper },
    setup() {
      return { steps: threeSteps };
    },
    template: `
      <div class="max-w-lg mx-auto py-8">
        <Stepper :steps="steps" :activeStep="2" />
      </div>
    `,
  }),
};

export const FourSteps: Story = {
  render: () => ({
    components: { Stepper },
    setup() {
      const steps = [
        { label: "Contract details" },
        { label: "Lanes & rates" },
        { label: "Terms" },
        { label: "Review & sign" },
      ];
      return { steps };
    },
    template: `
      <div class="max-w-2xl mx-auto py-8">
        <Stepper :steps="steps" :activeStep="0" />
      </div>
    `,
  }),
};
