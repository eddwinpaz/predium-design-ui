import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavHeader from './NavHeader.vue'

const defaultModules = [
  {
    title: 'Properties',
    items: [
      { label: 'New Property' },
      { label: 'List Properties' },
      { label: 'Payments' },
      { label: 'Sinisters' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Maintenance' },
      { label: 'Ticket Support' },
      { label: 'Calendar' },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Reports' },
      { label: 'Settings' },
    ],
  },
]

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
      template: '<div style="margin: -16px; min-height: 500px;"><story /></div>',
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
    modules: defaultModules,
    userName: 'Alejandro Bernal',
    avatarColor: '#000',
  },
}

export const WithModules: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'TMS',
    subtitle: 'RapidHaul Logistics',
    navItems: [
      { label: 'Dashboard', active: true },
      { label: 'Shipments' },
      { label: 'Orders' },
    ],
    modules: [
      {
        title: 'Properties',
        items: [
          { label: 'New Property', color: '#276EF1' },
          { label: 'List Properties', color: '#048848' },
          { label: 'Payments', color: '#7356BF' },
          { label: 'Sinisters', color: '#E11900' },
        ],
      },
      {
        title: 'Operations',
        items: [
          { label: 'Maintenance', color: '#FFC043' },
          { label: 'Ticket Support', color: '#0D9488' },
          { label: 'Calendar', color: '#4F46E5' },
        ],
      },
      {
        title: 'Admin',
        items: [
          { label: 'Reports', color: '#F97066' },
          { label: 'Settings', color: '#545454' },
        ],
      },
    ],
    userName: 'Maria Santos',
    avatarColor: '#7356BF',
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
    modules: defaultModules,
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
    modules: defaultModules,
    userName: 'Maria Santos',
    avatarColor: '#7356BF',
  },
}

export const NoModules: Story = {
  args: {
    brand: 'Predium',
    brandSuffix: 'Exchange',
    subtitle: 'Contract Management',
    navItems: [
      { label: 'Contracts', active: true },
      { label: 'Carriers' },
    ],
    userName: 'John Doe',
    avatarColor: '#E11900',
  },
}
