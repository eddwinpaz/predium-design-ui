import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SidebarNav from "./SidebarNav.vue";
import { ref } from "vue";

const sampleItems = [
  { label: "Dashboard", to: "/dashboard", active: true },
  { label: "Search", to: "/search" },
  { label: "Orders", to: "/orders" },
  { label: "Shipments", to: "/shipments" },
  {
    label: "Rates & Routing",
    children: [
      { label: "Rates & lanes", to: "/rates-lanes" },
      { label: "Routing guides", to: "/routing-guides", active: false },
      { label: "Bid events", to: "/bid-events" },
    ],
  },
  { label: "Carriers", to: "/carriers" },
  {
    label: "Facilities",
    children: [
      { label: "Locations", to: "/locations" },
      { label: "Dock scheduling", to: "/dock-scheduling" },
    ],
  },
  { label: "Financials", to: "/financials" },
  { label: "Settings", to: "/settings" },
];

const meta: Meta<typeof SidebarNav> = {
  title: "UI/SidebarNav",
  component: SidebarNav,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: '<div style="height: 600px; margin: -16px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(false);
      const lastNav = ref("");
      return { collapsed, lastNav, sampleItems };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav
          v-model:collapsed="collapsed"
          :items="sampleItems"
          brand="Predium TMS"
          @navigate="(to) => lastNav = to"
        />
        <div class="flex-1 bg-surface p-[24px]">
          <p class="text-[14px] text-content-secondary">Last navigated: <strong>{{ lastNav || 'none' }}</strong></p>
        </div>
      </div>
    `,
  }),
};

export const WithActiveChild: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(false);
      const items = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Search", to: "/search" },
        { label: "Orders", to: "/orders" },
        { label: "Shipments", to: "/shipments" },
        {
          label: "Rates & Routing",
          children: [
            { label: "Rates & lanes", to: "/rates-lanes" },
            { label: "Routing guides", to: "/routing-guides", active: true },
            { label: "Bid events", to: "/bid-events" },
          ],
        },
        { label: "Carriers", to: "/carriers" },
        { label: "Financials", to: "/financials" },
        { label: "Settings", to: "/settings" },
      ];
      return { collapsed, items };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav v-model:collapsed="collapsed" :items="items" brand="Predium" />
        <div class="flex-1 bg-surface p-[24px]">
          <h2 class="text-[20px] font-bold">Routing guides</h2>
          <p class="text-[14px] text-content-secondary mt-[4px]">Active child auto-expands the parent group.</p>
        </div>
      </div>
    `,
  }),
};

export const Collapsed: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(true);
      return { collapsed, sampleItems };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav v-model:collapsed="collapsed" :items="sampleItems" brand="Predium" />
        <div class="flex-1 bg-surface p-[24px]">
          <p class="text-[14px] text-content-secondary">Sidebar is collapsed. Click hamburger to expand.</p>
        </div>
      </div>
    `,
  }),
};

export const Standalone: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(false);
      return { collapsed, sampleItems };
    },
    template: `
      <SidebarNav v-model:collapsed="collapsed" :items="sampleItems" brand="Predium TMS" />
    `,
  }),
};

export const Light: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(false);
      const lastNav = ref("");
      return { collapsed, lastNav, sampleItems };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav
          v-model:collapsed="collapsed"
          :items="sampleItems"
          brand="Predium TMS"
          variant="light"
          @navigate="(to) => lastNav = to"
        />
        <div class="flex-1 bg-surface p-[24px]">
          <p class="text-[14px] text-content-secondary">Last navigated: <strong>{{ lastNav || 'none' }}</strong></p>
        </div>
      </div>
    `,
  }),
};

export const LightCollapsed: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(true);
      return { collapsed, sampleItems };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav v-model:collapsed="collapsed" :items="sampleItems" brand="Predium" variant="light" />
        <div class="flex-1 bg-surface p-[24px]">
          <p class="text-[14px] text-content-secondary">Light variant, collapsed.</p>
        </div>
      </div>
    `,
  }),
};

export const LightWithActiveChild: Story = {
  render: () => ({
    components: { SidebarNav },
    setup() {
      const collapsed = ref(false);
      const items = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Search", to: "/search" },
        { label: "Orders", to: "/orders" },
        {
          label: "Rates & Routing",
          children: [
            { label: "Rates & lanes", to: "/rates-lanes" },
            { label: "Routing guides", to: "/routing-guides", active: true },
            { label: "Bid events", to: "/bid-events" },
          ],
        },
        { label: "Carriers", to: "/carriers" },
        { label: "Settings", to: "/settings" },
      ];
      return { collapsed, items };
    },
    template: `
      <div class="flex h-full">
        <SidebarNav v-model:collapsed="collapsed" :items="items" brand="Predium" variant="light" />
        <div class="flex-1 bg-surface p-[24px]">
          <h2 class="text-[20px] font-bold">Routing guides</h2>
          <p class="text-[14px] text-content-secondary mt-[4px]">Light variant with active child.</p>
        </div>
      </div>
    `,
  }),
};
