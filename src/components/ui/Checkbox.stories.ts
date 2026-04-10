import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Unchecked: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {
    label: 'Accept terms and conditions',
  },
}

export const Checked: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {
    label: 'Accept terms and conditions',
  },
}

export const WithDescription: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {
    label: 'Enable notifications',
    description: 'You will receive email notifications for important updates.',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {
    label: 'Unavailable option',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {
    label: 'Required agreement',
    disabled: true,
  },
}

export const Group: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const paymentTerms = ref(true)
      const cargoInsurance = ref(true)
      const detentionClause = ref(false)
      return { paymentTerms, cargoInsurance, detentionClause }
    },
    template: `
      <div class="space-y-4">
        <Checkbox
          v-model="paymentTerms"
          label="Standard payment terms (Net 30)"
          description="Payments are due within 30 days of invoice date."
        />
        <Checkbox
          v-model="cargoInsurance"
          label="Require $1M cargo insurance"
          description="Carrier must provide proof of cargo insurance coverage."
        />
        <Checkbox
          v-model="detentionClause"
          label="Include detention clause"
          description="Compensation applies after 2 hours of wait time at facility."
        />
      </div>
    `,
  }),
}
