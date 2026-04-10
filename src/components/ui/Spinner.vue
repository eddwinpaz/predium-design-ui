<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'accent' | 'inverse'
}>(), {
  size: 'md',
  color: 'primary',
})

const sizeClass = computed(() => {
  const map: Record<string, string> = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }
  return map[props.size]
})

const strokeColor = computed(() => {
  const map: Record<string, string> = {
    primary: '#000000',
    accent: '#276ef1',
    inverse: '#ffffff',
  }
  return map[props.color]
})
</script>

<template>
  <svg :class="[sizeClass, 'animate-spin']" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" :stroke="strokeColor" stroke-width="3" />
    <path class="opacity-75" :fill="strokeColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
</template>
