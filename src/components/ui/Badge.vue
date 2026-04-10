<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'neutral' | 'positive' | 'warning' | 'negative' | 'accent' | 'purple'
  size?: 'sm' | 'md'
  dot?: boolean
  closeable?: boolean
}>(), {
  variant: 'neutral',
  size: 'md',
  dot: false,
  closeable: false,
})

const emit = defineEmits<{
  close: []
}>()

function badgeClasses(): string {
  const base = 'inline-flex items-center gap-1.5 rounded-full font-medium'

  const variantMap: Record<string, string> = {
    neutral: 'bg-bg-secondary text-content-primary',
    positive: 'bg-positive-light text-positive-text',
    warning: 'bg-warning-light text-warning-text',
    negative: 'bg-negative-light text-negative-text',
    accent: 'bg-accent-light text-accent-text',
    purple: 'bg-purple-light text-purple',
  }

  const sizeMap: Record<string, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  }

  return [base, variantMap[props.variant], sizeMap[props.size]].join(' ')
}

function dotClasses(): string {
  const base = 'w-1.5 h-1.5 rounded-full'

  const dotColorMap: Record<string, string> = {
    neutral: 'bg-content-secondary',
    positive: 'bg-positive',
    warning: 'bg-warning',
    negative: 'bg-negative',
    accent: 'bg-accent',
    purple: 'bg-purple-600',
  }

  return [base, dotColorMap[props.variant]].join(' ')
}

const classes = computed(() => badgeClasses())
const dotClass = computed(() => dotClasses())
</script>

<template>
  <span :class="classes">
    <span v-if="dot" :class="dotClass" />
    <slot />
    <button
      v-if="closeable"
      class="ml-0.5 inline-flex items-center justify-center rounded-full hover:bg-black/10 w-3.5 h-3.5 cursor-pointer"
      @click.stop="emit('close')"
    >
      <svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </span>
</template>
