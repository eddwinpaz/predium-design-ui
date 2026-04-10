import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Radio from './Radio.vue'

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('option1')
      return { args, selected }
    },
    template: '<Radio v-bind="args" v-model="selected" />',
  }),
  args: {
    name: 'default-radio',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}

export const Horizontal: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('small')
      return { args, selected }
    },
    template: '<Radio v-bind="args" v-model="selected" />',
  }),
  args: {
    name: 'horizontal-radio',
    orientation: 'horizontal',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
  },
}

export const WithDescriptions: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('standard')
      return { args, selected }
    },
    template: '<Radio v-bind="args" v-model="selected" />',
  }),
  args: {
    name: 'description-radio',
    options: [
      { label: 'Standard Shipping', value: 'standard', description: 'Delivered in 5-7 business days' },
      { label: 'Express Shipping', value: 'express', description: 'Delivered in 2-3 business days' },
      { label: 'Overnight Shipping', value: 'overnight', description: 'Delivered next business day' },
    ],
  },
}

export const WithDisabled: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('free')
      return { args, selected }
    },
    template: '<Radio v-bind="args" v-model="selected" />',
  }),
  args: {
    name: 'disabled-radio',
    options: [
      { label: 'Free Plan', value: 'free' },
      { label: 'Pro Plan', value: 'pro' },
      { label: 'Enterprise Plan', value: 'enterprise', disabled: true, description: 'Contact sales for pricing' },
    ],
  },
}
