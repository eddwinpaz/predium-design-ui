import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import SnackbarElement from "./SnackbarElement.vue";
import SnackbarProvider from "./SnackbarProvider.vue";
import { useSnackbar, type SnackbarPlacement } from "./useSnackbar";

/* ------------------------------------------------------------------ */
/*  SnackbarElement (visual only)                                     */
/* ------------------------------------------------------------------ */

const elementMeta: Meta<typeof SnackbarElement> = {
  title: "UI/Snackbar",
  component: SnackbarElement,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A **Snackbar** is a brief message that appears temporarily to give users feedback after an action.
They are ephemeral and auto-dismiss after a few seconds.

## Architecture

The Snackbar system has three parts:

| Part | Purpose |
|------|---------|
| \`SnackbarProvider\` | Mount once in your app root. Renders snackbars and manages the queue. |
| \`useSnackbar()\` | Composable to enqueue/dequeue snackbars from any component. |
| \`SnackbarElement\` | The visual element. You typically don't use this directly. |

## Quick Start

**1. Add the provider to your layout (once):**

\`\`\`vue
<template>
  <SnackbarProvider placement="top">
    <router-view />
  </SnackbarProvider>
</template>
\`\`\`

**2. Enqueue snackbars from any component:**

\`\`\`vue
<script setup>
import { useSnackbar } from '@/components/ui/useSnackbar'

const { enqueue } = useSnackbar()

function save() {
  // ... save logic
  enqueue({ message: 'Changes saved successfully' })
}

function deleteItem() {
  enqueue({
    message: 'Item deleted',
    actionText: 'Undo',
    duration: 'long',
    onAction: () => { /* undo logic */ }
  })
}
</script>
\`\`\`

## Duration options

| Value | Duration |
|-------|----------|
| \`'short'\` | 1.5 seconds |
| \`'medium'\` | 3 seconds (default) |
| \`'long'\` | 5 seconds |
| \`'infinite'\` | Stays until manually dismissed via \`dequeue()\` |

## Placement options

Set on the \`SnackbarProvider\`: \`top\`, \`topLeft\`, \`topRight\`, \`bottom\`, \`bottomLeft\`, \`bottomRight\`.
        `,
      },
    },
  },
  argTypes: {
    message: { control: "text" },
    actionText: { control: "text" },
    progress: { control: "boolean" },
  },
};

export default elementMeta;
type Story = StoryObj<typeof SnackbarElement>;

/* ------------------------------------------------------------------ */
/*  Line Lengths                                                      */
/* ------------------------------------------------------------------ */

export const LineLengths: Story = {
  name: "Line Lengths",
  render: () => ({
    components: { SnackbarElement },
    template: `
      <div class="flex flex-col gap-4 items-start p-6">
        <p class="text-sm text-content-secondary mb-2">A snackbar will render at most three lines before truncating. Adjust duration based on line count so users can read the full text.</p>
        <SnackbarElement message="Your changes have been saved." />
        <SnackbarElement message="The address was added to your saved places. You can view all saved places from your profile." />
        <SnackbarElement message="We were unable to process your request at this time. Please verify your information and try again, or contact support if the issue persists." />
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  With Action Button                                                */
/* ------------------------------------------------------------------ */

export const ActionButton: Story = {
  name: "Action Button",
  render: () => ({
    components: { SnackbarElement },
    template: `
      <div class="flex flex-col gap-4 items-start p-6">
        <p class="text-sm text-content-secondary mb-2">Snackbars can offer a single action: cancel, undo, retry, or navigate. Avoid using the button to dismiss — it will time out on its own.</p>
        <SnackbarElement message="Downloading your file" actionText="Cancel" :progress="true" />
        <SnackbarElement message="The address was removed from your saved places" actionText="Undo" />
        <SnackbarElement message="The address was added to your saved places" actionText="See list" />
        <SnackbarElement message="Your address wasn't added" actionText="Try again" />
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Infinite Duration (with progress spinner)                         */
/* ------------------------------------------------------------------ */

export const InfiniteDuration: Story = {
  name: "Infinite Duration",
  render: () => ({
    components: { SnackbarProvider, SnackbarElement },
    setup() {
      const showElement = ref(true);
      return { showElement };
    },
    template: `
      <div class="p-6">
        <p class="text-sm text-content-secondary mb-4">Use <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">duration: 'infinite'</code> when you need to wait for a task to complete. Combine with <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">progress: true</code> to show a spinner.</p>
        <div class="flex flex-col gap-4 items-start">
          <SnackbarElement message="Uploading document..." :progress="true" />
          <SnackbarElement message="Processing payment..." :progress="true" actionText="Cancel" />
        </div>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Placement (interactive)                                           */
/* ------------------------------------------------------------------ */

export const Placement: Story = {
  name: "Placement",
  render: () => ({
    components: { SnackbarProvider },
    setup() {
      const placement = ref<SnackbarPlacement>("top");
      const snackbar = ref<ReturnType<typeof useSnackbar> | null>(null);
      const placements: SnackbarPlacement[] = [
        "top",
        "topLeft",
        "topRight",
        "bottom",
        "bottomLeft",
        "bottomRight",
      ];

      return { placement, snackbar, placements };
    },
    template: `
      <div class="p-6">
        <p class="text-sm text-content-secondary mb-4">Snackbars can be positioned in various places on the page. Set <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">placement</code> on the <code class="text-xs bg-bg-secondary px-1.5 py-0.5 rounded">SnackbarProvider</code>. Placement should be consistent throughout the application.</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="p in placements"
            :key="p"
            class="px-3 py-2 text-sm rounded-lg border transition-colors"
            :class="placement === p ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'border-border hover:bg-bg-secondary'"
            @click="placement = p"
          >
            {{ p }}
          </button>
        </div>
        <SnackbarProvider :placement="placement" :key="placement">
          <PlacementInner />
        </SnackbarProvider>
      </div>
    `,
  }),
};

/* ------------------------------------------------------------------ */
/*  Full Interactive Demo                                             */
/* ------------------------------------------------------------------ */

const PlacementInner = {
  setup() {
    const { enqueue } = useSnackbar();
    return { enqueue };
  },
  template: `
    <button
      class="mt-4 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      @click="enqueue({ message: 'This is a snackbar message', duration: 'medium' })"
    >
      Enqueue snackbar
    </button>
  `,
};

const QueueDemoInner = {
  setup() {
    const { enqueue, dequeue } = useSnackbar();
    return { enqueue, dequeue };
  },
  template: `
    <div class="flex flex-wrap gap-2 mt-4">
      <button
        class="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        @click="enqueue({ message: 'Changes saved successfully', duration: 'medium' })"
      >
        Success message
      </button>
      <button
        class="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        @click="enqueue({ message: 'Item deleted', actionText: 'Undo', duration: 'long', onAction: () => enqueue({ message: 'Item restored' }) })"
      >
        With undo action
      </button>
      <button
        class="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        @click="enqueue({ message: 'Uploading file...', progress: true, duration: 'infinite' })"
      >
        Infinite + spinner
      </button>
      <button
        class="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-bg-secondary transition-colors"
        @click="dequeue()"
      >
        Dequeue
      </button>
    </div>
  `,
};

export const QueueDemo: Story = {
  name: "Queue Demo",
  render: () => ({
    components: { SnackbarProvider, QueueDemoInner },
    template: `
      <div class="p-6">
        <p class="text-sm text-content-secondary mb-2">Snackbars queue automatically. Click multiple buttons rapidly — each message waits for the previous one to finish before appearing.</p>
        <SnackbarProvider placement="top">
          <QueueDemoInner />
        </SnackbarProvider>
      </div>
    `,
  }),
};
