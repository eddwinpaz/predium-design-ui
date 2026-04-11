import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import HintDot from "./HintDot.vue";

const meta: Meta<typeof HintDot> = {
  title: "UI/HintDot",
  component: HintDot,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A **HintDot** is a subtle nudging indicator that points out something new. It is usually anchored to text, icons, or components that serve as entry points to another page.

## Usage

\`\`\`vue
<template>
  <HintDot>
    Promotions
  </HintDot>
</template>
\`\`\`

## With icons or components

\`\`\`vue
<template>
  <HintDot color="negative">
    <BellIcon class="w-5 h-5" />
  </HintDot>
</template>
\`\`\`

## Offset

Use \`horizontalOffset\` and \`verticalOffset\` to manually adjust the dot position when the default placement doesn't align well with your content.

\`\`\`vue
<HintDot horizontalOffset="-8px" verticalOffset="-2px">
  Custom offset
</HintDot>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["accent", "primary", "positive", "negative", "warning"],
    },
    hidden: { control: "boolean" },
    horizontalOffset: { control: "text" },
    verticalOffset: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof HintDot>;

/* ------------------------------------------------------------------ */
/*  Default                                                           */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  args: {
    color: "accent",
  },
  render: (args) => ({
    components: { HintDot },
    setup: () => ({ args }),
    template: `
      <div class="p-8">
        <HintDot v-bind="args">
          <span class="text-[16px]">Promotions</span>
        </HintDot>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Colors                                                            */
/* ------------------------------------------------------------------ */

export const Colors: Story = {
  name: "Colors",
  render: () => ({
    components: { HintDot },
    template: `
      <div class="flex flex-wrap gap-10 p-8 items-center">
        <HintDot color="accent">
          <span class="text-[16px]">Accent</span>
        </HintDot>
        <HintDot color="primary">
          <span class="text-[16px]">Primary</span>
        </HintDot>
        <HintDot color="positive">
          <span class="text-[16px]">Positive</span>
        </HintDot>
        <HintDot color="negative">
          <span class="text-[16px]">Negative</span>
        </HintDot>
        <HintDot color="warning">
          <span class="text-[16px]">Warning</span>
        </HintDot>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  With Icons                                                        */
/* ------------------------------------------------------------------ */

export const WithIcons: Story = {
  name: "With Icons",
  render: () => ({
    components: { HintDot },
    template: `
      <div class="flex gap-10 p-8 items-center">
        <HintDot color="accent" horizontalOffset="-6px" verticalOffset="-4px">
          <svg class="w-6 h-6 text-content-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </HintDot>
        <HintDot color="negative" horizontalOffset="-6px" verticalOffset="-4px">
          <svg class="w-6 h-6 text-content-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </HintDot>
        <HintDot color="positive" horizontalOffset="-6px" verticalOffset="-4px">
          <svg class="w-6 h-6 text-content-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </HintDot>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Custom Offset                                                     */
/* ------------------------------------------------------------------ */

export const Offset: Story = {
  name: "Offset",
  render: () => ({
    components: { HintDot },
    template: `
      <div class="p-8">
        <p class="text-sm text-content-secondary mb-6">Use <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">horizontalOffset</code> and <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">verticalOffset</code> to manually position the dot when the default placement doesn't align with your content.</p>
        <div class="flex gap-10 items-center">
          <HintDot horizontalOffset="-14px" verticalOffset="-4px">
            <span class="text-[16px]">Default offset</span>
          </HintDot>
          <HintDot horizontalOffset="2px" verticalOffset="2px">
            <span class="text-[16px]">Inset offset</span>
          </HintDot>
          <HintDot horizontalOffset="-20px" verticalOffset="-8px">
            <span class="text-[16px]">Far offset</span>
          </HintDot>
        </div>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Hidden                                                            */
/* ------------------------------------------------------------------ */

export const Hidden: Story = {
  name: "Hidden State",
  render: () => ({
    components: { HintDot },
    setup() {
      const isHidden = ref(false);
      return { isHidden };
    },
    template: `
      <div class="p-8">
        <p class="text-sm text-content-secondary mb-4">Toggle the <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">hidden</code> prop to show/hide the dot without removing the component.</p>
        <div class="flex items-center gap-6">
          <HintDot :hidden="isHidden" color="negative">
            <span class="text-[16px]">Notifications</span>
          </HintDot>
          <button
            class="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-bg-secondary transition-colors"
            @click="isHidden = !isHidden"
          >
            {{ isHidden ? 'Show dot' : 'Hide dot' }}
          </button>
        </div>
      </div>
    `,
  }),
};
