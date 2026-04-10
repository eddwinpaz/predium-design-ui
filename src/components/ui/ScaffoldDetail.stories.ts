import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ScaffoldDetail from './ScaffoldDetail.vue'
import SidebarNav from './SidebarNav.vue'
import NavHeader from './NavHeader.vue'
import PageHeader from './PageHeader.vue'
import Tabs from './Tabs.vue'
import DetailSection from './DetailSection.vue'
import DataGrid from './DataGrid.vue'
import { ref } from 'vue'

const meta: Meta<typeof ScaffoldDetail> = {
  title: 'Scaffolds/DetailView',
  component: ScaffoldDetail,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="height: 100vh; margin: -16px; overflow: hidden;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof ScaffoldDetail>

export const ShipmentDetail: Story = {
  render: () => ({
    components: { ScaffoldDetail, SidebarNav, NavHeader, PageHeader, Tabs, DetailSection, DataGrid },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024)
      const activeTab = ref('details')
      const tabs = [
        { key: 'details', label: 'Details' },
        { key: 'shipping', label: "What's shipping" },
        { key: 'scheduling', label: 'Scheduling' },
        { key: 'carriers', label: 'Carriers' },
        { key: 'financials', label: 'Financials' },
        { key: 'coverage', label: 'Coverage' },
        { key: 'activity', label: 'Activity' },
        { key: 'documents', label: 'Documents' },
      ]
      const navItems = [
        { label: 'Dashboard', to: '/dashboard' },
        { label: 'Search', to: '/search' },
        { label: 'Orders', to: '/orders' },
        { label: 'Shipments', to: '/shipments', active: true },
        { label: 'Rates & Routing', children: [
          { label: 'Rates & lanes', to: '/rates-lanes' },
          { label: 'Routing guides', to: '/routing-guides' },
          { label: 'Bid events', to: '/bid-events' },
        ]},
        { label: 'Carriers', to: '/carriers' },
        { label: 'Facilities', children: [
          { label: 'Locations', to: '/locations' },
          { label: 'Dock scheduling', to: '/dock-scheduling' },
        ]},
        { label: 'Financials', to: '/financials' },
        { label: 'Settings', to: '/settings' },
      ]
      const modules = [
        { title: 'Operations', items: [
          { label: 'Shipments' }, { label: 'Orders' }, { label: 'Carriers' },
        ]},
        { title: 'Admin', items: [
          { label: 'Settings' }, { label: 'Reports' },
        ]},
      ]

      const schedulingCols = [
        { key: 'stop', label: 'Stop', width: '50px' },
        { key: 'type', label: 'Type', width: '70px' },
        { key: 'status', label: 'Status', width: '90px' },
        { key: 'time', label: 'Time' },
        { key: 'locationId', label: 'Location ID', width: '90px' },
        { key: 'address', label: 'Address' },
        { key: 'contact', label: 'Contact' },
        { key: 'method', label: 'Method', width: '70px' },
        { key: 'scheduledBy', label: 'Scheduled by' },
      ]
      const schedulingRows = [
        { stop: '1', type: 'Pickup', status: 'Booked', time: '09/19/2024 09:00', locationId: '12KAS', address: '107 MARKET RD, NEW ORLEANS', contact: 'Dallas Waters', method: 'Manual', scheduledBy: 'Carrier' },
        { stop: '99', type: 'Dropoff', status: 'Requested', time: '09/21/2024 09:00', locationId: '1923', address: '1480 MAIN AVE UNIT 200, HOUST', contact: 'Michelle Woods', method: 'Manual', scheduledBy: 'UF Operations' },
      ]

      return { sidebarCollapsed, activeTab, tabs, navItems, modules, schedulingCols, schedulingRows }
    },
    template: `
      <ScaffoldDetail>
        <!-- Sidebar -->
        <template #sidebar>
          <SidebarNav v-model:collapsed="sidebarCollapsed" :items="navItems" brand="Predium TMS" />
        </template>

        <!-- Top nav -->
        <template #navHeader>
          <NavHeader
            brand="Predium"
            brandSuffix="TMS"
            subtitle="Bev's Beverages Operations"
            :modules="modules"
            userName="Alejandro Bernal"
            avatarColor="#000"
          />
        </template>

        <!-- Page header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['Shipments', 'New Orleans, LA → Houston, TX']"
            title="New Orleans, LA → Houston, TX"
            subtitle="#88844901 · HJBI"
            status="In transit"
            statusColor="positive"
            :actions="[
              { label: 'Add comment' },
              { label: 'View BOL' },
              { label: 'More actions', kind: 'dropdown', items: ['Duplicate', 'Share', 'Archive', 'Cancel shipment'] },
            ]"
          />
        </template>

        <!-- Tabs -->
        <template #tabs>
          <Tabs v-model="activeTab" :tabs="tabs" />
        </template>

        <!-- Main content -->
        <template #content>
          <!-- Overview -->
          <DetailSection
            title="Overview"
            :editable="true"
            :columns="6"
            :fields="[
              { label: 'Origin', value: 'New Orleans, LA 30161 USA' },
              { label: 'Destination', value: 'Houston, TX 78740 USA' },
              { label: 'Route forecast', value: 'Normal conditions' },
              { label: 'Risk', value: 'Mid-risk' },
              { label: 'Status', value: 'In-Transit' },
              { label: 'Service level', value: 'Standard' },
              { label: 'Transit days', value: '2' },
              { label: 'Health', value: 'Healthy' },
              { label: 'Health reason', value: '-' },
              { label: 'Seller', value: '-' },
              { label: 'Freight forwarder status', value: 'N/A' },
              { label: 'Robot flag', value: 'Noe' },
              { label: 'Customer routed', value: 'No' },
            ]"
          />

          <!-- Reference # -->
          <DetailSection
            title="Reference #"
            :editable="true"
            :columns="6"
            :fields="[
              { label: 'UF shipment #', value: '875357061' },
              { label: 'SAP Shipment #', value: '0803552940' },
              { label: 'BOL number', value: '875357061' },
              { label: 'Trailer/Container ID', value: '276133' },
              { label: 'Customer reference #', value: '29F7212' },
              { label: 'Pro number', value: '#4901293' },
              { label: 'Monitor ID', value: 'AP29031NA' },
            ]"
          />

          <!-- Carriers -->
          <DetailSection title="Carriers" :editable="false">
            <!-- Mobile: stacked fields -->
            <div class="sm:hidden grid grid-cols-2 gap-x-[12px] gap-y-[8px]">
              <div v-for="f in [
                { label: 'Mode', value: 'TL' },
                { label: 'SCAC', value: 'GOHH' },
                { label: 'Carrier name', value: 'Golden Horizon Haulers' },
                { label: 'Equipment Type', value: 'Dry Van' },
                { label: 'Rate', value: '$900' },
              ]" :key="f.label">
                <div class="text-[10px] font-medium text-[#999] uppercase tracking-[0.5px]">{{ f.label }}</div>
                <div class="text-[13px] text-[#000] mt-[1px]">{{ f.value }}</div>
              </div>
            </div>
            <!-- Desktop: table -->
            <div class="hidden sm:block overflow-x-auto">
              <table class="w-full text-[13px]">
                <thead>
                  <tr class="border-b border-[#e2e2e2]">
                    <th v-for="h in ['Mode', 'SCAC', 'Carrier name', 'Equipment Type', 'Rate']" :key="h" class="text-left py-[8px] pr-[16px] text-[11px] font-medium text-[#999] uppercase tracking-[0.5px] whitespace-nowrap">{{ h }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-[10px] pr-[16px]">TL</td>
                    <td class="py-[10px] pr-[16px]">GOHH</td>
                    <td class="py-[10px] pr-[16px] whitespace-nowrap">Golden Horizon Haulers</td>
                    <td class="py-[10px] pr-[16px]">Dry Van</td>
                    <td class="py-[10px] whitespace-nowrap">$900 <a href="#" class="text-[#276EF1] hover:underline">See analysis</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DetailSection>

          <!-- Scheduling -->
          <DataGrid
            title="Scheduling"
            :columns="schedulingCols"
            :rows="schedulingRows"
          />

          <!-- Financials -->
          <DetailSection
            title="Financials"
            :editable="true"
            :columns="6"
            :fields="[
              { label: 'Total AP', value: '$1,227.31' },
              { label: 'Target AP', value: '$1,227.31' },
              { label: 'Total AP approved', value: '$1,227.31' },
              { label: 'Total AR', value: '$1,423.91' },
              { label: 'Total AR approved', value: '$1,423.91' },
              { label: 'Total AR Paid', value: '$1,423.91' },
              { label: 'Net margin', value: '$231.60' },
              { label: 'Invoice only', value: 'No' },
              { label: 'Override taxes', value: 'No' },
              { label: 'Auto invoice', value: 'Yes' },
            ]"
          />
        </template>

        <!-- Right panel: map + route -->
        <template #rightPanel>
          <!-- Map placeholder -->
          <div class="bg-[#f0f0f0] rounded-[12px] h-[180px] sm:h-[200px] lg:h-[240px] flex items-center justify-center mb-[16px] sm:mb-[24px] overflow-hidden relative">
            <svg class="w-full h-full" viewBox="0 0 400 240" fill="none">
              <rect width="400" height="240" fill="#e8e8e8" />
              <circle cx="320" cy="80" r="6" fill="#276EF1" />
              <circle cx="120" cy="180" r="6" fill="#000" />
              <path d="M120 180 Q 220 60 320 80" stroke="#000" stroke-width="2" stroke-dasharray="6 4" fill="none" />
              <text x="300" y="70" font-size="11" fill="#000" font-weight="600">Origin</text>
              <text x="260" y="100" font-size="10" fill="#545454">New Orleans, LA</text>
              <text x="60" y="210" font-size="11" fill="#000" font-weight="600">Destination</text>
              <text x="60" y="225" font-size="10" fill="#545454">Houston, TX</text>
            </svg>
          </div>

          <!-- Route timeline -->
          <div class="flex items-center justify-between mb-[12px]">
            <h3 class="text-[15px] font-semibold text-[#000]">Route</h3>
            <button class="px-[12px] py-[6px] text-[13px] font-medium text-[#000] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px] transition-colors">Edit</button>
          </div>

          <!-- Stop 1 -->
          <div class="flex gap-[12px]">
            <div class="flex flex-col items-center">
              <div class="w-[24px] h-[24px] rounded-full bg-[#276EF1] flex items-center justify-center text-white text-[11px] font-bold">1</div>
              <div class="w-[2px] flex-1 bg-[#e2e2e2] my-[4px]" />
            </div>
            <div class="pb-[20px]">
              <p class="text-[14px] font-semibold text-[#000]">New Orleans, LA</p>
              <p class="text-[12px] text-[#545454]">BVB Warehouse</p>
              <p class="text-[11px] text-[#999] mt-[4px] flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                09/19/2024 00:01 - 09/16/2024 23:59
              </p>
              <p class="text-[11px] text-[#999] mt-[2px] flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V3H8v4"/></svg>
                Pick up 2 orders
              </p>
            </div>
          </div>

          <!-- On the way -->
          <div class="flex gap-[12px]">
            <div class="flex flex-col items-center">
              <div class="w-[10px] h-[10px] rounded-full bg-[#999]" />
              <div class="w-[2px] flex-1 bg-[#e2e2e2] my-[4px]" />
            </div>
            <div class="pb-[20px]">
              <p class="text-[12px] text-[#999] italic">On the way</p>
            </div>
          </div>

          <!-- Stop 2 -->
          <div class="flex gap-[12px]">
            <div class="flex flex-col items-center">
              <div class="w-[24px] h-[24px] rounded-full bg-[#000] flex items-center justify-center text-white text-[11px] font-bold">2</div>
            </div>
            <div>
              <p class="text-[14px] font-semibold text-[#000]">Houston, TX</p>
              <p class="text-[12px] text-[#545454]">Horizon Distribution Center</p>
              <p class="text-[11px] text-[#999] mt-[4px] flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                09/21/2024 00:01 - 09/21/2024 23:59
              </p>
              <p class="text-[11px] text-[#999] mt-[2px] flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V3H8v4"/></svg>
                Deliver 2 orders
              </p>
            </div>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
}
