import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import Table from "./Table.vue";
import Badge from "./Badge.vue";

const columns = [
  { key: "id", label: "Shipment ID" },
  { key: "origin", label: "Origin" },
  { key: "destination", label: "Destination" },
  { key: "carrier", label: "Carrier" },
  { key: "status", label: "Status" },
  { key: "cost", label: "Cost", align: "right" as const },
];

const rows = [
  {
    id: "SHP-001",
    origin: "Los Angeles, CA",
    destination: "Chicago, IL",
    carrier: "GlobalFlow",
    status: "In Transit",
    cost: "$2,450",
  },
  {
    id: "SHP-002",
    origin: "Dallas, TX",
    destination: "Memphis, TN",
    carrier: "Knight Swift",
    status: "Delivered",
    cost: "$1,540",
  },
  {
    id: "SHP-003",
    origin: "Atlanta, GA",
    destination: "Miami, FL",
    carrier: "Werner",
    status: "Pending",
    cost: "$980",
  },
  {
    id: "SHP-004",
    origin: "Seattle, WA",
    destination: "Denver, CO",
    carrier: "J.B. Hunt",
    status: "Delivered",
    cost: "$3,200",
  },
  {
    id: "SHP-005",
    origin: "New York, NY",
    destination: "Boston, MA",
    carrier: "Schneider",
    status: "Delayed",
    cost: "$720",
  },
];

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    columns,
    rows,
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const Striped: Story = {
  args: {
    striped: true,
  },
};

export const CustomCell: Story = {
  render: (args) => ({
    components: { Table, Badge },
    setup() {
      return { args, columns, rows };
    },
    template: `
      <Table v-bind="args">
        <template #cell-id="{ value }">
          <span class="text-accent cursor-pointer hover:underline">{{ value }}</span>
        </template>
        <template #cell-status="{ value }">
          <Badge
            :color="value === 'Delivered' ? 'positive' : value === 'Delayed' ? 'negative' : value === 'In Transit' ? 'accent' : 'neutral'"
          >
            {{ value }}
          </Badge>
        </template>
      </Table>
    `,
  }),
  args: {
    columns,
    rows,
  },
};

export const StickyHeader: Story = {
  render: (args) => ({
    components: { Table },
    setup() {
      const manyRows = [
        ...rows,
        {
          id: "SHP-006",
          origin: "Portland, OR",
          destination: "Phoenix, AZ",
          carrier: "GlobalFlow",
          status: "In Transit",
          cost: "$1,870",
        },
        {
          id: "SHP-007",
          origin: "San Francisco, CA",
          destination: "Salt Lake City, UT",
          carrier: "Werner",
          status: "Delivered",
          cost: "$2,100",
        },
        {
          id: "SHP-008",
          origin: "Houston, TX",
          destination: "Nashville, TN",
          carrier: "Knight Swift",
          status: "Pending",
          cost: "$1,340",
        },
        {
          id: "SHP-009",
          origin: "Detroit, MI",
          destination: "Columbus, OH",
          carrier: "J.B. Hunt",
          status: "Delivered",
          cost: "$560",
        },
        {
          id: "SHP-010",
          origin: "Minneapolis, MN",
          destination: "Omaha, NE",
          carrier: "Schneider",
          status: "In Transit",
          cost: "$890",
        },
      ];
      return { args, columns, manyRows };
    },
    template: `
      <div class="max-h-[300px] overflow-y-auto">
        <Table v-bind="args" :columns="columns" :rows="manyRows" :sticky-header="true" />
      </div>
    `,
  }),
  args: {
    columns,
    rows,
  },
};
