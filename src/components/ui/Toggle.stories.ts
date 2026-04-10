import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Toggle from './Toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Off: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(false)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {},
}

export const On: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(true)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {},
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(false)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Enable notifications',
  },
}

export const WithDescription: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(true)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Dark Mode',
    description: 'Switch between light and dark themes across the application.',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(false)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Feature locked',
    disabled: true,
  },
}

export const Small: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      const value = ref(true)
      return { args, value }
    },
    template: '<Toggle v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Compact toggle',
    size: 'sm',
  },
}
