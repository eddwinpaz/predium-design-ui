import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          @click="isOpen = true"
        >
          Open Modal
        </button>
        <Modal :open="isOpen" title="Modal Title" @close="isOpen = false">
          <p class="text-sm text-content-secondary">
            This is the modal body content. You can place any content here including forms, text, or other components.
          </p>
        </Modal>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          @click="isOpen = true"
        >
          Open Modal with Footer
        </button>
        <Modal :open="isOpen" title="Confirm Action" @close="isOpen = false">
          <p class="text-sm text-content-secondary">
            Are you sure you want to proceed with this action? This cannot be undone.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <button
                class="px-4 py-2 text-sm font-medium text-content-primary bg-secondary rounded-lg hover:bg-gray-200 transition-colors"
                @click="isOpen = false"
              >
                Cancel
              </button>
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                @click="isOpen = false"
              >
                Confirm
              </button>
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          @click="isOpen = true"
        >
          Open Large Modal
        </button>
        <Modal :open="isOpen" title="Large Modal" size="lg" @close="isOpen = false">
          <p class="text-sm text-content-secondary">
            This is a large modal with more space for content. It uses max-w-lg for the panel width, giving you room for forms, tables, or detailed information.
          </p>
        </Modal>
      </div>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          @click="isOpen = true"
        >
          Open Small Modal
        </button>
        <Modal :open="isOpen" title="Quick Confirm" size="sm" @close="isOpen = false">
          <p class="text-sm text-content-secondary">
            Delete this item?
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <button
                class="px-4 py-2 text-sm font-medium text-content-primary bg-secondary rounded-lg hover:bg-gray-200 transition-colors"
                @click="isOpen = false"
              >
                Cancel
              </button>
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                @click="isOpen = false"
              >
                Delete
              </button>
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
}
