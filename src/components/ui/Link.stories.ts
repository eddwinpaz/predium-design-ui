import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Link from './Link.vue'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'select', options: ['default', 'underline', 'subtle'] },
    size: { control: 'select', options: ['sm', 'md'] },
    external: { control: 'boolean' },
    href: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: { href: '#', kind: 'default' },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">Default link</Link>',
  }),
}

export const Underline: Story = {
  args: { href: '#', kind: 'underline' },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">Underline link</Link>',
  }),
}

export const Subtle: Story = {
  args: { href: '#', kind: 'subtle' },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">Subtle link</Link>',
  }),
}

export const External: Story = {
  args: { href: 'https://example.com', external: true },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">External link</Link>',
  }),
}

export const Small: Story = {
  args: { href: '#', size: 'sm' },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">Small link</Link>',
  }),
}

export const AsRouterLink: Story = {
  args: { to: '/dashboard', kind: 'default' },
  render: (args) => ({
    components: { Link },
    setup: () => ({ args }),
    template: '<Link v-bind="args">Router link</Link>',
  }),
}
