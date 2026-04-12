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
  title: "Scaffolds/FinancialsInvoice",
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

export const AccountsPayableInvoice: Story = {
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
        { key: "invoice-list", label: "Invoice list" },
        { key: "me-history", label: "ME history" },
        { key: "comments", label: "Comments" },
        { key: "invoice-errors", label: "Invoice errors" },
        { key: "me-errors", label: "ME errors" },
        { key: "queue-history", label: "Queue history" },
      ];

      const navItems = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Search", to: "/search" },
        { label: "Orders", to: "/orders" },
        { label: "Shipments", to: "/shipments" },
        {
          label: "Rates & Routing",
          children: [
            { label: "Rates & lanes", to: "/rates-lanes" },
            { label: "Routing guides", to: "/routing-guides" },
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
        { label: "Financials", to: "/financials", active: true },
        { label: "Settings", to: "/settings" },
      ];

      const modules = [
        {
          title: "Operations",
          items: [
            { label: "Shipments" },
            { label: "Orders" },
            { label: "Carriers" },
          ],
        },
        {
          title: "Finance",
          items: [
            { label: "Payments" },
            { label: "Reports" },
          ],
        },
        {
          title: "Admin",
          items: [{ label: "Settings" }, { label: "Calendar" }],
        },
      ];

      /* Charge summary table */
      const chargeCols = [
        { key: "stop", label: "Stop", width: "50px" },
        { key: "chargeType", label: "Charge type" },
        { key: "creationMethod", label: "Creation method", width: "120px" },
        { key: "me", label: "ME", width: "100px", align: "right" as const },
        { key: "available", label: "Available", width: "90px", align: "right" as const },
        { key: "otherClaimedWip", label: "Other claimed WIP", width: "130px", align: "right" as const },
        { key: "initialDiscrepancy", label: "Initial discrepancy", width: "130px", align: "right" as const },
        { key: "carrierInvoice", label: "Carrier Invoice", width: "120px", align: "right" as const },
        { key: "approvedToPay", label: "Approved to pay", width: "120px", align: "right" as const },
        { key: "reasonCode", label: "Reason code", width: "100px" },
      ];

      const chargeRows = [
        {
          stop: "1",
          chargeType: "Detention loading",
          creationMethod: "System",
          me: "1,991.25",
          available: "1,991.25",
          otherClaimedWip: "",
          initialDiscrepancy: "",
          carrierInvoice: "1,991.25",
          approvedToPay: "1,991.25",
          reasonCode: "",
          _meIcon: true,
        },
        {
          stop: "1",
          chargeType: "Fuel Surcharge",
          creationMethod: "System",
          me: "361.08",
          available: "361.08",
          otherClaimedWip: "",
          initialDiscrepancy: "",
          carrierInvoice: "361.08",
          approvedToPay: "361.08",
          reasonCode: "",
          _meIcon: true,
        },
        {
          stop: "1",
          chargeType: "Tarp",
          creationMethod: "Manual",
          me: "60.00",
          available: "60.00",
          otherClaimedWip: "",
          initialDiscrepancy: "",
          carrierInvoice: "60.00",
          approvedToPay: "60.00",
          reasonCode: "",
          _meIcon: true,
        },
        {
          stop: "1",
          chargeType: "Detention loading",
          creationMethod: "",
          me: "93.75",
          available: "93.75",
          otherClaimedWip: "",
          initialDiscrepancy: "",
          carrierInvoice: "93.75",
          approvedToPay: "93.75",
          reasonCode: "",
          _meIcon: true,
        },
      ];

      /* Documents table */
      const docRows = [
        { docType: "Carrier invoice", status: "Received" },
        { docType: "BOL", status: "Received" },
        { docType: "POD", status: "Received" },
      ];

      /* References table */
      const refRows = [
        { refType: "Primary Reference *", value: "CL110071378" },
        { refType: "Order # *", value: "CL110071378" },
        { refType: "BOL # *", value: "CL110071378" },
        { refType: "PO #", value: "N/A" },
        { refType: "TO #", value: "CL110071378" },
      ];

      return {
        sidebarCollapsed,
        activeTab,
        tabs,
        navItems,
        modules,
        chargeCols,
        chargeRows,
        docRows,
        refRows,
      };
    },
    template: `
      <ScaffoldDetail>
        <!-- Sidebar -->
        <template #sidebar>
          <SidebarNav v-model:collapsed="sidebarCollapsed" :items="navItems" brand="Predium TMS" />
        </template>

        <!-- Top nav -->
        <template #navHeader="{ openSidebar }">
          <NavHeader
            brand="PREDIUM"
            brandSuffix="TMS"
            subtitle="Bev's Beverages Operations"
            :showMenuButton="true"
            @menuClick="openSidebar"
          >
            <template #actions>
              <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #000">AB</button>
            </template>
          </NavHeader>
        </template>

        <!-- Page header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['Financials', 'ME #3828391381']"
            title="ME #3828391381"
            subtitle="Accounts payable invoice"
            :actions="[
              { label: 'Assign to' },
              { label: 'Add' },
              { label: 'More', kind: 'dropdown', items: ['View audit log', 'Duplicate', 'Export PDF', 'Cancel invoice'] },
            ]"
          />
        </template>

        <!-- Tabs -->
        <template #tabs>
          <Tabs v-model="activeTab" :tabs="tabs" />
        </template>

        <!-- Main content -->
        <template #content>
          <!-- Status -->
          <DetailSection
            title="Status"
            :columns="6"
            :fields="[
              { label: 'Status', value: 'Auto approved' },
              { label: 'Queue', value: 'AP Auto approved' },
              { label: 'Status date', value: '07/23/2023' },
              { label: 'Assigned to', value: 'Mark Andrews' },
              { label: 'Invoice approved', value: 'Mark Andrews' },
              { label: 'Bill to name/code', value: 'Lorem ipsum' },
            ]"
          />

          <!-- Bill to information (extra fields below status) -->
          <div class="-mt-[16px]">
            <div class="border border-border rounded-[12px] bg-surface px-[16px] sm:px-[24px] py-[16px] sm:py-[20px]">
              <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] leading-[16px]">Bill to information</div>
              <div class="text-[14px] text-content-primary leading-[20px] mt-[2px]">Address info</div>
              <div class="text-[14px] text-content-secondary leading-[20px]">Lorem ipsum</div>
            </div>
          </div>

          <!-- Invoice details -->
          <DetailSection
            title="Invoice details"
            :editable="true"
            :columns="6"
            :fields="[
              { label: 'Carrier invoice #', value: '12321412321' },
              { label: 'Receipt date', value: '04/20/23' },
              { label: 'Adjustment type', value: 'Original' },
              { label: 'Invoice date', value: '04/23/23' },
              { label: 'Batch type:', value: 'EDI' },
              { label: 'Statement number', value: '-' },
              { label: 'Pay to', value: 'HDLO - HD Logistics' },
              { label: 'Currency', value: 'US Dollar' },
              { label: 'Total approved', value: '.00' },
              { label: 'Invoice SCAC', value: 'CRDF' },
              { label: 'Invoice trip #', value: '-' },
              { label: 'Remittance date', value: '-' },
              { label: 'Remittance #', value: '-' },
              { label: 'Remittance amount', value: '-' },
              { label: 'Revenue type', value: '-' },
            ]"
          />

          <!-- Charge summary -->
          <div>
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Charge summary</h3>
              <button class="px-[12px] py-[8px] text-[14px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">Add charge</button>
            </div>

            <!-- Desktop table -->
            <div class="hidden sm:block border border-border rounded-[12px] bg-surface overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse text-[13px]">
                  <thead>
                    <tr class="border-b border-border">
                      <th class="px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap" style="width: 50px">Stop</th>
                      <th class="px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Charge type</th>
                      <th class="px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Creation method</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">ME</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Available</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Other claimed WIP</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Initial discrepancy</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Carrier Invoice</th>
                      <th class="px-[12px] py-[10px] text-right text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Approved to pay</th>
                      <th class="px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap">Reason code</th>
                      <th class="px-[12px] py-[10px] w-[40px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in chargeRows" :key="i" class="border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors">
                      <td class="px-[12px] py-[10px] text-content-primary">{{ row.stop }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary whitespace-nowrap">{{ row.chargeType }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary">{{ row.creationMethod }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">
                        <span class="inline-flex items-center gap-[4px]">
                          <svg v-if="row._meIcon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-content-tertiary"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                          {{ row.me }}
                        </span>
                      </td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">{{ row.available }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">{{ row.otherClaimedWip }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">{{ row.initialDiscrepancy }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">{{ row.carrierInvoice }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">{{ row.approvedToPay }}</td>
                      <td class="px-[12px] py-[10px] text-content-primary">{{ row.reasonCode }}</td>
                      <td class="px-[12px] py-[10px] text-center">
                        <button class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                        </button>
                      </td>
                    </tr>
                    <!-- TOTAL row -->
                    <tr class="border-t-2 border-border bg-surface-hover/50 font-semibold">
                      <td class="px-[12px] py-[10px] text-content-primary">TOTAL</td>
                      <td class="px-[12px] py-[10px]"></td>
                      <td class="px-[12px] py-[10px]"></td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">2,549.00</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">(2,549.00)</td>
                      <td class="px-[12px] py-[10px]"></td>
                      <td class="px-[12px] py-[10px]"></td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">(93.75)</td>
                      <td class="px-[12px] py-[10px] text-content-primary text-right">2,549.00</td>
                      <td class="px-[12px] py-[10px]"></td>
                      <td class="px-[12px] py-[10px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Mobile card view -->
            <div class="sm:hidden flex flex-col gap-[8px]">
              <div v-for="(row, i) in chargeRows" :key="i" class="border border-border rounded-[12px] bg-surface p-[14px]">
                <div class="flex items-center justify-between mb-[8px]">
                  <span class="text-[14px] font-medium text-content-primary">{{ row.chargeType }}</span>
                  <button class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </button>
                </div>
                <div class="grid grid-cols-2 gap-x-[12px] gap-y-[8px]">
                  <div>
                    <div class="text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Stop</div>
                    <div class="text-[13px] text-content-primary mt-[1px]">{{ row.stop }}</div>
                  </div>
                  <div>
                    <div class="text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Method</div>
                    <div class="text-[13px] text-content-primary mt-[1px]">{{ row.creationMethod || '-' }}</div>
                  </div>
                  <div>
                    <div class="text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]">ME</div>
                    <div class="text-[13px] text-content-primary mt-[1px]">{{ row.me }}</div>
                  </div>
                  <div>
                    <div class="text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Approved</div>
                    <div class="text-[13px] text-content-primary mt-[1px]">{{ row.approvedToPay }}</div>
                  </div>
                </div>
              </div>
              <!-- Mobile total -->
              <div class="border-2 border-border rounded-[12px] bg-surface-hover/50 p-[14px]">
                <div class="flex items-center justify-between">
                  <span class="text-[14px] font-bold text-content-primary">TOTAL</span>
                  <span class="text-[14px] font-bold text-content-primary">2,549.00</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Right panel -->
        <template #rightPanel>
          <!-- Shipment associations -->
          <div class="mb-[24px]">
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Shipment associations</h3>
              <div class="flex items-center gap-[6px]">
                <button class="inline-flex items-center gap-[4px] px-[10px] py-[6px] text-[13px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  ME details
                </button>
                <button class="px-[10px] py-[6px] text-[13px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">Edit</button>
              </div>
            </div>
            <div class="border border-border rounded-[12px] bg-surface px-[16px] py-[16px]">
              <div class="grid grid-cols-2 gap-x-[16px] gap-y-[12px]">
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">ME #</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">1323908123</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Domain</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">American Tire Distributors Inc.</div>
                </div>
                <div class="col-span-2">
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Account</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">American Tire Distributors Inc.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shipment information -->
          <div class="mb-[24px]">
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Shipment information</h3>
              <button class="px-[10px] py-[6px] text-[13px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">Edit</button>
            </div>
            <div class="border border-border rounded-[12px] bg-surface px-[16px] py-[16px]">
              <div class="grid grid-cols-2 gap-x-[16px] gap-y-[12px]">
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Delivery date</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">11/07/22</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Shipment Complete date</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">TL</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Shipment ID</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">36,102</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Mode</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">TL</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">PGI received</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">Yes</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">All inclusive linehaul</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">Yes</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Origin</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">NSO - DC - NEWNAN</div>
                  <div class="text-[12px] text-content-secondary">620 Campus Dr, Newnan, CA USA 30263</div>
                </div>
                <div>
                  <div class="text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Destination</div>
                  <div class="text-[14px] text-content-primary mt-[2px]">Williams Institutional Foods</div>
                  <div class="text-[12px] text-content-secondary">1325 Bowens Mill Rd SW, Douglas, GA USA, 31533</div>
                </div>
              </div>
              <button class="mt-[12px] text-[13px] font-medium text-[#276EF1] hover:underline cursor-pointer flex items-center gap-[4px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
                Show more
              </button>
            </div>
          </div>

          <!-- Documents -->
          <div class="mb-[24px]">
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Documents</h3>
              <button class="px-[10px] py-[6px] text-[13px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">Add document</button>
            </div>
            <div class="border border-border rounded-[12px] bg-surface overflow-hidden">
              <table class="w-full text-[13px]">
                <thead>
                  <tr class="border-b border-border">
                    <th class="text-left px-[12px] py-[8px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Doc type</th>
                    <th class="text-left px-[12px] py-[8px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Status</th>
                    <th class="w-[40px] px-[12px] py-[8px]"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(doc, i) in docRows" :key="i" class="border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors">
                    <td class="px-[12px] py-[10px] text-content-primary">{{ doc.docType }}</td>
                    <td class="px-[12px] py-[10px]">
                      <span class="inline-flex items-center gap-[4px] text-positive-text">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                        {{ doc.status }}
                      </span>
                    </td>
                    <td class="px-[12px] py-[10px] text-center">
                      <button class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- References -->
          <div class="mb-[24px]">
            <div class="flex items-center justify-between mb-[12px]">
              <h3 class="text-[15px] font-semibold text-content-primary">References</h3>
              <button class="px-[10px] py-[6px] text-[13px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors cursor-pointer">Add reference</button>
            </div>
            <div class="border border-border rounded-[12px] bg-surface overflow-hidden">
              <table class="w-full text-[13px]">
                <thead>
                  <tr class="border-b border-border">
                    <th class="text-left px-[12px] py-[8px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Ref type</th>
                    <th class="text-left px-[12px] py-[8px] text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px]">Value</th>
                    <th class="w-[40px] px-[12px] py-[8px]"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(r, i) in refRows" :key="i" class="border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors">
                    <td class="px-[12px] py-[10px] text-content-primary">{{ r.refType }}</td>
                    <td class="px-[12px] py-[10px] text-content-primary">{{ r.value }}</td>
                    <td class="px-[12px] py-[10px] text-center">
                      <button class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button class="w-full px-[12px] py-[10px] text-[13px] font-medium text-[#276EF1] hover:underline cursor-pointer flex items-center gap-[4px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
                Show all 8 references
              </button>
            </div>
          </div>

          <!-- Shipment history -->
          <div>
            <h3 class="text-[15px] font-semibold text-content-primary mb-[16px]">Shipment history</h3>
            <div class="flex gap-[12px]">
              <div class="flex flex-col items-center">
                <div class="w-[24px] h-[24px] rounded-full bg-[#276EF1] flex items-center justify-center text-white text-[11px] font-bold">1</div>
                <div class="w-[2px] flex-1 bg-border my-[4px]" />
              </div>
              <div class="pb-[20px]">
                <p class="text-[14px] font-semibold text-content-primary">BASF CORP. C/O OAKLAND PLANT (XOA1)</p>
                <p class="text-[12px] text-content-secondary">171 Montecito Ave, Oakland, CA 94610</p>
              </div>
            </div>
            <div class="flex gap-[12px]">
              <div class="flex flex-col items-center">
                <div class="w-[24px] h-[24px] rounded-full bg-btn-primary flex items-center justify-center text-white text-[11px] font-bold">2</div>
              </div>
              <div>
                <p class="text-[14px] font-semibold text-content-primary">Williams Institutional Foods</p>
                <p class="text-[12px] text-content-secondary">1325 Bowens Mill Rd SW, Douglas, GA 31533</p>
              </div>
            </div>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
};
