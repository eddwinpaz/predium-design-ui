import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FilterList from './FilterList.vue'

const meta: Meta<typeof FilterList> = {
  title: 'UI/FilterList',
  component: FilterList,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    modelValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof FilterList>

export const Default: Story = {
  render: (args) => ({
    components: { FilterList },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: '<FilterList v-bind="args" v-model="selected" />',
  }),
  args: {
    title: 'Filter Shipments',
    modelValue: 'all',
    items: [
      { label: 'All Shipments', value: 'all', count: 46 },
      { label: 'Needs Attention', value: 'attention', count: 1 },
      { label: 'In Progress', value: 'progress', count: 6 },
      { label: 'Upcoming', value: 'upcoming', count: 26 },
      { label: 'Past', value: 'past', count: 14 },
    ],
  },
}

export const NoCounts: Story = {
  render: (args) => ({
    components: { FilterList },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: '<FilterList v-bind="args" v-model="selected" />',
  }),
  args: {
    title: 'Filter Shipments',
    modelValue: 'all',
    items: [
      { label: 'All Shipments', value: 'all' },
      { label: 'Needs Attention', value: 'attention' },
      { label: 'In Progress', value: 'progress' },
      { label: 'Upcoming', value: 'upcoming' },
      { label: 'Past', value: 'past' },
    ],
  },
}

export const OrderFilters: Story = {
  render: (args) => ({
    components: { FilterList },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: '<FilterList v-bind="args" v-model="selected" />',
  }),
  args: {
    title: 'Orders',
    modelValue: 'active',
    items: [
      { label: 'Active orders', value: 'active', count: 30 },
      { label: 'Missing details', value: 'missing', count: 5 },
      { label: 'Errors', value: 'errors', count: 2 },
      { label: 'Sent to shipment', value: 'sent', count: 100 },
      { label: 'All orders', value: 'all', count: 5000 },
    ],
  },
}
