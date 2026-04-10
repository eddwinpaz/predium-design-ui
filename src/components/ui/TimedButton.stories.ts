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
    paused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TimedButton>

export const Default: Story = {
  args: {
    label: 'Countdown',
    duration: 10,
    paused: true,
  },
}

export const DeferredInit: Story = {
  render: () => ({
    components: { TimedButton },
    setup() {
      const paused = ref(true)
      return { paused }
    },
    template: `
      <div class="flex flex-col gap-[16px]">
        <p class="text-[13px] text-[#545454]">Use the pause prop to declaratively start and pause the countdown timer.</p>
        <div class="flex items-center gap-[12px]">
          <button
            class="px-[12px] py-[8px] text-[14px] font-medium bg-[#000] text-white rounded-[8px] hover:bg-[#333]"
            @click="paused = !paused"
          >
            {{ paused ? 'Run' : 'Pause' }}
          </button>
          <TimedButton label="Countdown" :duration="10" :paused="paused" />
        </div>
      </div>
    `,
  }),
}

export const Durations: Story = {
  render: () => ({
    components: { TimedButton },
    template: `
      <div class="flex items-center gap-[12px]">
        <TimedButton label="Countdown" :duration="10" :paused="false" />
        <TimedButton label="Countdown" :duration="18" :paused="false" />
        <TimedButton label="Countdown" :duration="35" :paused="false" />
        <TimedButton label="Countdown" :duration="60" :paused="false" />
      </div>
    `,
  }),
}

export const Paused: Story = {
  args: {
    label: 'Confirm',
    duration: 6,
    paused: true,
  },
}

export const Running: Story = {
  args: {
    label: 'Processing',
    duration: 15,
    paused: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Expired',
    duration: 0,
    disabled: true,
  },
}

export const WithReset: Story = {
  render: () => ({
    components: { TimedButton },
    setup() {
      const btnRef = ref()
      const paused = ref(true)
      function reset() {
        btnRef.value?.reset()
        paused.value = true
      }
      return { btnRef, paused, reset }
    },
    template: `
      <div class="flex items-center gap-[12px]">
        <TimedButton ref="btnRef" label="Action" :duration="5" :paused="paused" />
        <button
          class="px-[12px] py-[8px] text-[14px] font-medium text-[#000] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px]"
          @click="paused = false"
        >
          Start
        </button>
        <button
          class="px-[12px] py-[8px] text-[14px] font-medium text-[#545454] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px]"
          @click="reset"
        >
          Reset
        </button>
      </div>
    `,
  }),
}
