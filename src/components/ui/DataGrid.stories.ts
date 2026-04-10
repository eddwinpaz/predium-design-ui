import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DataGrid from './DataGrid.vue'

const meta: Meta<typeof DataGrid> = {
  title: 'UI/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataGrid>

export const Scheduling: Story = {
  render: () => ({
    components: { DataGrid },
    setup() {
      const columns = [
        { key: 'stop', label: 'Stop', width: '60px' },
        { key: 'type', label: 'Type', width: '80px' },
        { key: 'status', label: 'Status', width: '100px' },
        { key: 'time', label: 'Time' },
        { key: 'locationId', label: 'Location ID', width: '100px' },
        { key: 'address', label: 'Address' },
        { key: 'contact', label: 'Contact' },
        { key: 'method', label: 'Method', width: '80px' },
        { key: 'scheduledBy', label: 'Scheduled by' },
      ]
      const rows = [
        { stop: '1', type: 'Pickup', status: 'Booked', time: '09/19/2024 09:00', locationId: '12KAS', address: '107 MARKET RD, NEW ORLEANS', contact: 'Dallas Waters', method: 'Manual', scheduledBy: 'Carrier' },
        { stop: '99', type: 'Dropoff', status: 'Requested', time: '09/21/2024 09:00', locationId: '1923', address: '1480 MAIN AVE UNIT 200, HOUST', contact: 'Michelle Woods', method: 'Manual', scheduledBy: 'UF Operations' },
      ]
      function onBulk(action: string, indices: number[]) {
        alert(action + ': rows ' + indices.join(', '))
      }
      return { columns, rows, onBulk }
    },
    template: `
      <DataGrid
        title="Scheduling"
        :columns="columns"
        :rows="rows"
        @bulk-action="onBulk"
      />
    `,
  }),
}

export const Shipments: Story = {
  render: () => ({
    components: { DataGrid },
    setup() {
      const columns = [
        { key: 'id', label: 'Shipment ID' },
        { key: 'origin', label: 'Origin' },
        { key: 'destination', label: 'Destination' },
        { key: 'status', label: 'Status' },
        { key: 'cost', label: 'Cost' },
      ]
      const rows = [
        { id: 'SHP-001', origin: 'Los Angeles, CA', destination: 'Chicago, IL', status: 'In transit', cost: '$2,450' },
        { id: 'SHP-002', origin: 'Dallas, TX', destination: 'Memphis, TN', status: 'Delivered', cost: '$1,540' },
        { id: 'SHP-003', origin: 'Atlanta, GA', destination: 'Miami, FL', status: 'Pending', cost: '$980' },
        { id: 'SHP-004', origin: 'Seattle, WA', destination: 'Denver, CO', status: 'Delivered', cost: '$3,200' },
        { id: 'SHP-005', origin: 'New York, NY', destination: 'Boston, MA', status: 'Cancelled', cost: '$720' },
      ]
      const bulkActions = [
        { label: 'Delete', key: 'delete', danger: true },
        { label: 'Export', key: 'export' },
        { label: 'Assign', key: 'assign' },
      ]
      function onBulk(action: string, indices: number[]) {
        alert(action + ': ' + indices.length + ' items')
      }
      return { columns, rows, bulkActions, onBulk }
    },
    template: `
      <DataGrid
        title="Shipments"
        :columns="columns"
        :rows="rows"
        :bulk-actions="bulkActions"
        @bulk-action="onBulk"
        @edit="() => alert('Entering edit mode')"
      />
    `,
  }),
}

export const CustomBulkActions: Story = {
  render: () => ({
    components: { DataGrid },
    setup() {
      const columns = [
        { key: 'carrier', label: 'Carrier' },
        { key: 'scac', label: 'SCAC' },
        { key: 'type', label: 'Type' },
        { key: 'status', label: 'Status' },
      ]
      const rows = [
        { carrier: 'GlobalFlow Carriers', scac: 'GFC', type: 'Asset', status: 'Active' },
        { carrier: 'Knight Swift', scac: 'KSW', type: 'Asset', status: 'Active' },
        { carrier: 'XPO Logistics', scac: 'XPO', type: 'Broker', status: 'Suspended' },
        { carrier: 'Werner', scac: 'WRN', type: 'Asset', status: 'Active' },
      ]
      const bulkActions = [
        { label: 'Suspend', key: 'suspend', danger: true },
        { label: 'Export CSV', key: 'export' },
        { label: 'Send invite', key: 'invite' },
      ]
      function onBulk(action: string, indices: number[]) {
        alert(action + ': ' + indices.length + ' carriers')
      }
      return { columns, rows, bulkActions, onBulk }
    },
    template: `
      <DataGrid
        title="Carriers"
        :columns="columns"
        :rows="rows"
        :bulk-actions="bulkActions"
        @bulk-action="onBulk"
      />
    `,
  }),
}

export const NoSelectable: Story = {
  render: () => ({
    components: { DataGrid },
    setup() {
      const columns = [
        { key: 'label', label: 'Field' },
        { key: 'value', label: 'Value' },
      ]
      const rows = [
        { label: 'Total AP', value: '$1,227.31' },
        { label: 'Total AR', value: '$1,423.91' },
        { label: 'Net margin', value: '$231.60' },
      ]
      return { columns, rows }
    },
    template: `
      <DataGrid title="Financials" :columns="columns" :rows="rows" :selectable="false" :editable="false" />
    `,
  }),
}
