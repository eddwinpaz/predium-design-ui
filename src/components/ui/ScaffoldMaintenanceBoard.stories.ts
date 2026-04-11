import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ScaffoldDetail from './ScaffoldDetail.vue'
import SidebarNav from './SidebarNav.vue'
import NavHeader from './NavHeader.vue'
import SidePanel from './SidePanel.vue'
import FilterList from './FilterList.vue'
import KpiCard from './KpiCard.vue'
import SegmentControl from './SegmentControl.vue'
import Avatar from './Avatar.vue'
import Badge from './Badge.vue'
import { ref } from 'vue'

const meta: Meta<typeof ScaffoldDetail> = {
  title: 'Scaffolds/MaintenanceBoard',
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

export const TicketBoard: Story = {
  render: () => ({
    components: { ScaffoldDetail, SidebarNav, NavHeader, SidePanel, FilterList, KpiCard, SegmentControl, Avatar, Badge },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024)
      const panelCollapsed = ref(false)
      const viewMode = ref('board')
      const activeFilter = ref('all')
      const showCategories = ref(true)

      const navItems = [
        { label: 'Dashboard', to: '/dashboard' },
        { label: 'Properties', to: '/properties' },
        { label: 'Tenants', to: '/tenants' },
        { label: 'Leases', to: '/leases' },
        { label: 'Maintenance', to: '/maintenance', active: true },
        { label: 'Payments', to: '/payments' },
        { label: 'Reports', to: '/reports' },
        { label: 'Settings', to: '/settings' },
      ]

      const modules = [
        { title: 'Properties', items: [
          { label: 'New Property' },
          { label: 'All Properties' },
          { label: 'Vacant' },
        ]},
        { title: 'Operations', items: [
          { label: 'Maintenance' },
          { label: 'Payments' },
          { label: 'Calendar' },
        ]},
        { title: 'Admin', items: [
          { label: 'Reports' },
          { label: 'Settings' },
        ]},
      ]

      const filterItems = [
        { label: 'All Tickets', value: 'all', count: 47 },
        { label: 'Open', value: 'open', count: 12 },
        { label: 'In Progress', value: 'in-progress', count: 8 },
        { label: 'Urgent', value: 'urgent', count: 3 },
        { label: 'Scheduled', value: 'scheduled', count: 6 },
        { label: 'Resolved', value: 'resolved', count: 18 },
      ]

      const categories = [
        { label: 'Plumbing', count: 8 },
        { label: 'Electrical', count: 5 },
        { label: 'HVAC', count: 7 },
        { label: 'Appliances', count: 4 },
        { label: 'General', count: 6 },
        { label: 'Pest Control', count: 2 },
      ]

      const tickets = [
        { id: 'TK-001', property: 'Sunset Apartments', unit: '3A', issue: 'Leaking faucet in kitchen', priority: 'High', priorityColor: 'negative', status: 'Open', statusColor: 'warning', assignee: 'Mike R.', assigneeColor: '#276EF1', created: '2 hours ago' },
        { id: 'TK-002', property: 'Downtown Lofts', unit: '2B', issue: 'AC not cooling properly', priority: 'Urgent', priorityColor: 'negative', status: 'In Progress', statusColor: 'accent', assignee: 'Sarah L.', assigneeColor: '#05944F', created: '5 hours ago' },
        { id: 'TK-003', property: 'Sunset Apartments', unit: '1B', issue: 'Broken window lock', priority: 'Medium', priorityColor: 'warning', status: 'Open', statusColor: 'warning', assignee: '', assigneeColor: '', created: '1 day ago' },
        { id: 'TK-004', property: 'Riverside Complex', unit: '5A', issue: 'Pest issue - cockroaches', priority: 'High', priorityColor: 'negative', status: 'Scheduled', statusColor: 'neutral', assignee: 'Tom K.', assigneeColor: '#E54B4B', created: '1 day ago' },
        { id: 'TK-005', property: 'Pine Grove', unit: '2A', issue: 'Dishwasher not draining', priority: 'Low', priorityColor: 'neutral', status: 'Open', statusColor: 'warning', assignee: '', assigneeColor: '', created: '2 days ago' },
        { id: 'TK-006', property: 'Sunset Apartments', unit: '2A', issue: 'Light fixture flickering', priority: 'Low', priorityColor: 'neutral', status: 'In Progress', statusColor: 'accent', assignee: 'Mike R.', assigneeColor: '#276EF1', created: '2 days ago' },
        { id: 'TK-007', property: 'Harbor View', unit: '4C', issue: 'Water heater making noise', priority: 'Medium', priorityColor: 'warning', status: 'Scheduled', statusColor: 'neutral', assignee: 'Sarah L.', assigneeColor: '#05944F', created: '3 days ago' },
        { id: 'TK-008', property: 'Downtown Lofts', unit: '1A', issue: 'Front door lock jammed', priority: 'High', priorityColor: 'negative', status: 'Resolved', statusColor: 'positive', assignee: 'Tom K.', assigneeColor: '#E54B4B', created: '3 days ago' },
        { id: 'TK-009', property: 'Riverside Complex', unit: '3B', issue: 'Ceiling fan wobbling', priority: 'Low', priorityColor: 'neutral', status: 'Resolved', statusColor: 'positive', assignee: 'Mike R.', assigneeColor: '#276EF1', created: '4 days ago' },
        { id: 'TK-010', property: 'Sunset Apartments', unit: 'PH', issue: 'Elevator maintenance', priority: 'Medium', priorityColor: 'warning', status: 'In Progress', statusColor: 'accent', assignee: 'External', assigneeColor: '#7356BF', created: '5 days ago' },
      ]

      return { sidebarCollapsed, panelCollapsed, viewMode, activeFilter, showCategories, navItems, modules, filterItems, categories, tickets }
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
            :modules="modules"
            userName="Maria Santos"
            avatarColor="#276EF1"
          />
        </template>

        <!-- Content (no pageHeader, no tabs, no rightPanel) -->
        <template #content>
          <div class="-m-[12px] sm:-m-[16px] md:-m-[24px]">
            <SidePanel v-model:collapsed="panelCollapsed" title="Maintenance" :width="240">
              <template #sidebar>
                <div class="px-[8px]">
                  <FilterList
                    v-model="activeFilter"
                    :items="filterItems"
                  />

                  <!-- Categories collapsible section -->
                  <div class="mt-[16px] px-[4px]">
                    <button class="flex items-center gap-[4px] text-[12px] font-semibold text-content-tertiary uppercase tracking-[0.5px] mb-[4px] cursor-pointer hover:text-content-secondary" @click="showCategories = !showCategories">
                      <svg :class="['w-[12px] h-[12px] transition-transform duration-200', showCategories ? '' : '-rotate-90']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                      Categories
                    </button>
                    <div v-if="showCategories" class="flex flex-col">
                      <div v-for="cat in categories" :key="cat.label"
                        class="flex items-center justify-between px-[8px] py-[6px] text-[13px] text-content-secondary hover:bg-surface-input rounded-[6px] cursor-pointer">
                        <span>{{ cat.label }}</span>
                        <span class="text-[12px] text-content-tertiary">{{ cat.count }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Main content area -->
              <div class="p-[16px] sm:p-[24px]">
                <!-- Header row -->
                <div class="flex flex-wrap items-center justify-between gap-[12px] mb-[20px]">
                  <h2 class="text-[24px] font-bold text-content-primary">Maintenance Tickets</h2>
                  <div class="flex items-center gap-[12px]">
                    <SegmentControl
                      v-model="viewMode"
                      :options="[
                        { label: 'Board', value: 'board' },
                        { label: 'List', value: 'list' },
                      ]"
                      size="sm"
                    />
                    <button class="px-[14px] py-[8px] text-[13px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:opacity-90 transition-opacity">
                      Create ticket
                    </button>
                  </div>
                </div>

                <!-- KPI row -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-[12px] mb-[24px]">
                  <KpiCard value="12" label="Open" accentColor="warning" :dot="true" />
                  <KpiCard value="3" label="Urgent" accentColor="negative" :dot="true" />
                  <KpiCard value="4.2h" label="Avg response" accentColor="accent" />
                  <KpiCard value="89%" label="Resolution rate" accentColor="positive" />
                </div>

                <!-- Ticket table -->
                <div class="overflow-x-auto -mx-[16px] sm:-mx-[24px]">
                  <table class="w-full border-collapse text-[13px] min-w-[900px]">
                    <thead>
                      <tr class="border-b-2 border-border">
                        <th v-for="h in ['Ticket ID', 'Property', 'Unit', 'Issue', 'Priority', 'Status', 'Assigned to', 'Created']" :key="h"
                          class="text-left py-[10px] px-[16px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap"
                        >
                          {{ h }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="ticket in tickets" :key="ticket.id"
                        class="border-b border-border hover:bg-surface-hover transition-colors cursor-pointer">
                        <td class="py-[12px] px-[16px] text-accent font-medium cursor-pointer">{{ ticket.id }}</td>
                        <td class="py-[12px] px-[16px] text-content-primary">{{ ticket.property }}</td>
                        <td class="py-[12px] px-[16px] text-content-primary font-medium">{{ ticket.unit }}</td>
                        <td class="py-[12px] px-[16px] text-content-primary max-w-[220px] truncate">{{ ticket.issue }}</td>
                        <td class="py-[12px] px-[16px]">
                          <Badge :label="ticket.priority" :color="ticket.priorityColor" />
                        </td>
                        <td class="py-[12px] px-[16px]">
                          <Badge :label="ticket.status" :color="ticket.statusColor" />
                        </td>
                        <td class="py-[12px] px-[16px]">
                          <div v-if="ticket.assignee" class="flex items-center gap-[6px]">
                            <Avatar :name="ticket.assignee" :color="ticket.assigneeColor" size="xs" />
                            <span class="text-content-secondary text-[13px]">{{ ticket.assignee }}</span>
                          </div>
                          <span v-else class="text-content-tertiary">&mdash;</span>
                        </td>
                        <td class="py-[12px] px-[16px] text-content-tertiary whitespace-nowrap">{{ ticket.created }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SidePanel>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
}
