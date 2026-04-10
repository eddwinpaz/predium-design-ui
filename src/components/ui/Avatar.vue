<template>
  <div
    :class="[sizeClasses, 'rounded-full flex items-center justify-center font-semibold flex-shrink-0 select-none']"
    :style="{ backgroundColor: computedColor, color: '#fff' }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="name"
      class="w-full h-full rounded-full object-cover"
    />
    <span v-else :class="textSizeClass">{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
    src?: string
    color?: string
  }>(),
  {
    size: 'md',
  }
)

const palette = [
  '#276EF1',
  '#048848',
  '#7356BF',
  '#E11900',
  '#FFC043',
  '#0D9488',
  '#4F46E5',
  '#F97066',
]

const initials = computed(() => {
  const parts = props.name.trim().split(/\s+/)
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? ''
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
})

const bgColor = computed(() => {
  let hash = 0
  for (let i = 0; i < props.name.length; i++) {
    hash = props.name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return palette[Math.abs(hash) % palette.length]
})

const computedColor = computed(() => props.color ?? bgColor.value)

const sizeClasses = computed(() => {
  const map: Record<string, string> = {
    xs: 'w-6 h-6',
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }
  return map[props.size]
})

const textSizeClass = computed(() => {
  const map: Record<string, string> = {
    xs: 'text-[10px]',
    sm: 'text-[11px]',
    md: 'text-xs',
    lg: 'text-sm',
  }
  return map[props.size]
})
</script>
