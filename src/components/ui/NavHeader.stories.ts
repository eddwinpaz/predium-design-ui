import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavHeader from './NavHeader.vue'

const meta: Meta<typeof NavHeader> = {
  title: 'UI/NavHeader',
  component: NavHeader,
  tags: ['autodocs'],
  argTypes: {
    brand: { control: 'text' },
    brandSuffix: { control: 'text' },
    subtitle: { control: 'text' },
    userName: { control: 'text' },
    userInitials: { control: 'text' },
    avatarColor: { control: 'color' },
  },
  decorators: [
    () => ({
      template: '<div style="margin: -16px;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof NavHeader>

export const Default: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'Exchange',
    subtitle: "Bev's Beverages",
    navItems: [
      { label: 'Bid events', active: true },
      { label: 'My organization' },
      { label: 'My carriers' },
    ],
    userName: 'Alejandro Bernal',
    avatarColor: '#276EF1',
  },
}

export const Minimal: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: '',
    navItems: [
      { label: 'Dashboard', active: true },
      { label: 'Settings' },
    ],
    userInitials: 'EP',
    avatarColor: '#048848',
  },
}

export const FullNav: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'TMS',
    subtitle: 'RapidHaul Logistics',
    navItems: [
      { label: 'Dashboard' },
      { label: 'Shipments', active: true },
      { label: 'Orders' },
      { label: 'Carriers' },
      { label: 'Billing' },
    ],
    userName: 'Maria Santos',
    avatarColor: '#7356BF',
  },
}

export const NoNav: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'Exchange',
    subtitle: 'Contract Management',
    userName: 'John Doe',
    avatarColor: '#E11900',
  },
}

export const CustomColors: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'Freight',
    navItems: [
      { label: 'Loads', active: true },
      { label: 'Routes' },
      { label: 'Analytics' },
    ],
    userName: 'Casey Kim',
    avatarColor: '#FFC043',
  },
}
