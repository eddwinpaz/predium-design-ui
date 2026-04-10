import type { Meta, StoryObj } from '@storybook/vue3'
import Slider from './Slider.vue'
import { ref } from 'vue'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div class="w-80">
        <Slider
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
  },
}

export const WithValue: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div class="w-80">
        <Slider
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
  },
}

export const MinMax: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div class="w-80">
        <Slider
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
  args: {
    modelValue: 500,
    min: 0,
    max: 1000,
    step: 50,
    showValue: true,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div class="w-80">
        <Slider
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showValue: true,
  },
}
