import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Tabs from './Tabs.vue'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const active = ref('details')
      const tabs = [
        { key: 'details', label: 'Details' },
        { key: 'shipping', label: 'Shipping' },
        { key: 'carriers', label: 'Carriers' },
      ]
      return { active, tabs }
    },
    template: `
      <Tabs v-model="active" :tabs="tabs">
        <div class="text-sm text-content-secondary">Tab content for {{ active }}</div>
      </Tabs>
    `,
  }),
}

export const WithCounts: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const active = ref('finalizing')
      const tabs = [
        { key: 'finalizing', label: 'Finalizing', count: 180 },
        { key: 'matching', label: 'Matching', count: 84 },
        { key: 'booked', label: 'Booked', count: 230 },
        { key: 'in-transit', label: 'In transit', count: 346 },
      ]
      return { active, tabs }
    },
    template: `
      <Tabs v-model="active" :tabs="tabs">
        <div class="text-sm text-content-secondary">Showing {{ active }} shipments</div>
      </Tabs>
    `,
  }),
}

export const Fill: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const active = ref('overview')
      const tabs = [
        { key: 'overview', label: 'Overview' },
        { key: 'lanes', label: 'Lanes' },
        { key: 'carriers', label: 'Carriers' },
        { key: 'history', label: 'History' },
      ]
      return { active, tabs }
    },
    template: `
      <div class="max-w-2xl">
        <Tabs v-model="active" :tabs="tabs" :fill="true">
          <div class="text-sm text-content-secondary">Tab content for {{ active }}</div>
        </Tabs>
      </div>
    `,
  }),
}
