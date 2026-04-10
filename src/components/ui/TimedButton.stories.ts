import type { Meta, StoryObj } from '@storybook/vue3-vite'
import TimedButton from './TimedButton.vue'
import { ref } from 'vue'

const meta: Meta<typeof TimedButton> = {
  title: 'UI/TimedButton',
  component: TimedButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    duration: { control: 'number' },
    autoStart: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TimedButton>

export const Default: Story = {
  args: {
    label: 'Label',
    duration: 6,
  },
  render: (args) => ({
    components: { TimedButton },
    setup: () => ({ args }),
    template: '<TimedButton v-bind="args" @complete="() => {}" @click="() => {}" />',
  }),
}

export const AutoStart: Story = {
  args: {
    label: 'Processing',
    duration: 10,
    autoStart: true,
  },
  render: (args) => ({
    components: { TimedButton },
    setup: () => ({ args }),
    template: '<TimedButton v-bind="args" />',
  }),
}

export const ShortTimer: Story = {
  args: {
    label: 'Confirm',
    duration: 3,
  },
  render: (args) => ({
    components: { TimedButton },
    setup: () => ({ args }),
    template: '<TimedButton v-bind="args" />',
  }),
}

export const LongTimer: Story = {
  args: {
    label: 'Expires',
    duration: 120,
  },
  render: (args) => ({
    components: { TimedButton },
    setup: () => ({ args }),
    template: '<TimedButton v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    duration: 6,
    disabled: true,
  },
  render: (args) => ({
    components: { TimedButton },
    setup: () => ({ args }),
    template: '<TimedButton v-bind="args" />',
  }),
}

export const WithReset: Story = {
  render: () => ({
    components: { TimedButton },
    setup() {
      const btnRef = ref()
      return { btnRef }
    },
    template: `
      <div class="flex items-center gap-[12px]">
        <TimedButton ref="btnRef" label="Action" :duration="5" />
        <button
          class="px-[12px] py-[8px] text-[14px] font-medium text-[#545454] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px]"
          @click="btnRef?.reset()"
        >
          Reset
        </button>
      </div>
    `,
  }),
}

export const States: Story = {
  render: () => ({
    components: { TimedButton },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex items-center gap-[12px]">
          <TimedButton label="Click to start" :duration="6" />
          <span class="text-[13px] text-[#999]">Ready (click to start)</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <TimedButton label="Running" :duration="10" :autoStart="true" />
          <span class="text-[13px] text-[#999]">Running (auto-started)</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <TimedButton label="Expired" :duration="0" />
          <span class="text-[13px] text-[#999]">Finished (0:00)</span>
        </div>
      </div>
    `,
  }),
}
