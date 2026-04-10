import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Spinner from './Spinner.vue'
import Button from './Button.vue'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'accent', 'inverse'] },
  },
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Spinner },
    setup: () => ({ args }),
    template: '<Spinner v-bind="args" />',
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: '<div class="flex items-center gap-4"><Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></div>',
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Spinner },
    template: '<div class="flex items-center gap-4"><Spinner color="primary" /><Spinner color="accent" /><div class="bg-black p-3 rounded-lg"><Spinner color="inverse" /></div></div>',
  }),
}

export const InButton: Story = {
  render: () => ({
    components: { Spinner, Button },
    template: '<Button :loading="true">Saving...</Button>',
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Spinner },
    template: '<div class="flex items-center gap-2"><Spinner size="sm" /><span class="text-sm text-content-secondary">Loading...</span></div>',
  }),
}
