import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tag from './Tag.vue'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}
export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = { args: { selected: false }, render: (args) => ({ components: { Tag }, setup: () => ({ args }), template: '<Tag v-bind="args">Dry Van</Tag>' }) }
export const Selected: Story = { args: { selected: true }, render: (args) => ({ components: { Tag }, setup: () => ({ args }), template: '<Tag v-bind="args">Dry Van</Tag>' }) }
export const Disabled: Story = { args: { disabled: true }, render: (args) => ({ components: { Tag }, setup: () => ({ args }), template: '<Tag v-bind="args">Dry Van</Tag>' }) }
export const Group: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex items-center gap-2">
        <Tag selected>Dry Van</Tag>
        <Tag>Reefer</Tag>
        <Tag>Flatbed</Tag>
      </div>
    `,
  }),
}
