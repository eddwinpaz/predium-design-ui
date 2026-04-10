import type { Meta, StoryObj } from '@storybook/vue3'
import Notification from './Notification.vue'

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: 'select',
      options: ['info', 'positive', 'warning', 'negative'],
    },
    closeable: { control: 'boolean' },
    title: { control: 'text' },
  },
  decorators: [
    () => ({
      template: '<div class="max-w-lg"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof Notification>

export const Info: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">Your shipment has been updated with new tracking information.</Notification>`,
  }),
  args: {
    kind: 'info',
  },
}

export const Positive: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">Load #4829 has been successfully delivered to the destination.</Notification>`,
  }),
  args: {
    kind: 'positive',
  },
}

export const Warning: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">Carrier insurance expires in 5 days. Please request updated documentation.</Notification>`,
  }),
  args: {
    kind: 'warning',
  },
}

export const Negative: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">Payment processing failed. Please verify billing details and try again.</Notification>`,
  }),
  args: {
    kind: 'negative',
  },
}

export const WithTitle: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">All systems are operational. Tracking data is syncing in real-time.</Notification>`,
  }),
  args: {
    kind: 'positive',
    title: 'System Status: Healthy',
  },
}

export const NonCloseable: Story = {
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: `<Notification v-bind="args">Scheduled maintenance window: Saturday 2:00 AM - 4:00 AM EST.</Notification>`,
  }),
  args: {
    kind: 'warning',
    closeable: false,
    title: 'Upcoming Maintenance',
  },
}

export const AllKinds: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div class="space-y-3">
        <Notification kind="info" title="Information">
          Your shipment has been updated with new tracking information.
        </Notification>
        <Notification kind="positive" title="Success">
          Load #4829 has been successfully delivered to the destination.
        </Notification>
        <Notification kind="warning" title="Warning">
          Carrier insurance expires in 5 days. Please request updated documentation.
        </Notification>
        <Notification kind="negative" title="Error">
          Payment processing failed. Please verify billing details and try again.
        </Notification>
      </div>
    `,
  }),
}
