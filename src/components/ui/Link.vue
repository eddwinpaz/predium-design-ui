<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  href?: string
  to?: string | Record<string, unknown>
  external?: boolean
  kind?: 'default' | 'underline' | 'subtle'
  size?: 'sm' | 'md'
}>(), {
  href: undefined,
  to: undefined,
  external: false,
  kind: 'default',
  size: 'md',
})

const linkClasses = computed(() => {
  const kindMap: Record<string, string> = {
    default: 'text-accent hover:text-accent/80 font-medium',
    underline: 'text-accent underline underline-offset-2 hover:text-accent/80',
    subtle: 'text-content-secondary hover:text-content-primary',
  }

  const sizeMap: Record<string, string> = {
    sm: 'text-xs',
    md: 'text-sm',
  }

  return [
    'inline-flex items-center transition-colors',
    kindMap[props.kind],
    sizeMap[props.size],
  ].join(' ')
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'a'"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="linkClasses"
  >
    <slot />
    <svg
      v-if="external"
      class="inline-block w-3 h-3 ml-0.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </component>
</template>
