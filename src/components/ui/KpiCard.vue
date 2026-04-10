<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: string | number
    label: string
    trend?: string
    trendDirection?: 'up' | 'down' | 'neutral'
    accentColor?: 'positive' | 'negative' | 'warning' | 'accent' | 'neutral'
    dot?: boolean
  }>(),
  {
    trendDirection: 'neutral',
    accentColor: 'neutral',
    dot: false,
  }
)

const accentBarClass = computed(() => {
  const map: Record<string, string> = {
    positive: 'bg-positive',
    negative: 'bg-negative',
    warning: 'bg-warning',
    accent: 'bg-accent',
    neutral: 'bg-border',
  }
  return map[props.accentColor]
})

const dotColorClass = computed(() => {
  const map: Record<string, string> = {
    positive: 'bg-positive',
    negative: 'bg-negative',
    warning: 'bg-warning',
    accent: 'bg-accent',
    neutral: 'bg-content-tertiary',
  }
  return map[props.accentColor]
})

const trendColorClass = computed(() => {
  if (props.trendDirection === 'up') return 'text-positive'
  if (props.trendDirection === 'down') return 'text-negative'
  return 'text-content-tertiary'
})
</script>

<template>
  <div class="bg-bg-primary border border-border rounded-xl p-5 relative overflow-hidden">
    <div class="flex items-start justify-between">
      <div>
        <div class="text-3xl font-bold text-content-primary tracking-tight">{{ value }}</div>
        <div class="flex items-center gap-1.5 mt-1">
          <span v-if="dot" :class="['w-2 h-2 rounded-full', dotColorClass]" />
          <span class="text-sm text-content-secondary">{{ label }}</span>
        </div>
      </div>
      <div v-if="trend" :class="['text-sm font-medium flex items-center gap-0.5', trendColorClass]">
        <svg
          v-if="trendDirection === 'up'"
          class="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <svg
          v-if="trendDirection === 'down'"
          class="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
        {{ trend }}
      </div>
    </div>
    <div :class="['absolute bottom-0 left-0 right-0 h-[3px]', accentBarClass]" />
  </div>
</template>
