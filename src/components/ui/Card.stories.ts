import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-content-primary">This is a basic card with default padding and border.</p>
      </Card>
    `,
  }),
}

export const WithHeader: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-semibold text-content-primary">Card Title</h3>
        </template>
        <p class="text-content-secondary">Card body content goes here with supporting text.</p>
      </Card>
    `,
  }),
}

export const WithFooter: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p class="text-content-secondary">Card content with a footer below.</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <button class="text-sm text-content-secondary hover:text-content-primary">Cancel</button>
            <button class="text-sm font-medium text-accent hover:underline">Confirm</button>
          </div>
        </template>
      </Card>
    `,
  }),
}

export const Hoverable: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" :hoverable="true">
        <p class="text-content-primary">Hover over this card to see the shadow effect.</p>
      </Card>
    `,
  }),
}

export const NoPadding: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" padding="none">
        <img src="https://placehold.co/600x200/f6f6f6/545454?text=No+Padding+Card" class="w-full" alt="Placeholder" />
      </Card>
    `,
  }),
}

export const Shadow: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" :shadow="true" :bordered="false">
        <p class="text-content-primary">This card uses shadow instead of border.</p>
      </Card>
    `,
  }),
}

export const Complete: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-content-primary">Shipment Details</h3>
            <span class="text-xs text-content-tertiary">SHP-001</span>
          </div>
        </template>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-sm text-content-secondary">Origin</span>
            <span class="text-sm text-content-primary font-medium">Los Angeles, CA</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-content-secondary">Destination</span>
            <span class="text-sm text-content-primary font-medium">Chicago, IL</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-content-secondary">Carrier</span>
            <span class="text-sm text-content-primary font-medium">GlobalFlow</span>
          </div>
        </div>
        <template #footer>
          <div class="flex justify-between items-center">
            <span class="text-xs text-content-tertiary">Updated 2 hours ago</span>
            <button class="text-sm font-medium text-accent hover:underline">View Details</button>
          </div>
        </template>
      </Card>
    `,
  }),
}
