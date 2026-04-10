import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['compact', 'default', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {},
}

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    placeholder: 'Enter your name...',
  },
}

export const WithStartEnhancer: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <Input v-bind="args" v-model="value">
        <template #startEnhancer>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </template>
      </Input>
    `,
  }),
  args: {
    placeholder: 'Search...',
  },
}

export const WithEndEnhancer: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <Input v-bind="args" v-model="value">
        <template #endEnhancer>
          <span class="text-xs">USD</span>
        </template>
      </Input>
    `,
  }),
  args: {
    placeholder: 'Amount',
  },
}

export const Error: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Invalid value')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    error: true,
  },
}

export const Positive: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Valid value')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    positive: true,
  },
}

export const Clearable: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Clear me')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    clearable: true,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Disabled input')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const compact = ref('')
      const defaultVal = ref('')
      const large = ref('')
      return { compact, defaultVal, large }
    },
    template: `
      <div class="flex flex-col gap-3">
        <Input v-model="compact" size="compact" placeholder="Compact" />
        <Input v-model="defaultVal" size="default" placeholder="Default" />
        <Input v-model="large" size="large" placeholder="Large" />
      </div>
    `,
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const v1 = ref('')
      const v2 = ref('With value')
      const v3 = ref('Error state')
      const v4 = ref('Positive state')
      const v5 = ref('Disabled')
      const v6 = ref('Clearable text')
      return { v1, v2, v3, v4, v5, v6 }
    },
    template: `
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <div>
          <p class="text-xs text-content-tertiary mb-1">Default</p>
          <Input v-model="v1" placeholder="Placeholder" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">With Value</p>
          <Input v-model="v2" />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Error</p>
          <Input v-model="v3" error />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Positive</p>
          <Input v-model="v4" positive />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Disabled</p>
          <Input v-model="v5" disabled />
        </div>
        <div>
          <p class="text-xs text-content-tertiary mb-1">Clearable</p>
          <Input v-model="v6" clearable />
        </div>
      </div>
    `,
  }),
}
