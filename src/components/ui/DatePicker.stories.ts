import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import DatePicker from './DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['compact', 'default', 'large'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref('')
      return { args, date }
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
}

export const WithValue: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref('2026-04-09')
      return { args, date }
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref('2026-04-09')
      return { args, date }
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
}

export const Compact: Story = {
  args: { size: 'compact' },
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref('')
      return { args, date }
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
}
