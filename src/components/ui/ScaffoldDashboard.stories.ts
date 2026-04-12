import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ScaffoldDetail from "./ScaffoldDetail.vue";
import SidebarNav from "./SidebarNav.vue";
import NavHeader from "./NavHeader.vue";
import KpiCard from "./KpiCard.vue";
import MessageCard from "./MessageCard.vue";
import SegmentControl from "./SegmentControl.vue";
import Tile from "./Tile.vue";
import Avatar from "./Avatar.vue";
import Badge from "./Badge.vue";
import { ref } from "vue";

const meta: Meta<typeof ScaffoldDetail> = {
  title: "Scaffolds/Dashboard",
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

export const PropertyDashboard: Story = {
  render: () => ({
    components: {
      ScaffoldDetail,
      SidebarNav,
      NavHeader,
      KpiCard,
      MessageCard,
      SegmentControl,
      Tile,
      Avatar,
      Badge,
    },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024);
      const activityPeriod = ref("today");

      const navItems = [
        { label: "Dashboard", to: "/dashboard", active: true },
        { label: "Properties", to: "/properties" },
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

      const activities = [
        {
          name: "John Martinez",
          color: "#276EF1",
          action: "paid rent for Unit 4B",
          time: "2 hours ago",
        },
        {
          name: "Sarah Chen",
          color: "#05944F",
          action: "submitted maintenance request",
          time: "5 hours ago",
        },
        {
          name: "David Kim",
          color: "#E54B4B",
          action: "signed lease for Unit 2A",
          time: "Yesterday",
        },
        {
          name: "Emily Torres",
          color: "#FFC043",
          action: "moved out of Unit 7C",
          time: "Yesterday",
        },
        {
          name: "Robert Wilson",
          color: "#7356BF",
          action: "requested early lease termination",
          time: "2 days ago",
        },
      ];

      return {
        sidebarCollapsed,
        activityPeriod,
        navItems,
        modules,
        activities,
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
          <!-- Welcome section -->
          <div>
            <h1 class="text-[28px] font-bold text-content-primary">Good morning, Maria</h1>
            <p class="text-[14px] text-content-secondary mt-[4px]">Here's what's happening across your properties today</p>
          </div>

          <!-- KPI row -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-[12px]">
            <KpiCard value="94%" label="Occupancy rate" trend="+2.1%" trendDirection="up" accentColor="positive" :dot="true" />
            <KpiCard value="$128,450" label="Monthly revenue" trend="+$8,200" trendDirection="up" accentColor="accent" />
            <KpiCard value="12" label="Open tickets" trend="+3" trendDirection="up" accentColor="warning" :dot="true" />
            <KpiCard value="3" label="Leases expiring" trend="-1" trendDirection="down" accentColor="negative" :dot="true" />
          </div>

          <!-- Message card -->
          <MessageCard
            layout="horizontal"
            heading="3 leases expiring this month"
            description="Review and renew before tenants move out"
            buttonLabel="Review leases"
            backgroundColor="#276EF1"
          />

          <!-- Quick actions -->
          <div>
            <h3 class="text-[15px] font-semibold text-content-primary mb-[12px]">Quick actions</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-[12px]">
              <Tile align="top">
                New Property
                <template #description>Add a new property</template>
              </Tile>
              <Tile align="top">
                New Tenant
                <template #description>Register a tenant</template>
              </Tile>
              <Tile align="top">
                Create Lease
                <template #description>Draft a new lease</template>
              </Tile>
              <Tile align="top">
                Report Issue
                <template #description>Submit maintenance</template>
              </Tile>
            </div>
          </div>

          <!-- Recent activity -->
          <div>
            <div class="flex flex-wrap items-center justify-between gap-[12px] mb-[16px]">
              <h3 class="text-[15px] font-semibold text-content-primary">Recent activity</h3>
              <SegmentControl
                v-model="activityPeriod"
                :options="[
                  { label: 'Today', value: 'today' },
                  { label: 'This week', value: 'week' },
                  { label: 'This month', value: 'month' },
                ]"
                size="sm"
              />
            </div>
            <div class="flex flex-col gap-[2px]">
              <div
                v-for="(activity, i) in activities"
                :key="i"
                class="flex items-start gap-[12px] p-[12px] rounded-[8px] hover:bg-surface-hover transition-colors"
              >
                <Avatar :name="activity.name" :color="activity.color" size="sm" />
                <div class="flex-1 min-w-0">
                  <p class="text-[13px] text-content-primary leading-[20px]">
                    <span class="font-semibold">{{ activity.name }}</span>
                    {{ ' ' + activity.action }}
                  </p>
                  <p class="text-[12px] text-content-tertiary mt-[2px]">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
};
