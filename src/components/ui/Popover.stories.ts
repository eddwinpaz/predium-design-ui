import type { Meta, StoryObj } from '@storybook/vue3'
import Popover from './Popover.vue'

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div class="p-20">
        <Popover placement="bottom-start">
          <template #trigger>
            <button class="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium">
              Open Menu
            </button>
          </template>
          <div class="w-48">
            <a href="#" class="block px-4 py-2.5 text-sm text-[#000] hover:bg-[#f6f6f6]">Profile</a>
            <a href="#" class="block px-4 py-2.5 text-sm text-[#000] hover:bg-[#f6f6f6]">Settings</a>
            <a href="#" class="block px-4 py-2.5 text-sm text-[#000] hover:bg-[#f6f6f6]">Sign out</a>
          </div>
        </Popover>
      </div>
    `,
  }),
}

export const BottomStart: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div class="p-20">
        <Popover placement="bottom-start">
          <template #trigger>
            <button class="px-4 py-2 bg-bg-inverse text-content-inverse rounded-lg text-sm font-medium">
              Bottom Start
            </button>
          </template>
          <div class="w-48">
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option 1</a>
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option 2</a>
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option 3</a>
          </div>
        </Popover>
      </div>
    `,
  }),
}

export const BottomEnd: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div class="p-20">
        <Popover placement="bottom-end">
          <template #trigger>
            <button class="px-4 py-2 bg-bg-inverse text-content-inverse rounded-lg text-sm font-medium">
              Bottom End
            </button>
          </template>
          <div class="w-48">
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option A</a>
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option B</a>
            <a href="#" class="block px-4 py-2 text-sm text-content-primary hover:bg-bg-secondary">Option C</a>
          </div>
        </Popover>
      </div>
    `,
  }),
}

export const WithCustomContent: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div class="p-20">
        <Popover placement="bottom-start">
          <template #trigger>
            <button class="px-4 py-2 bg-bg-inverse text-content-inverse rounded-lg text-sm font-medium">
              Custom Content
            </button>
          </template>
          <div class="w-72 p-4">
            <h3 class="text-sm font-semibold text-content-primary mb-1">Notifications</h3>
            <p class="text-xs text-content-secondary mb-3">You have 3 unread messages.</p>
            <div class="space-y-2">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-bg-secondary cursor-pointer">
                <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-semibold">JD</div>
                <div>
                  <p class="text-sm text-content-primary">John Doe</p>
                  <p class="text-xs text-content-tertiary">Sent you a message</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-bg-secondary cursor-pointer">
                <div class="w-8 h-8 rounded-full bg-positive flex items-center justify-center text-white text-xs font-semibold">AS</div>
                <div>
                  <p class="text-sm text-content-primary">Alice Smith</p>
                  <p class="text-xs text-content-tertiary">Accepted your invite</p>
                </div>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    `,
  }),
}
