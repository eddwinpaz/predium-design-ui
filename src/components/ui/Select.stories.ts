import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from './Select.vue'

const defaultOptions = [
  { label: 'Full Truckload', value: 'ftl' },
  { label: 'LTL', value: 'ltl' },
  { label: 'Intermodal', value: 'intermodal' },
]

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['compact', 'default', 'large'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null)
      return { args, value }
    },
    template: '<Select v-bind="args" v-model="value" />',
  }),
  args: {
    options: defaultOptions,
  },
}

export const WithValue: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('ftl')
      return { args, value }
    },
    template: '<Select v-bind="args" v-model="value" />',
  }),
  args: {
    options: defaultOptions,
  },
}

export const Placeholder: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null)
      return { args, value }
    },
    template: '<Select v-bind="args" v-model="value" />',
  }),
  args: {
    options: defaultOptions,
    placeholder: 'Choose a shipping mode...',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('ltl')
      return { args, value }
    },
    template: '<Select v-bind="args" v-model="value" />',
  }),
  args: {
    options: defaultOptions,
    disabled: true,
  },
}

export const Error: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null)
      return { args, value }
    },
    template: '<Select v-bind="args" v-model="value" />',
  }),
  args: {
    options: defaultOptions,
    error: true,
    placeholder: 'Required field',
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const compact = ref(null)
      const defaultVal = ref(null)
      const large = ref(null)
      const options = defaultOptions
      return { compact, defaultVal, large, options }
    },
    template: `
      <div class="flex flex-col gap-3">
        <Select v-model="compact" :options="options" size="compact" placeholder="Compact" />
        <Select v-model="defaultVal" :options="options" size="default" placeholder="Default" />
        <Select v-model="large" :options="options" size="large" placeholder="Large" />
      </div>
    `,
  }),
}
