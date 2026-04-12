import type { Meta, StoryObj } from "@storybook/vue3-vite";
import NavHeader from "./NavHeader.vue";

const meta: Meta<typeof NavHeader> = {
  title: "UI/NavHeader",
  component: NavHeader,
  tags: ["autodocs"],
  argTypes: {
    brand: { control: "text" },
    brandSuffix: { control: "text" },
    subtitle: { control: "text" },
  },
  decorators: [
    () => ({
      template:
        '<div style="margin: -16px; min-height: 500px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof NavHeader>;

export const Default: Story = {
  render: () => ({
    components: { NavHeader },
    template: `
      <NavHeader brand="Predium" brandSuffix="Exchange" subtitle="Bev's Beverages">
        <template #actions>
          <nav class="hidden sm:flex items-center gap-[2px] mr-[12px]">
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-primary font-medium whitespace-nowrap">Bid events</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">My organization</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">My carriers</button>
          </nav>
          <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #000">AB</button>
        </template>
        <template #mobile-menu>
          <nav class="flex flex-col py-[8px]">
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Bid events</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">My organization</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">My carriers</button>
          </nav>
        </template>
      </NavHeader>
    `,
  }),
};

export const WithNavAndGrid: Story = {
  render: () => ({
    components: { NavHeader },
    template: `
      <NavHeader brand="Predium" brandSuffix="TMS" subtitle="RapidHaul Logistics">
        <template #actions>
          <nav class="hidden sm:flex items-center gap-[2px] mr-[12px]">
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-primary font-medium whitespace-nowrap">Dashboard</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Shipments</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Orders</button>
          </nav>
          <button class="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-secondary hover:bg-surface-input">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
            </svg>
          </button>
          <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #7356BF">MS</button>
        </template>
      </NavHeader>
    `,
  }),
};

export const Minimal: Story = {
  render: () => ({
    components: { NavHeader },
    template: `
      <NavHeader brand="Predium" brandSuffix="">
        <template #actions>
          <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #048848">EP</button>
        </template>
      </NavHeader>
    `,
  }),
};

export const FullNav: Story = {
  render: () => ({
    components: { NavHeader },
    template: `
      <NavHeader brand="Predium" brandSuffix="TMS" subtitle="RapidHaul Logistics">
        <template #actions>
          <nav class="hidden sm:flex items-center gap-[2px] mr-[12px]">
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Dashboard</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-primary font-medium whitespace-nowrap">Shipments</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Orders</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Carriers</button>
            <button class="px-[12px] py-[6px] text-[14px] rounded-[8px] text-content-secondary hover:text-content-primary hover:bg-surface-input whitespace-nowrap">Billing</button>
          </nav>
          <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #7356BF">MS</button>
        </template>
        <template #mobile-menu>
          <nav class="flex flex-col py-[8px]">
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Dashboard</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Shipments</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Orders</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Carriers</button>
            <button class="w-full text-left px-[16px] py-[12px] text-[15px] text-content-secondary hover:bg-surface-input hover:text-content-primary">Billing</button>
          </nav>
        </template>
      </NavHeader>
    `,
  }),
};

export const NoActions: Story = {
  render: () => ({
    components: { NavHeader },
    template: `
      <NavHeader
        brand="Predium"
        brandSuffix="Exchange"
        subtitle="Contract Management"
      />
    `,
  }),
};
