import type { Meta, StoryObj } from '@storybook/vue3-vite'
import WeekPicker from './WeekPicker.vue'
import { ref } from 'vue'

const meta: Meta<typeof WeekPicker> = {
  title: 'UI/WeekPicker',
  component: WeekPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WeekPicker>

export const Default: Story = {
  render: () => ({
    components: { WeekPicker },
    setup() {
      const selected = ref(26)
      return { selected }
    },
    template: `
      <div style="max-width: 700px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">Select Predium shipment dates</h3>
        <p style="font-size: 13px; color: #999; margin-bottom: 16px;">Quotes will refresh at 4:00 PM</p>
        <WeekPicker
          v-model="selected"
          :days="[
            { date: 25 },
            { date: 26, price: '$6,792' },
            { date: 27, price: '$6,175' },
            { date: 28, price: '$5,980' },
            { date: 29, price: '$6,100' },
            { date: 30, label: 'Delivery' },
            { date: 1, month: 'Sep' },
          ]"
        />
      </div>
    `,
  }),
}

export const WithDelivery: Story = {
  render: () => ({
    components: { WeekPicker },
    setup() {
      const selected = ref(28)
      return { selected }
    },
    template: `
      <div style="max-width: 700px;">
        <WeekPicker
          v-model="selected"
          :days="[
            { date: 25, price: '$4,200' },
            { date: 26, price: '$3,850' },
            { date: 27, price: '$4,100' },
            { date: 28, price: '$3,650' },
            { date: 29, label: 'Delivery' },
            { date: 30, disabled: true },
            { date: 1, month: 'Oct', disabled: true },
          ]"
        />
      </div>
    `,
  }),
}

export const NoPrices: Story = {
  render: () => ({
    components: { WeekPicker },
    setup() {
      const selected = ref(15)
      return { selected }
    },
    template: `
      <div style="max-width: 700px;">
        <WeekPicker
          v-model="selected"
          :days="[
            { date: 14 },
            { date: 15 },
            { date: 16 },
            { date: 17 },
            { date: 18 },
            { date: 19 },
            { date: 20 },
          ]"
        />
      </div>
    `,
  }),
}

export const AllPriced: Story = {
  render: () => ({
    components: { WeekPicker },
    setup() {
      const selected = ref(3)
      return { selected }
    },
    template: `
      <div style="max-width: 700px;">
        <WeekPicker
          v-model="selected"
          :headers="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']"
          :days="[
            { date: 3, price: '$2,450' },
            { date: 4, price: '$2,300' },
            { date: 5, price: '$2,680' },
            { date: 6, price: '$2,150' },
            { date: 7, price: '$2,900' },
          ]"
        />
      </div>
    `,
  }),
}
