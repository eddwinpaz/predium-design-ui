import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ScaffoldDetail from './ScaffoldDetail.vue'
import NavHeader from './NavHeader.vue'
import PageHeader from './PageHeader.vue'
import Tabs from './Tabs.vue'
import DetailSection from './DetailSection.vue'
import ProgressBar from './ProgressBar.vue'
import Badge from './Badge.vue'
import { ref } from 'vue'

const meta: Meta<typeof ScaffoldDetail> = {
  title: 'Scaffolds/BidReview',
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

export const SeptemberBid: Story = {
  render: () => ({
    components: { ScaffoldDetail, NavHeader, PageHeader, Tabs, DetailSection, ProgressBar, Badge },
    setup() {
      const activeTab = ref('lanes')
      const tabs = [
        { key: 'lanes', label: 'Lanes' },
        { key: 'carriers', label: 'Carriers' },
        { key: 'documents', label: 'Documents' },
      ]

      const lanes = [
        { origin: 'Rogers, AR', dest: 'Park City, UT', invited: 5, bids: 5, loads: '15 /week', status: 'Assigned', primary: 2, backup: 2 },
        { origin: 'Rogers, AR', dest: 'Big Sky, MT', invited: 4, bids: 4, loads: '11 /week', status: 'Assigned', primary: 2, backup: 2 },
        { origin: 'Rogers, AR', dest: 'Whistler, BC', invited: 6, bids: 6, loads: '12 /week', status: 'Assigned', primary: 2, backup: 2 },
        { origin: 'Santa Monica, CA', dest: 'Alta, UT', invited: 13, bids: 12, loads: '5 /week', status: 'Assigned', primary: 1, backup: 2 },
        { origin: 'Santa Monica, CA', dest: 'Aspen, CO', invited: 13, bids: 13, loads: '7 /week', status: 'Assigned', primary: 1, backup: 2 },
        { origin: 'Chicago, IL', dest: 'Telluride, CO', invited: 13, bids: 10, loads: '8 /week', status: 'Assigned', primary: 2, backup: 1 },
      ]

      return { activeTab, tabs, lanes }
    },
    template: `
      <ScaffoldDetail>
        <!-- No sidebar for Exchange view -->

        <!-- Nav Header -->
        <template #navHeader>
          <NavHeader
            brand="Predium"
            brandSuffix="Exchange"
            subtitle="Dunder Mifflin"
            :navItems="[
              { label: 'Bid events', active: true },
              { label: 'Carriers' },
            ]"
            userName="Alejandro Bernal"
            avatarColor="#276EF1"
          />
        </template>

        <!-- Page Header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['All bid events', 'September bid']"
            title="September bid"
            status="Bids to review"
            statusColor="warning"
            :actions="[
              { label: 'Export assignments', kind: 'dropdown', items: ['Export as .xlsx', 'Export as .csv', 'Export as .pdf'] },
            ]"
          />
        </template>

        <!-- Tabs -->
        <template #tabs>
          <Tabs v-model="activeTab" :tabs="tabs" />
        </template>

        <!-- Content -->
        <template #content>
          <!-- Stats row -->
          <DetailSection
            title=""
            :editable="false"
            :columns="5"
            :fields="[
              { label: 'Lanes in total', value: '7' },
              { label: 'Bidding start date', value: '09/22/23, 12:00 AM PST' },
              { label: 'Bidding deadline', value: '09/26/23, 12:00 AM PST' },
              { label: 'Rate effective start date', value: '10/01/23, 12:00 AM PST' },
              { label: 'Rate effective end date', value: '12/31/23, 12:00 AM PST' },
            ]"
          />

          <!-- Lane volume card -->
          <div class="border border-border rounded-[12px] bg-surface p-[20px] max-w-[280px]">
            <p class="text-[13px] font-medium text-content-primary mb-[8px]">Lane volume assigned</p>
            <div class="flex items-center gap-[12px]">
              <span class="text-[15px] font-bold text-content-primary">100%</span>
              <div class="flex-1">
                <ProgressBar :value="100" color="accent" size="md" />
              </div>
            </div>
          </div>

          <!-- How it works -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[16px]">
            <div class="flex-1">
              <h4 class="text-[14px] font-semibold text-content-primary mb-[4px]">How it works</h4>
              <p class="text-[13px] text-content-secondary leading-[20px]">
                Review carrier bids, assign carriers, and set designation and estimated volume. If you'd like to, you can also
                download an .xlsx file of all carrier bids, assign loads in this document, and re-upload once you're completed.
              </p>
            </div>
            <div class="flex items-center gap-[8px] flex-shrink-0">
              <button class="flex items-center gap-[6px] px-[14px] py-[10px] text-[13px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors border border-border">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                Upload assignments
              </button>
              <button class="flex items-center gap-[6px] px-[14px] py-[10px] text-[13px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors border border-border">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Export bids as .xlsx
              </button>
            </div>
          </div>

          <!-- Lanes table -->
          <div>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-[13px]">
                <thead>
                  <tr class="border-b-2 border-border">
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Origin</th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Destination</th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Carriers invited</th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Bids</th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Loads</th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">
                      Lane status
                      <svg class="inline w-[12px] h-[12px] ml-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </th>
                    <th class="text-left py-[10px] px-[12px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Carriers assigned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lane, i) in lanes" :key="i" class="border-b border-border hover:bg-surface-hover transition-colors">
                    <td class="py-[12px] px-[12px]">
                      <div class="text-content-primary">{{ lane.origin }}</div>
                      <div class="text-[12px] text-content-tertiary">Live load</div>
                    </td>
                    <td class="py-[12px] px-[12px]">
                      <div class="text-content-primary">{{ lane.dest }}</div>
                      <div class="text-[12px] text-content-tertiary">Live load</div>
                    </td>
                    <td class="py-[12px] px-[12px] text-content-primary">{{ lane.invited }}</td>
                    <td class="py-[12px] px-[12px] text-content-primary">{{ lane.bids }}</td>
                    <td class="py-[12px] px-[12px] text-content-primary">{{ lane.loads }}</td>
                    <td class="py-[12px] px-[12px]">
                      <span class="px-[8px] py-[2px] text-[12px] rounded-[4px] bg-surface-input text-content-secondary">{{ lane.status }}</span>
                    </td>
                    <td class="py-[12px] px-[12px]">
                      <div class="text-content-primary">{{ lane.primary }} Primary</div>
                      <div class="text-[12px] text-content-tertiary">{{ lane.backup }} Backup</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Floating action button -->
          <div class="flex justify-end sticky bottom-[16px]">
            <button class="px-[20px] py-[12px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:bg-btn-primary-hover transition-colors shadow-lg">
              Send all assignments
            </button>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
}
