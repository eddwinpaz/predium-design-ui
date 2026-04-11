import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ThemeToggle from './ThemeToggle.vue'
import { ref } from 'vue'

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'select', options: ['light', 'dark'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const theme = ref<'light' | 'dark'>('light')
      return { theme }
    },
    template: `
      <div class="flex items-center gap-[12px]">
        <ThemeToggle v-model="theme" />
        <span class="text-[14px] text-content-secondary">{{ theme }} mode</span>
      </div>
    `,
  }),
}

export const Dark: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const theme = ref<'light' | 'dark'>('dark')
      return { theme }
    },
    template: `
      <div class="flex items-center gap-[12px]">
        <ThemeToggle v-model="theme" />
        <span class="text-[14px] text-content-secondary">{{ theme }} mode</span>
      </div>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const theme = ref<'light' | 'dark'>('light')
      return { theme }
    },
    template: `
      <div class="flex items-center gap-[10px]">
        <ThemeToggle v-model="theme" size="sm" />
        <span class="text-[13px] text-content-secondary">{{ theme }}</span>
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const theme = ref<'light' | 'dark'>('light')
      return { theme }
    },
    template: `
      <div :class="theme === 'dark' ? 'bg-[#141414] p-[24px] rounded-[12px]' : 'bg-surface p-[24px] rounded-[12px] border border-border'">
        <div class="flex items-center justify-between">
          <div>
            <p :class="theme === 'dark' ? 'text-[14px] font-medium text-[#f0f0f0]' : 'text-[14px] font-medium text-content-primary'">Appearance</p>
            <p :class="theme === 'dark' ? 'text-[12px] text-[#777]' : 'text-[12px] text-content-tertiary'">Switch between light and dark theme</p>
          </div>
          <ThemeToggle v-model="theme" />
        </div>
      </div>
    `,
  }),
}
