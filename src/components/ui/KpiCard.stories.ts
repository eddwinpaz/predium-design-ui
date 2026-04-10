import type { Meta, StoryObj } from '@storybook/vue3'
import KpiCard from './KpiCard.vue'

const meta: Meta<typeof KpiCard> = {
  title: 'UI/KpiCard',
  component: KpiCard,
  tags: ['autodocs'],
  argTypes: {
    accentColor: {
      control: 'select',
      options: ['positive', 'negative', 'warning', 'accent', 'neutral'],
    },
    trendDirection: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
  },
}

export default meta
type Story = StoryObj<typeof KpiCard>

export const Default: Story = {
  args: {
    value: '1,284',
    label: 'Total Shipments',
  },
}

export const WithTrendUp: Story = {
  args: {
    value: '298',
    label: 'Delivered',
    trend: '+12',
    trendDirection: 'up',
  },
}

export const WithTrendDown: Story = {
  args: {
    value: '7',
    label: 'Failed Deliveries',
    trend: '-3',
    trendDirection: 'down',
    accentColor: 'negative',
  },
}

export const Positive: Story = {
  args: {
    value: '99.2%',
    label: 'On-Time Rate',
    accentColor: 'positive',
    trend: '+1.5%',
    trendDirection: 'up',
  },
}

export const Negative: Story = {
  args: {
    value: '2',
    label: 'Past Due',
    accentColor: 'negative',
    trend: '-1',
    trendDirection: 'down',
  },
}

export const Warning: Story = {
  args: {
    value: '14',
    label: 'At Risk',
    accentColor: 'warning',
    trend: '+3',
    trendDirection: 'up',
  },
}

export const WithDot: Story = {
  args: {
    value: '13',
    label: 'Active Shipments',
    accentColor: 'positive',
    dot: true,
    trend: '+3',
    trendDirection: 'up',
  },
}

export const ControlTowerRow: Story = {
  render: () => ({
    components: { KpiCard },
    template: `
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <KpiCard
          value="298"
          label="Delivered"
          trend="+12"
          trend-direction="up"
          accent-color="neutral"
        />
        <KpiCard
          value="168"
          label="Tracking"
          trend="+5"
          trend-direction="up"
          accent-color="neutral"
        />
        <KpiCard
          value="13"
          label="Active"
          trend="+3"
          trend-direction="up"
          accent-color="positive"
          :dot="true"
        />
        <KpiCard
          value="2"
          label="Past Due"
          trend="-1"
          trend-direction="down"
          accent-color="negative"
          :dot="true"
        />
        <KpiCard
          value="0"
          label="Past Due"
          accent-color="neutral"
        />
      </div>
    `,
  }),
}
