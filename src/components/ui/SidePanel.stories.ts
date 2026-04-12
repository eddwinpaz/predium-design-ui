import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SidePanel from "./SidePanel.vue";
import FilterList from "./FilterList.vue";
import { ref } from "vue";

const meta: Meta<typeof SidePanel> = {
  title: "UI/SidePanel",
  component: SidePanel,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    width: { control: "number" },
    collapsible: { control: "boolean" },
    bordered: { control: "boolean" },
  },
  decorators: [
    () => ({
      template:
        '<div style="height: 500px; margin: -16px; border: 1px solid #e2e2e2; border-radius: 12px; overflow: hidden;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  render: () => ({
    components: { SidePanel, FilterList },
    setup() {
      const collapsed = ref(false);
      const activeFilter = ref("all");
      const showEnRoute = ref(false);
      const showAuctions = ref(true);
      const showSaved = ref(true);
      return { collapsed, activeFilter, showEnRoute, showAuctions, showSaved };
    },
    template: `
      <SidePanel v-model:collapsed="collapsed" title="Boards">
        <template #sidebar>
          <div class="px-[8px]">
            <FilterList
              v-model="activeFilter"
              :items="[
                { label: 'All shipments', value: 'all' },
                { label: 'Watching', value: 'watching' },
              ]"
            />

            <!-- Shipments en route (collapsible) -->
            <div class="mt-[16px] px-[4px]">
              <button class="flex items-center gap-[4px] text-[12px] font-semibold text-content-tertiary uppercase tracking-[0.5px] mb-[4px] cursor-pointer hover:text-content-secondary" @click="showEnRoute = !showEnRoute">
                <svg :class="['w-[12px] h-[12px] transition-transform duration-200', showEnRoute ? '' : '-rotate-90']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                Shipments en route
              </button>
              <div v-if="showEnRoute" class="flex flex-col">
                <div v-for="item in ['All en route', 'Pickup today', 'Delivery today']" :key="item"
                  class="px-[8px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px] cursor-pointer">
                  {{ item }}
                </div>
              </div>
            </div>

            <!-- Auctions (collapsible) -->
            <div class="mt-[8px] px-[4px]">
              <button class="flex items-center gap-[4px] text-[12px] font-semibold text-content-tertiary uppercase tracking-[0.5px] mb-[4px] cursor-pointer hover:text-content-secondary" @click="showAuctions = !showAuctions">
                <svg :class="['w-[12px] h-[12px] transition-transform duration-200', showAuctions ? '' : '-rotate-90']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                Auctions
              </button>
              <div v-if="showAuctions" class="flex flex-col">
                <div v-for="item in [
                  { label: 'All auctions', count: 1 },
                  { label: 'Auction running', count: 3 },
                  { label: 'Auction ended', count: 5 },
                  { label: 'Awarded', count: 7 },
                  { label: 'Cancelled', count: 9 },
                ]" :key="item.label" class="flex items-center justify-between px-[8px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px] cursor-pointer">
                  <span>{{ item.label }}</span>
                  <span class="text-[12px] text-content-tertiary">{{ item.count }}</span>
                </div>
              </div>
            </div>

            <!-- Saved boards (collapsible) -->
            <div class="mt-[8px] px-[4px]">
              <button class="flex items-center gap-[4px] text-[12px] font-semibold text-content-tertiary uppercase tracking-[0.5px] mb-[4px] cursor-pointer hover:text-content-secondary" @click="showSaved = !showSaved">
                <svg :class="['w-[12px] h-[12px] transition-transform duration-200', showSaved ? '' : '-rotate-90']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                Saved boards
              </button>
              <div v-if="showSaved" class="flex flex-col">
                <div v-for="item in [
                  { label: 'Needs scheduling', count: 3 },
                  { label: 'Tracking on time', count: 3 },
                  { label: 'Rescheduling needed', count: 3 },
                  { label: 'Delivered', count: 3 },
                ]" :key="item.label" class="flex items-center justify-between px-[8px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px] cursor-pointer">
                  <span>{{ item.label }}</span>
                  <span class="text-[12px] text-content-tertiary">{{ item.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Main content -->
        <div class="p-[24px]">
          <h2 class="text-[24px] font-bold text-content-primary mb-[16px]">All shipments</h2>
          <div class="flex items-center gap-[8px] mb-[16px]">
            <span class="px-[12px] py-[4px] bg-btn-primary text-btn-primary-text text-[13px] font-medium rounded-full flex items-center gap-[4px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
              Filters
            </span>
            <span class="px-[12px] py-[4px] bg-surface-input text-[13px] text-content-secondary rounded-full">Creation date: 09/01/24-Today</span>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 10px 12px; font-size: 12px; color: var(--color-content-tertiary); font-weight: 500; border-bottom: 2px solid var(--color-border);">Shipment ID</th>
                <th style="text-align: left; padding: 10px 12px; font-size: 12px; color: var(--color-content-tertiary); font-weight: 500; border-bottom: 2px solid var(--color-border);">Order created</th>
                <th style="text-align: left; padding: 10px 12px; font-size: 12px; color: var(--color-content-tertiary); font-weight: 500; border-bottom: 2px solid var(--color-border);">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in [
                { id: '868443901', date: 'Aug 24, 9:30 CST', status: 'In transit' },
                { id: '868443902', date: 'Aug 26, 18:30 CST', status: 'On Exchange Spot' },
                { id: '868443903', date: 'Aug 26, 2:30 CST', status: 'Carrier assigned' },
                { id: '868478938', date: 'Aug 26, 8:30 CST', status: 'Carrier assigned' },
                { id: '234443938', date: 'Aug 24, 12:30 CST', status: 'Carrier assigned' },
                { id: '987443938', date: 'Aug 15, 15:30 CST', status: 'In transit' },
              ]" :key="row.id" style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: 10px 12px; color: var(--color-accent); cursor: pointer;">{{ row.id }}</td>
                <td style="padding: 10px 12px;">{{ row.date }}</td>
                <td style="padding: 10px 12px;">{{ row.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SidePanel>
    `,
  }),
};

export const Collapsed: Story = {
  render: () => ({
    components: { SidePanel },
    setup() {
      const collapsed = ref(true);
      return { collapsed };
    },
    template: `
      <SidePanel v-model:collapsed="collapsed" title="Filters">
        <template #sidebar>
          <div class="p-[12px]">
            <div class="flex flex-col gap-[4px]">
              <div v-for="item in ['Active', 'Pending', 'Completed', 'Cancelled']" :key="item"
                class="px-[8px] py-[8px] text-[14px] text-content-secondary hover:bg-surface-input rounded-[6px] cursor-pointer">
                {{ item }}
              </div>
            </div>
          </div>
        </template>
        <div class="p-[24px]">
          <p class="text-[14px] text-content-secondary">Click the arrow to expand the sidebar.</p>
        </div>
      </SidePanel>
    `,
  }),
};

export const WithFilterList: Story = {
  render: () => ({
    components: { SidePanel, FilterList },
    setup() {
      const collapsed = ref(false);
      const active = ref("all");
      return { collapsed, active };
    },
    template: `
      <SidePanel v-model:collapsed="collapsed" title="Filter Shipments" :width="240">
        <template #sidebar>
          <div class="px-[8px]">
            <FilterList
              v-model="active"
              :items="[
                { label: 'All Shipments', value: 'all', count: 46 },
                { label: 'Needs Attention', value: 'attention', count: 1 },
                { label: 'In Progress', value: 'progress', count: 6 },
                { label: 'Upcoming', value: 'upcoming', count: 26 },
                { label: 'Past', value: 'past', count: 14 },
              ]"
            />
          </div>
        </template>
        <div class="p-[24px]">
          <h2 class="text-[20px] font-bold text-content-primary mb-[8px]">{{ active === 'all' ? 'All Shipments' : active }}</h2>
          <p class="text-[14px] text-content-secondary">Showing shipments for the selected filter.</p>
        </div>
      </SidePanel>
    `,
  }),
};
