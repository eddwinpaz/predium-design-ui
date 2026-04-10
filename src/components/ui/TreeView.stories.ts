import type { Meta, StoryObj } from '@storybook/vue3'
import TreeView from './TreeView.vue'
import type { TreeNode } from './TreeView.vue'

const fileSystemItems: TreeNode[] = [
  {
    id: '1',
    label: 'src',
    children: [
      {
        id: '2',
        label: 'components',
        children: [
          {
            id: '3',
            label: 'ui',
            children: [
              { id: '4', label: 'UButton.vue' },
              { id: '5', label: 'UInput.vue' },
            ],
          },
        ],
      },
      {
        id: '6',
        label: 'pages',
        children: [
          { id: '7', label: 'Dashboard.vue' },
          { id: '8', label: 'Orders.vue' },
        ],
      },
    ],
  },
  { id: '9', label: 'package.json' },
  { id: '10', label: 'vite.config.ts' },
]

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  argTypes: {
    defaultExpanded: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TreeView>

export const Default: Story = {
  args: {
    items: fileSystemItems,
    defaultExpanded: false,
  },
}

export const DefaultExpanded: Story = {
  args: {
    items: fileSystemItems,
    defaultExpanded: true,
  },
}

export const SingleLevel: Story = {
  args: {
    items: [
      { id: 'a', label: 'README.md' },
      { id: 'b', label: 'package.json' },
      { id: 'c', label: 'tsconfig.json' },
      { id: 'd', label: 'vite.config.ts' },
    ],
    defaultExpanded: false,
  },
}
