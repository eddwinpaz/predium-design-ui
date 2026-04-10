import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DetailSection from './DetailSection.vue'

const meta: Meta<typeof DetailSection> = {
  title: 'UI/DetailSection',
  component: DetailSection,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'select', options: [2, 3, 4, 5, 6] },
    editable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof DetailSection>

export const Overview: Story = {
  args: {
    title: 'Overview',
    editable: true,
    columns: 6,
    fields: [
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
      { label: 'Robot flag', value: 'No' },
      { label: 'Customer routed', value: 'No' },
    ],
  },
}

export const ReferenceNumbers: Story = {
  args: {
    title: 'Reference #',
    editable: true,
    columns: 6,
    fields: [
      { label: 'UF shipment #', value: '875357061' },
      { label: 'SAP Shipment #', value: '0803552940' },
      { label: 'BOL number', value: '875357061' },
      { label: 'Trailer/Container ID', value: '276133' },
      { label: 'Customer reference #', value: '29F7212' },
      { label: 'Pro number', value: '#4901293' },
      { label: 'Monitor ID', value: 'AP29031NA' },
    ],
  },
}

export const Financials: Story = {
  args: {
    title: 'Financials',
    editable: true,
    columns: 6,
    fields: [
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
    ],
  },
}

export const ThreeColumns: Story = {
  args: {
    title: 'Contract Details',
    editable: false,
    columns: 3,
    fields: [
      { label: 'Contract ID', value: 'CNT-2026-0847' },
      { label: 'Carrier', value: 'GlobalFlow Carriers (GFC)' },
      { label: 'Status', value: 'Active' },
      { label: 'Effective start', value: '07/01/2026' },
      { label: 'Effective end', value: '12/31/2026' },
      { label: 'Rate type', value: 'Flat rate per lane' },
    ],
  },
}

export const WithCustomContent: Story = {
  render: (args) => ({
    components: { DetailSection },
    setup: () => ({ args }),
    template: `
      <DetailSection title="Carriers" :editable="true">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 8px 0; font-size: 11px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e2e2;">Mode</th>
              <th style="text-align: left; padding: 8px 0; font-size: 11px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e2e2;">SCAC</th>
              <th style="text-align: left; padding: 8px 0; font-size: 11px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e2e2;">Carrier name</th>
              <th style="text-align: left; padding: 8px 0; font-size: 11px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e2e2;">Equipment Type</th>
              <th style="text-align: left; padding: 8px 0; font-size: 11px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e2e2;">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px 0;">TL</td>
              <td style="padding: 12px 0;">GOHH</td>
              <td style="padding: 12px 0;">Golden Horizon Haulers</td>
              <td style="padding: 12px 0;">Dry Van</td>
              <td style="padding: 12px 0;">$900 <a href="#" style="color: #276EF1;">See analysis</a></td>
            </tr>
          </tbody>
        </table>
      </DetailSection>
    `,
  }),
}

export const ShipmentPage: Story = {
  render: () => ({
    components: { DetailSection },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 800px;">
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
            { label: 'Robot flag', value: 'No' },
          ]"
        />
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
          ]"
        />
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
          ]"
        />
      </div>
    `,
  }),
}
