import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumbs from './Breadcrumbs.vue'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Orders', to: '/orders' },
      { label: 'Order Detail' },
    ],
  },
}

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Settings' },
    ],
  },
}

export const WithChevronSeparator: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Electronics' },
    ],
    separator: '>',
  },
}

export const Long: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Category', to: '/category' },
      { label: 'Subcategory', to: '/category/sub' },
      { label: 'Products', to: '/category/sub/products' },
      { label: 'Product Detail' },
    ],
  },
}
