import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ScaffoldDetail from "./ScaffoldDetail.vue";
import SidebarNav from "./SidebarNav.vue";
import NavHeader from "./NavHeader.vue";
import PageHeader from "./PageHeader.vue";
import Tabs from "./Tabs.vue";
import DetailSection from "./DetailSection.vue";
import DataGrid from "./DataGrid.vue";
import Badge from "./Badge.vue";
import { ref } from "vue";

const meta: Meta<typeof ScaffoldDetail> = {
  title: "Scaffolds/PropertyDetail",
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

export const PropertyDetail: Story = {
  render: () => ({
    components: {
      ScaffoldDetail,
      SidebarNav,
      NavHeader,
      PageHeader,
      Tabs,
      DetailSection,
      DataGrid,
      Badge,
    },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024);
      const activeTab = ref("overview");
      const tabs = [
        { key: "overview", label: "Overview" },
        { key: "units", label: "Units" },
        { key: "tenants", label: "Tenants" },
        { key: "leases", label: "Leases" },
        { key: "maintenance", label: "Maintenance" },
        { key: "financials", label: "Financials" },
        { key: "documents", label: "Documents" },
      ];
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
            { label: "Properties" },
            { label: "Units" },
            { label: "Amenities" },
          ],
        },
        {
          title: "Operations",
          items: [
            { label: "Maintenance" },
            { label: "Inspections" },
            { label: "Vendors" },
          ],
        },
        {
          title: "Admin",
          items: [{ label: "Settings" }, { label: "Reports" }],
        },
      ];

      const unitsCols = [
        { key: "unit", label: "Unit", width: "70px" },
        { key: "type", label: "Type", width: "90px" },
        { key: "bedrooms", label: "Bedrooms", width: "90px" },
        { key: "bathrooms", label: "Bathrooms", width: "90px" },
        { key: "sqft", label: "Sq Ft", width: "80px" },
        { key: "rent", label: "Rent", width: "90px" },
        { key: "status", label: "Status", width: "100px" },
        { key: "tenant", label: "Tenant" },
      ];
      const unitsRows = [
        {
          unit: "1A",
          type: "Studio",
          bedrooms: "0",
          bathrooms: "1",
          sqft: "450",
          rent: "$1,200",
          status: "Occupied",
          statusVariant: "positive",
          tenant: "John Martinez",
        },
        {
          unit: "1B",
          type: "1BR",
          bedrooms: "1",
          bathrooms: "1",
          sqft: "650",
          rent: "$1,600",
          status: "Occupied",
          statusVariant: "positive",
          tenant: "Sarah Chen",
        },
        {
          unit: "2A",
          type: "2BR",
          bedrooms: "2",
          bathrooms: "1",
          sqft: "900",
          rent: "$2,200",
          status: "Occupied",
          statusVariant: "positive",
          tenant: "Mike Johnson",
        },
        {
          unit: "2B",
          type: "2BR",
          bedrooms: "2",
          bathrooms: "2",
          sqft: "950",
          rent: "$2,400",
          status: "Vacant",
          statusVariant: "neutral",
          tenant: "\u2014",
        },
        {
          unit: "3A",
          type: "3BR",
          bedrooms: "3",
          bathrooms: "2",
          sqft: "1,200",
          rent: "$3,100",
          status: "Occupied",
          statusVariant: "positive",
          tenant: "The Williams Family",
        },
        {
          unit: "3B",
          type: "Penthouse",
          bedrooms: "3",
          bathrooms: "2.5",
          sqft: "1,500",
          rent: "$4,200",
          status: "Notice",
          statusVariant: "warning",
          tenant: "David Park",
        },
      ];

      const summaryStats = [
        { label: "Occupancy", value: "96%" },
        { label: "Total monthly", value: "$45,200" },
        { label: "Avg rent", value: "$1,883" },
        { label: "Vacant units", value: "1" },
        { label: "Upcoming lease renewals", value: "3" },
      ];

      return {
        sidebarCollapsed,
        activeTab,
        tabs,
        navItems,
        modules,
        unitsCols,
        unitsRows,
        summaryStats,
      };
    },
    template: `
      <ScaffoldDetail>
        <!-- Sidebar -->
        <template #sidebar>
          <SidebarNav v-model:collapsed="sidebarCollapsed" :items="navItems" brand="Predium Properties" />
        </template>

        <!-- Top nav -->
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

        <!-- Page header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['Properties', 'Sunset Apartments']"
            title="Sunset Apartments"
            subtitle="123 Oak Street, Austin, TX 78701"
            status="Active"
            statusColor="positive"
            :actions="[
              { label: 'Edit property' },
              { label: 'More actions', kind: 'dropdown', items: ['Duplicate', 'Archive', 'Transfer ownership', 'Delete'] },
            ]"
          />
        </template>

        <!-- Tabs -->
        <template #tabs>
          <Tabs v-model="activeTab" :tabs="tabs" />
        </template>

        <!-- Main content -->
        <template #content>
          <!-- Property Information -->
          <DetailSection
            title="Property Information"
            :editable="true"
            :columns="4"
            :fields="[
              { label: 'Property name', value: 'Sunset Apartments' },
              { label: 'Property type', value: 'Residential' },
              { label: 'Year built', value: '2018' },
              { label: 'Total units', value: '24' },
              { label: 'Parking spaces', value: '36' },
              { label: 'Pet policy', value: 'Allowed with deposit' },
              { label: 'Laundry', value: 'In-unit' },
              { label: 'Property manager', value: 'Maria Santos' },
            ]"
          />

          <!-- Address & Location -->
          <DetailSection
            title="Address & Location"
            :editable="true"
            :columns="3"
            :fields="[
              { label: 'Street', value: '123 Oak Street' },
              { label: 'City', value: 'Austin' },
              { label: 'State', value: 'TX' },
              { label: 'Zip code', value: '78701' },
              { label: 'County', value: 'Travis' },
              { label: 'Country', value: 'United States' },
            ]"
          />

          <!-- Owner Information -->
          <DetailSection
            title="Owner Information"
            :editable="true"
            :columns="3"
            :fields="[
              { label: 'Owner name', value: 'Sunset Realty Group LLC' },
              { label: 'Contact', value: 'Robert Chen' },
              { label: 'Email', value: 'robert@sunsetrealty.com' },
              { label: 'Phone', value: '(512) 555-0142' },
              { label: 'Tax ID', value: 'XX-XXXXXXX' },
              { label: 'Management fee', value: '8%' },
            ]"
          />

          <!-- Units table -->
          <div>
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Units</h3>
            </div>
            <div class="overflow-x-auto -mx-[12px] sm:-mx-[16px] md:-mx-[24px]">
              <table class="w-full border-collapse text-[13px] min-w-[800px]">
                <thead>
                  <tr class="border-b-2 border-border">
                    <th v-for="col in unitsCols" :key="col.key"
                      class="text-left py-[10px] px-[16px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap"
                      :style="col.width ? { width: col.width } : {}"
                    >{{ col.label }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in unitsRows" :key="i" class="border-b border-border hover:bg-surface-hover transition-colors cursor-pointer">
                    <td class="py-[14px] px-[16px] font-medium text-content-primary">{{ row.unit }}</td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.type }}</td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.bedrooms }}</td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.bathrooms }}</td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.sqft }}</td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.rent }}</td>
                    <td class="py-[14px] px-[16px]">
                      <Badge :variant="row.statusVariant">{{ row.status }}</Badge>
                    </td>
                    <td class="py-[14px] px-[16px] text-content-primary">{{ row.tenant }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>

        <!-- Right panel -->
        <template #rightPanel>
          <!-- Map placeholder -->
          <div class="bg-surface-input rounded-[12px] h-[200px] flex items-center justify-center mb-[24px]">
            <div class="flex flex-col items-center gap-[8px]">
              <svg class="w-[32px] h-[32px] text-content-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span class="text-[13px] text-content-tertiary">Map view</span>
            </div>
          </div>

          <!-- Property Summary -->
          <div>
            <h3 class="text-[15px] font-semibold text-content-primary mb-[16px]">Property Summary</h3>
            <div class="flex flex-col gap-[12px]">
              <div v-for="stat in summaryStats" :key="stat.label" class="flex items-center justify-between">
                <span class="text-[13px] text-content-secondary">{{ stat.label }}</span>
                <span class="text-[14px] font-semibold text-content-primary">{{ stat.value }}</span>
              </div>
            </div>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
};
