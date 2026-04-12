import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ScaffoldDetail from "./ScaffoldDetail.vue";
import SidebarNav from "./SidebarNav.vue";
import NavHeader from "./NavHeader.vue";
import PageHeader from "./PageHeader.vue";
import SidePanel from "./SidePanel.vue";
import FilterList from "./FilterList.vue";
import SegmentControl from "./SegmentControl.vue";
import Badge from "./Badge.vue";
import Pagination from "./Pagination.vue";
import { ref } from "vue";

const meta: Meta<typeof ScaffoldDetail> = {
  title: "Scaffolds/PropertyList",
  component: ScaffoldDetail,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template:
        '<div style="height: 100vh; margin: -16px; overflow: hidden;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ScaffoldDetail>;

export const AllProperties: Story = {
  render: () => ({
    components: {
      ScaffoldDetail,
      SidebarNav,
      NavHeader,
      PageHeader,
      SidePanel,
      FilterList,
      SegmentControl,
      Badge,
      Pagination,
    },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024);
      const panelCollapsed = ref(false);
      const activeFilter = ref("all");
      const viewMode = ref("table");

      const navItems = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Properties", to: "/properties", active: true },
        { label: "Tenants", to: "/tenants" },
        { label: "Leases", to: "/leases" },
        { label: "Maintenance", to: "/maintenance" },
        { label: "Payments", to: "/payments" },
        { label: "Reports", to: "/reports" },
        { label: "Settings", to: "/settings" },
      ];

      const modules = [
        {
          title: "Properties",
          items: [
            { label: "New Property" },
            { label: "All Properties" },
            { label: "Vacant" },
          ],
        },
        {
          title: "Operations",
          items: [
            { label: "Maintenance" },
            { label: "Payments" },
            { label: "Calendar" },
          ],
        },
        {
          title: "Admin",
          items: [{ label: "Reports" }, { label: "Settings" }],
        },
      ];

      const properties = [
        {
          name: "Sunset Apartments",
          address: "123 Oak Street, Austin, TX",
          units: "24 units",
          occupancy: "96%",
          revenue: "$45,200",
          status: "Active",
          statusVariant: "positive",
        },
        {
          name: "Downtown Lofts",
          address: "456 Main Ave, Dallas, TX",
          units: "12 units",
          occupancy: "100%",
          revenue: "$38,400",
          status: "Active",
          statusVariant: "positive",
        },
        {
          name: "Riverside Complex",
          address: "789 River Rd, Houston, TX",
          units: "36 units",
          occupancy: "89%",
          revenue: "$62,100",
          status: "Active",
          statusVariant: "positive",
        },
        {
          name: "Pine Grove",
          address: "321 Pine St, San Antonio, TX",
          units: "8 units",
          occupancy: "75%",
          revenue: "$12,800",
          status: "Maintenance",
          statusVariant: "warning",
        },
        {
          name: "Metro Plaza",
          address: "555 Commerce Blvd, Austin, TX",
          units: "4 units",
          occupancy: "50%",
          revenue: "$8,900",
          status: "Vacant",
          statusVariant: "neutral",
        },
        {
          name: "Harbor View",
          address: "111 Coast Dr, Corpus Christi, TX",
          units: "16 units",
          occupancy: "94%",
          revenue: "$28,600",
          status: "Active",
          statusVariant: "positive",
        },
        {
          name: "Oak Park Residences",
          address: "222 Oak Park, Dallas, TX",
          units: "20 units",
          occupancy: "90%",
          revenue: "$35,000",
          status: "Active",
          statusVariant: "positive",
        },
        {
          name: "The Willows",
          address: "333 Willow Lane, Houston, TX",
          units: "6 units",
          occupancy: "0%",
          revenue: "$0",
          status: "Vacant",
          statusVariant: "neutral",
        },
      ];

      return {
        sidebarCollapsed,
        panelCollapsed,
        activeFilter,
        viewMode,
        navItems,
        modules,
        properties,
      };
    },
    template: `
      <ScaffoldDetail>
        <!-- Sidebar -->
        <template #sidebar>
          <SidebarNav v-model:collapsed="sidebarCollapsed" :items="navItems" brand="Predium Properties" />
        </template>

        <!-- Nav Header -->
        <template #navHeader>
          <NavHeader
            brand="Predium"
            brandSuffix="Properties"
            subtitle="Sunset Realty Group"
          >
            <template #actions>
              <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #276EF1">MS</button>
            </template>
          </NavHeader>
        </template>

        <!-- Content -->
        <template #content>
          <div style="margin: -12px -12px; min-height: calc(100vh - 200px);">
            <SidePanel v-model:collapsed="panelCollapsed" title="Properties" :width="240">
              <template #sidebar>
                <div class="px-[8px]">
                  <FilterList
                    v-model="activeFilter"
                    :items="[
                      { label: 'All Properties', value: 'all', count: 24 },
                      { label: 'Residential', value: 'residential', count: 16 },
                      { label: 'Commercial', value: 'commercial', count: 5 },
                      { label: 'Vacant', value: 'vacant', count: 3 },
                      { label: 'Maintenance', value: 'maintenance', count: 4 },
                    ]"
                  />
                </div>
              </template>

              <!-- Main content area -->
              <div class="p-[24px]">
                <!-- Header row -->
                <div class="flex flex-wrap items-center justify-between gap-[12px] mb-[20px]">
                  <h2 class="text-[24px] font-bold text-content-primary">All Properties</h2>
                  <div class="flex items-center gap-[8px]">
                    <SegmentControl v-model="viewMode" :options="[{label:'Table',value:'table'},{label:'Grid',value:'grid'}]" size="sm" />
                    <button class="px-[14px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:bg-btn-primary-hover transition-colors">Add property</button>
                  </div>
                </div>

                <!-- Properties table -->
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse text-[13px] min-w-[800px]">
                    <thead>
                      <tr class="border-b-2 border-border">
                        <th v-for="h in ['Property', 'Address', 'Units', 'Occupancy', 'Monthly Revenue', 'Status', 'Actions']" :key="h"
                          class="text-left py-[10px] px-[16px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap"
                        >
                          {{ h }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(prop, i) in properties"
                        :key="i"
                        class="border-b border-border hover:bg-surface-hover transition-colors"
                      >
                        <td class="py-[14px] px-[16px]">
                          <span class="text-accent font-medium cursor-pointer hover:underline">{{ prop.name }}</span>
                        </td>
                        <td class="py-[14px] px-[16px] text-content-secondary">{{ prop.address }}</td>
                        <td class="py-[14px] px-[16px] text-content-primary">{{ prop.units }}</td>
                        <td class="py-[14px] px-[16px] text-content-primary">{{ prop.occupancy }}</td>
                        <td class="py-[14px] px-[16px] text-content-primary font-medium">{{ prop.revenue }}</td>
                        <td class="py-[14px] px-[16px]">
                          <Badge :variant="prop.statusVariant">{{ prop.status }}</Badge>
                        </td>
                        <td class="py-[14px] px-[16px]">
                          <button class="text-[13px] text-content-secondary hover:text-content-primary transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Pagination -->
                <div class="flex items-center justify-between mt-[16px]">
                  <span class="text-[13px] text-content-tertiary">Showing 1-8 of 24</span>
                  <div class="flex gap-[4px]">
                    <button class="px-[10px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px]">Previous</button>
                    <button class="px-[10px] py-[6px] text-[13px] text-btn-primary-text bg-btn-primary rounded-[6px]">1</button>
                    <button class="px-[10px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px]">2</button>
                    <button class="px-[10px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px]">3</button>
                    <button class="px-[10px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px]">Next</button>
                  </div>
                </div>
              </div>
            </SidePanel>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
};
