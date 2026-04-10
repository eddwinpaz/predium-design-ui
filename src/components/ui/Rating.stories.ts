import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Rating from './Rating.vue'

const meta: Meta<typeof Rating> = {
  title: 'UI/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'number', min: 0, max: 5 } },
    max: { control: { type: 'number', min: 1, max: 10 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    readOnly: { control: 'boolean' },
    color: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    modelValue: 3,
    max: 5,
    size: 'md',
    readOnly: false,
    color: '#FFC043',
  },
}

export const Full: Story = {
  args: {
    modelValue: 5,
    max: 5,
  },
}

export const Empty: Story = {
  args: {
    modelValue: 0,
    max: 5,
  },
}

export const ReadOnly: Story = {
  args: {
    modelValue: 4,
    readOnly: true,
  },
}

export const Large: Story = {
  args: {
    modelValue: 3,
    size: 'lg',
  },
}

export const Interactive: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const rating = ref(2)
      return { rating, args }
    },
    template: `
      <div class="flex flex-col gap-2">
        <Rating v-model="rating" v-bind="args" />
        <span class="text-sm text-content-secondary">Selected: {{ rating }} / 5</span>
      </div>
    `,
  }),
}
