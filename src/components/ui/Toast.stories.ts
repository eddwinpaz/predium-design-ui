import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Toast from './Toast.vue'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'select', options: ['info', 'positive', 'warning', 'negative'] },
    duration: { control: 'number' },
    visible: { control: 'boolean' },
    action: { control: 'text' },
    message: { control: 'text' },
  },
  decorators: [
    () => ({
      template: '<div class="flex items-end justify-center min-h-[120px]"><story /></div>',
    }),
  ],
}
export default meta
type Story = StoryObj<typeof Toast>

export const Info: Story = {
  args: { message: 'Changes have been saved.', kind: 'info', visible: true, duration: 0 },
}

export const Positive: Story = {
  args: { message: 'File uploaded successfully.', kind: 'positive', visible: true, duration: 0 },
}

export const Warning: Story = {
  args: { message: 'Your session will expire in 5 minutes.', kind: 'warning', visible: true, duration: 0 },
}

export const Negative: Story = {
  args: { message: 'Failed to save changes. Please try again.', kind: 'negative', visible: true, duration: 0 },
}

export const WithAction: Story = {
  args: { message: 'Item deleted.', kind: 'info', action: 'Undo', visible: true, duration: 0 },
}

export const Persistent: Story = {
  args: { message: 'This toast will not auto-dismiss.', kind: 'info', visible: true, duration: 0 },
}
