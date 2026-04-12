import type { Meta, StoryObj } from "@storybook/vue3-vite";
import PageHeader from "./PageHeader.vue";

const meta: Meta<typeof PageHeader> = {
  title: "UI/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: '<div style="margin: -16px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const ShipmentDetail: Story = {
  args: {
    breadcrumbs: ["Shipments", "New Orleans, LA → Houston, TX"],
    title: "New Orleans, LA → Houston, TX",
    subtitle: "#88844901 · HJBI",
    status: "In transit",
    statusColor: "positive",
    actions: [
      { label: "Add comment" },
      { label: "View BOL" },
      {
        label: "More actions",
        kind: "dropdown",
        items: ["Duplicate", "Share", "Archive", "Cancel shipment"],
      },
    ],
  },
};

export const OrderDetail: Story = {
  args: {
    breadcrumbs: ["Orders", "ORD-2026-4821"],
    title: "Order #ORD-2026-4821",
    subtitle: "Created Apr 8, 2026",
    status: "Pending",
    statusColor: "warning",
    actions: [{ label: "Book shipment", kind: "primary" }, { label: "Edit" }],
  },
};

export const BidEvent: Story = {
  args: {
    breadcrumbs: ["All bid events", "April 2023 Bid"],
    title: "April 2023 Bid",
    status: "Bids for review",
    statusColor: "warning",
    actions: [
      { label: "Download report" },
      { label: "Finalize bid", kind: "primary" },
    ],
  },
};

export const CarrierProfile: Story = {
  args: {
    breadcrumbs: ["Carriers", "GlobalFlow Carriers"],
    title: "GlobalFlow Carriers",
    subtitle: "SCAC: GFC",
    status: "Active",
    statusColor: "positive",
    actions: [
      { label: "Contact" },
      {
        label: "More actions",
        kind: "dropdown",
        items: ["Edit", "Suspend", "Remove"],
      },
    ],
  },
};

export const Simple: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Last updated Mar 30, 19:24 EST",
    actions: [{ label: "Create shipment", kind: "primary" }],
  },
};
