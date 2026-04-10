import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressSteps from './ProgressSteps.vue'

const meta: Meta<typeof ProgressSteps> = {
  title: 'UI/ProgressSteps',
  component: ProgressSteps,
  tags: ['autodocs'],
  argTypes: {
    currentStep: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof ProgressSteps>

const defaultSteps = [
  { title: 'Create shipment', description: 'Enter origin, destination, and cargo details' },
  { title: 'Select carrier', description: 'Choose from available carriers and rates' },
  { title: 'Confirm & book', description: 'Review details and confirm your booking' },
]

export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 0,
  },
}

export const SecondStep: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
  },
  render: (args) => ({
    components: { ProgressSteps },
    setup: () => ({ args }),
    template: `
      <ProgressSteps v-bind="args">
        <template #step-1>
          <div class="p-4 bg-[#f6f6f6] rounded-lg text-sm text-[#000]">
            <p class="font-medium mb-2">Available carriers:</p>
            <div class="space-y-2">
              <div class="flex justify-between"><span>GlobalFlow Carriers</span><span class="font-semibold">$3,200</span></div>
              <div class="flex justify-between"><span>Knight Swift</span><span class="font-semibold">$2,890</span></div>
              <div class="flex justify-between"><span>XPO Logistics</span><span class="font-semibold">$3,450</span></div>
            </div>
          </div>
        </template>
      </ProgressSteps>
    `,
  }),
}

export const AllCompleted: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
  },
}

export const FourSteps: Story = {
  args: {
    steps: [
      { title: 'Contract details', description: 'Set contract name, dates, and terms' },
      { title: 'Add lanes', description: 'Define origin-destination lane pairs' },
      { title: 'Set rates', description: 'Configure pricing for each lane' },
      { title: 'Review & finalize', description: 'Review all details and submit' },
    ],
    currentStep: 2,
  },
  render: (args) => ({
    components: { ProgressSteps },
    setup: () => ({ args }),
    template: `
      <ProgressSteps v-bind="args">
        <template #step-2>
          <div class="p-4 bg-[#f6f6f6] rounded-lg text-sm text-[#000]">
            <p class="font-medium mb-3">Set rates for each lane:</p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="flex-1">Chicago, IL → Dallas, TX</span>
                <div class="w-24 h-8 bg-white border border-[#e2e2e2] rounded-md flex items-center px-2 text-sm text-[#545454]">$2,400</div>
              </div>
              <div class="flex items-center gap-3">
                <span class="flex-1">Atlanta, GA → Miami, FL</span>
                <div class="w-24 h-8 bg-white border border-[#e2e2e2] rounded-md flex items-center px-2 text-sm text-[#545454]">$1,850</div>
              </div>
              <div class="flex items-center gap-3">
                <span class="flex-1">LA, CA → Phoenix, AZ</span>
                <div class="w-24 h-8 bg-white border border-[#e2e2e2] rounded-md flex items-center px-2 text-sm text-[#545454]">$1,200</div>
              </div>
            </div>
          </div>
        </template>
      </ProgressSteps>
    `,
  }),
}
