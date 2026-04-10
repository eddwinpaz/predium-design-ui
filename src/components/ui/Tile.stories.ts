import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tile from './Tile.vue'
import { ref } from 'vue'

const meta: Meta<typeof Tile> = {
  title: 'UI/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    align: { control: 'select', options: ['top', 'center'] },
  },
}
export default meta
type Story = StoryObj<typeof Tile>

export const Default: Story = {
  args: { selected: false },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 280px;">
        <Tile v-bind="args">
          <template #icon>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </template>
          Full truckload (FTL)
          <template #description>For shipments that fill an entire trailer</template>
        </Tile>
      </div>
    `,
  }),
}

export const Selected: Story = {
  args: { selected: true },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 280px;">
        <Tile v-bind="args">
          <template #icon>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </template>
          Full truckload (FTL)
          <template #description>For shipments that fill an entire trailer</template>
        </Tile>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: { selected: false, disabled: true },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 280px;">
        <Tile v-bind="args">
          Unavailable option
          <template #description>This option is currently not available</template>
        </Tile>
      </div>
    `,
  }),
}

export const ServiceTypeSelector: Story = {
  render: () => ({
    components: { Tile },
    setup() {
      const selected = ref('ftl')
      return { selected }
    },
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 600px;">
        <Tile :selected="selected === 'ftl'" @click="selected = 'ftl'" align="top">
          <template #icon>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </template>
          Full truckload (FTL)
          <template #description>For full truckloads that are large enough to fill entire trailers</template>
        </Tile>
        <Tile :selected="selected === 'ltl'" @click="selected = 'ltl'" align="top">
          <template #icon>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>
          </template>
          Less-than-truckload (LTL)
          <template #description>Best for shipments under 6 pallets that share trailer space</template>
        </Tile>
      </div>
    `,
  }),
}

export const ThreeOptions: Story = {
  render: () => ({
    components: { Tile },
    setup() {
      const selected = ref('normal')
      return { selected }
    },
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; max-width: 800px;">
        <Tile :selected="selected === 'low'" @click="selected = 'low'" align="top">
          Low
          <template #description>More discounted, but we may move dates 2-3 days</template>
        </Tile>
        <Tile :selected="selected === 'normal'" @click="selected = 'normal'" align="top">
          Normal
          <template #description>Best for most shippers. Book at the flat rate quoted</template>
        </Tile>
        <Tile :selected="selected === 'high'" @click="selected = 'high'" align="top">
          High
          <template #description>Increase coverage of your shipment</template>
        </Tile>
      </div>
    `,
  }),
}
