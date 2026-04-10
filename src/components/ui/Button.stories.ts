import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'minimal'] },
    size: { control: 'select', options: ['mini', 'compact', 'default', 'large'] },
    shape: { control: 'select', options: ['default', 'pill', 'circle'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { kind: 'primary' }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Button</Button>' }) }
export const Secondary: Story = { args: { kind: 'secondary' }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Button</Button>' }) }
export const Tertiary: Story = { args: { kind: 'tertiary' }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Button</Button>' }) }
export const Minimal: Story = { args: { kind: 'minimal' }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Button</Button>' }) }
export const Sizes: Story = { render: () => ({ components: { Button }, template: '<div class="flex items-center gap-3"><Button size="mini">Mini</Button><Button size="compact">Compact</Button><Button>Default</Button><Button size="large">Large</Button></div>' }) }
export const Pill: Story = { args: { shape: 'pill' }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Pill Button</Button>' }) }
export const Loading: Story = { args: { loading: true }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Loading</Button>' }) }
export const Disabled: Story = { args: { disabled: true }, render: (args) => ({ components: { Button }, setup: () => ({ args }), template: '<Button v-bind="args">Disabled</Button>' }) }
export const AllKinds: Story = { render: () => ({ components: { Button }, template: '<div class="flex items-center gap-3"><Button kind="primary">Primary</Button><Button kind="secondary">Secondary</Button><Button kind="tertiary">Tertiary</Button><Button kind="minimal">Minimal</Button></div>' }) }
