import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'
import Button from './Button.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  decorators: [
    () => ({
      template: '<div class="flex items-center justify-center p-20"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    placement: 'top',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <span class="text-sm text-content-primary underline decoration-dashed cursor-default">Hover me</span>
      </Tooltip>
    `,
  }),
}

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <span class="text-sm text-content-primary underline decoration-dashed cursor-default">Hover me</span>
      </Tooltip>
    `,
  }),
}

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    placement: 'left',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <span class="text-sm text-content-primary underline decoration-dashed cursor-default">Hover me</span>
      </Tooltip>
    `,
  }),
}

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    placement: 'right',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <span class="text-sm text-content-primary underline decoration-dashed cursor-default">Hover me</span>
      </Tooltip>
    `,
  }),
}

export const WithButton: Story = {
  args: {
    content: 'Click to submit your form',
    placement: 'top',
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <Button>Submit</Button>
      </Tooltip>
    `,
  }),
}
