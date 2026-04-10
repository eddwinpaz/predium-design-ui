import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Typography from './Typography.vue'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-large',
        'display-medium',
        'display-small',
        'heading-xlarge',
        'heading-large',
        'heading-medium',
        'heading-small',
        'heading-xsmall',
        'label-large',
        'label-medium',
        'label-small',
        'paragraph-large',
        'paragraph-medium',
        'paragraph-small',
        'paragraph-xsmall',
      ],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'inverse',
        'accent',
        'positive',
        'negative',
      ],
    },
    as: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

const allVariants = [
  'display-large',
  'display-medium',
  'display-small',
  'heading-xlarge',
  'heading-large',
  'heading-medium',
  'heading-small',
  'heading-xsmall',
  'label-large',
  'label-medium',
  'label-small',
  'paragraph-large',
  'paragraph-medium',
  'paragraph-small',
  'paragraph-xsmall',
] as const

export const AllVariants: Story = {
  render: () => ({
    components: { Typography },
    setup() {
      return { allVariants }
    },
    template: `
      <div class="space-y-4">
        <div v-for="v in allVariants" :key="v" class="flex items-baseline gap-4">
          <span class="text-xs text-content-tertiary w-40 shrink-0 font-mono">{{ v }}</span>
          <Typography :variant="v">The quick brown fox jumps over the lazy dog</Typography>
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-3">
        <Typography variant="heading-large" color="primary">Primary — content-primary</Typography>
        <Typography variant="heading-large" color="secondary">Secondary — content-secondary</Typography>
        <Typography variant="heading-large" color="tertiary">Tertiary — content-tertiary</Typography>
        <div class="bg-black p-3 rounded-lg inline-block">
          <Typography variant="heading-large" color="inverse">Inverse — content-inverse</Typography>
        </div>
        <Typography variant="heading-large" color="accent">Accent — accent</Typography>
        <Typography variant="heading-large" color="positive">Positive — positive</Typography>
        <Typography variant="heading-large" color="negative">Negative — negative</Typography>
      </div>
    `,
  }),
}

export const CustomTag: Story = {
  args: {
    variant: 'heading-large',
    as: 'span',
    color: 'primary',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: `<Typography v-bind="args">This heading renders as a &lt;span&gt;</Typography>`,
  }),
}

export const DisplayScales: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-4">
        <Typography variant="display-large">Display Large</Typography>
        <Typography variant="display-medium">Display Medium</Typography>
        <Typography variant="display-small">Display Small</Typography>
      </div>
    `,
  }),
}

export const BodyScales: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-3">
        <Typography variant="paragraph-large">Paragraph Large — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="paragraph-medium">Paragraph Medium — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="paragraph-small">Paragraph Small — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="paragraph-xsmall">Paragraph XSmall — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
    `,
  }),
}

export const LabelScales: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-3">
        <div><Typography variant="label-large">Label Large</Typography></div>
        <div><Typography variant="label-medium">Label Medium</Typography></div>
        <div><Typography variant="label-small">Label Small</Typography></div>
      </div>
    `,
  }),
}
