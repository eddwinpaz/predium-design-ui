import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Textarea from './Textarea.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'both'],
    },
  },
  decorators: [
    () => ({
      template: '<div class="max-w-md"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<Textarea v-bind="args" v-model="value" />`,
  }),
  args: {},
}

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<Textarea v-bind="args" v-model="value" />`,
  }),
  args: {
    placeholder: 'Enter shipment notes, special instructions, or delivery requirements...',
    rows: 4,
  },
}

export const Error: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('Invalid input data')
      return { args, value }
    },
    template: `<Textarea v-bind="args" v-model="value" />`,
  }),
  args: {
    error: true,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('This textarea is disabled and cannot be edited.')
      return { args, value }
    },
    template: `<Textarea v-bind="args" v-model="value" />`,
  }),
  args: {
    disabled: true,
  },
}

export const NoResize: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<Textarea v-bind="args" v-model="value" />`,
  }),
  args: {
    placeholder: 'This textarea cannot be resized.',
    resize: 'none',
    rows: 4,
  },
}
