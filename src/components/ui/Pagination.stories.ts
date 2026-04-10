import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    siblingCount: { control: 'number' },
    size: { control: 'select', options: ['compact', 'default'] },
  },
}
export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(6)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="20" />',
  }),
}

export const FirstPage: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(1)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="20" />',
  }),
}

export const LastPage: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(20)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="20" />',
  }),
}

export const FewPages: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(3)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="5" />',
  }),
}

export const ManyPages: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(50)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="100" />',
  }),
}

export const Compact: Story = {
  args: { size: 'compact' },
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(6)
      return { args, page }
    },
    template: '<Pagination v-bind="args" v-model:currentPage="page" :total-pages="20" />',
  }),
}
