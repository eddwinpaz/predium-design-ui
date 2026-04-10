import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Menu from './Menu.vue'

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    align: { control: 'select', options: ['left', 'right'] },
  },
  decorators: [
    () => ({
      template: '<div style="padding: 16px; min-height: 300px;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof Menu>

export const Default: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args }
    },
    template: `
      <Menu v-bind="args" @select="(item) => console.log('Selected:', item.label)">
        <template #trigger>
          <span class="px-4 py-2 text-sm font-medium bg-btn-primary text-white rounded-lg cursor-pointer inline-block">
            Actions
          </span>
        </template>
      </Menu>
    `,
  }),
  args: {
    items: [
      { label: 'Edit' },
      { label: 'Duplicate' },
      { divider: true },
      { label: 'Archive' },
      { label: 'Delete', danger: true },
    ],
  },
}

export const WithDisabled: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args }
    },
    template: `
      <Menu v-bind="args" @select="(item) => console.log('Selected:', item.label)">
        <template #trigger>
          <span class="px-4 py-2 text-sm font-medium bg-btn-primary text-white rounded-lg cursor-pointer inline-block">
            Actions
          </span>
        </template>
      </Menu>
    `,
  }),
  args: {
    items: [
      { label: 'Edit' },
      { label: 'Duplicate', disabled: true },
      { divider: true },
      { label: 'Archive', disabled: true },
      { label: 'Delete', danger: true },
    ],
  },
}

export const Simple: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args }
    },
    template: `
      <Menu v-bind="args" @select="(item) => console.log('Selected:', item.label)">
        <template #trigger>
          <span class="px-4 py-2 text-sm font-medium bg-btn-primary text-white rounded-lg cursor-pointer inline-block">
            Options
          </span>
        </template>
      </Menu>
    `,
  }),
  args: {
    items: [
      { label: 'Profile' },
      { label: 'Settings' },
      { label: 'Logout' },
    ],
  },
}
