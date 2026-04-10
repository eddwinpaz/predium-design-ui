import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './Accordion.vue'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    items: [
      { title: 'What is Predium UI?', content: 'Predium UI is a design system based on Uber\'s Base Web, built with Vue 3 and Tailwind CSS.' },
      { title: 'How do I install it?', content: 'You can install it via npm: npm install predium-ui. Then import the components you need.' },
      { title: 'Is it open source?', content: 'Yes, Predium UI is open source and available under the MIT license.' },
    ],
  },
}

export const MultipleOpen: Story = {
  args: {
    items: [
      { title: 'Section A', content: 'Content for section A. This accordion allows multiple sections to be open at once.' },
      { title: 'Section B', content: 'Content for section B. Try opening this while section A is still open.' },
      { title: 'Section C', content: 'Content for section C. All three can be open simultaneously.' },
    ],
    multiple: true,
  },
}

export const DefaultOpen: Story = {
  args: {
    items: [
      { title: 'Getting Started', content: 'This section is open by default to guide new users through the setup process.', defaultOpen: true },
      { title: 'Advanced Configuration', content: 'Advanced settings for power users.' },
      { title: 'Troubleshooting', content: 'Common issues and their solutions.' },
    ],
  },
}

export const SingleItem: Story = {
  args: {
    items: [
      { title: 'Click to expand', content: 'This is a single accordion item. Useful for collapsible sections of content.' },
    ],
  },
}
