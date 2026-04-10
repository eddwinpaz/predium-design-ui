<template>
  <div
    v-if="orientation === 'horizontal'"
    :class="['border-t border-border', hSpacingClass]"
  />
  <div
    v-else
    :class="['border-l border-border self-stretch', vSpacingClass]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    spacing?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    orientation: 'horizontal',
    spacing: 'md',
  }
)

const hSpacingClass = computed(() => {
  const map: Record<string, string> = {
    none: 'my-0',
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
  }
  return map[props.spacing]
})

const vSpacingClass = computed(() => {
  const map: Record<string, string> = {
    none: 'mx-0',
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-6',
  }
  return map[props.spacing]
})
</script>
