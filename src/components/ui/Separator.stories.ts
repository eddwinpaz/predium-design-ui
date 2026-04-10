import type { Meta, StoryObj } from '@storybook/vue3'
import Separator from './Separator.vue'

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-80">
        <p class="text-sm text-content-primary">Content above</p>
        <Separator />
        <p class="text-sm text-content-primary">Content below</p>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex items-center h-10">
        <span class="text-sm text-content-primary">Left</span>
        <Separator orientation="vertical" />
        <span class="text-sm text-content-primary">Right</span>
      </div>
    `,
  }),
}

export const Spacings: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-80 space-y-0">
        <p class="text-xs text-content-tertiary">spacing="none"</p>
        <p class="text-sm text-content-primary">Above</p>
        <Separator spacing="none" />
        <p class="text-sm text-content-primary">Below</p>

        <p class="text-xs text-content-tertiary mt-6">spacing="sm"</p>
        <p class="text-sm text-content-primary">Above</p>
        <Separator spacing="sm" />
        <p class="text-sm text-content-primary">Below</p>

        <p class="text-xs text-content-tertiary mt-6">spacing="md"</p>
        <p class="text-sm text-content-primary">Above</p>
        <Separator spacing="md" />
        <p class="text-sm text-content-primary">Below</p>

        <p class="text-xs text-content-tertiary mt-6">spacing="lg"</p>
        <p class="text-sm text-content-primary">Above</p>
        <Separator spacing="lg" />
        <p class="text-sm text-content-primary">Below</p>
      </div>
    `,
  }),
}
