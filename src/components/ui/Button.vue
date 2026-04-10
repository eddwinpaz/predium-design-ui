<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  kind?: 'primary' | 'secondary' | 'tertiary' | 'minimal'
  size?: 'mini' | 'compact' | 'default' | 'large'
  disabled?: boolean
  loading?: boolean
  shape?: 'default' | 'pill' | 'circle'
}>(), {
  kind: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
  shape: 'default',
})

const slots = useSlots()

function buttonClasses(): string {
  const base = 'inline-flex items-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-offset-2'

  const kindMap: Record<string, string> = {
    primary: 'bg-black text-white hover:bg-[#333] active:bg-[#1a1a1a]',
    secondary: 'bg-transparent text-black border border-border hover:bg-bg-secondary',
    tertiary: 'bg-bg-secondary text-black hover:bg-bg-tertiary',
    minimal: 'bg-transparent text-black hover:bg-bg-secondary',
  }

  /*
   * Base Web exact padding/sizing:
   * mini:    height 30px, padding 8px 8px,   font 12px
   * compact: height 36px, padding 8px 12px,  font 14px
   * default: height 48px, padding 10px 12px, font 16px
   * large:   height 56px, padding 14px 16px, font 16px
   * border-radius: 8px for all
   */
  const sizeMap: Record<string, string> = {
    mini: 'h-[30px] px-[8px] py-[8px] text-[12px] gap-[4px]',
    compact: 'h-[36px] px-[12px] py-[8px] text-[14px] gap-[8px]',
    default: 'h-[48px] px-[12px] py-[10px] text-[16px] gap-[8px]',
    large: 'h-[56px] px-[16px] py-[14px] text-[16px] gap-[12px]',
  }

  const shapeMap: Record<string, string> = {
    default: 'rounded-[8px]',
    pill: 'rounded-pill',
    circle: 'rounded-pill w-[48px] h-[48px] p-0 justify-center',
  }

  const parts = [base, kindMap[props.kind], shapeMap[props.shape]]

  if (props.shape !== 'circle') {
    parts.push(sizeMap[props.size])
  }

  if (props.disabled) {
    parts.push('opacity-40 cursor-not-allowed pointer-events-none')
  }

  return parts.filter(Boolean).join(' ')
}

const classes = computed(() => buttonClasses())
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <template v-if="loading">
      <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </template>
    <template v-else>
      <slot name="startIcon" />
      <span :class="{ 'mx-1': slots.startIcon || slots.endIcon }">
        <slot />
      </span>
      <slot name="endIcon" />
    </template>
  </button>
</template>
