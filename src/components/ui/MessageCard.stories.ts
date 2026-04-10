import type { Meta, StoryObj } from '@storybook/vue3'
import MessageCard from './MessageCard.vue'

const meta: Meta<typeof MessageCard> = {
  title: 'UI/MessageCard',
  component: MessageCard,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    image: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof MessageCard>

export const Default: Story = {
  args: {
    heading: 'Get started with Predium',
    description: 'Ship smarter with our AI-powered logistics platform',
    buttonLabel: 'Learn more',
    backgroundColor: '#276EF1',
  },
}

export const Dark: Story = {
  args: {
    heading: 'New feature available',
    description: 'Track your shipments in real-time',
    buttonLabel: 'Try now',
    backgroundColor: '#000',
  },
}

export const Green: Story = {
  args: {
    heading: 'Shipment delivered',
    description: 'Your load #SHP-4821 has been delivered successfully',
    backgroundColor: '#048848',
  },
}

export const Warning: Story = {
  args: {
    heading: 'Action required',
    description: '3 shipments need your attention',
    buttonLabel: 'Review',
    backgroundColor: '#FFC043',
    color: '#000',
  },
}

export const WithImage: Story = {
  args: {
    heading: 'Get started with Predium',
    description: 'Ship smarter with our AI-powered logistics platform',
    buttonLabel: 'Learn more',
    backgroundColor: '#276EF1',
  },
  render: (args) => ({
    components: { MessageCard },
    setup: () => ({ args }),
    template: `
      <MessageCard v-bind="args">
        <template #default>
          <div class="w-32 flex items-end justify-end p-4">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="100" rx="8" fill="white" fill-opacity="0.2"/>
              <path d="M60 25L85 75H35L60 25Z" fill="white" fill-opacity="0.4"/>
              <circle cx="60" cy="55" r="20" fill="white" fill-opacity="0.3"/>
            </svg>
          </div>
        </template>
      </MessageCard>
    `,
  }),
}

export const NoButton: Story = {
  args: {
    heading: 'Welcome back',
    description: 'You have 12 active shipments across 5 routes',
  },
}
