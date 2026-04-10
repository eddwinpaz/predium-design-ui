<script setup lang="ts">
import { computed } from 'vue'

type Variant =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'heading-xlarge'
  | 'heading-large'
  | 'heading-medium'
  | 'heading-small'
  | 'heading-xsmall'
  | 'label-large'
  | 'label-medium'
  | 'label-small'
  | 'paragraph-large'
  | 'paragraph-medium'
  | 'paragraph-small'
  | 'paragraph-xsmall'

type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverse'
  | 'accent'
  | 'positive'
  | 'negative'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    as?: string
    color?: Color
  }>(),
  {
    variant: 'paragraph-medium',
    color: 'primary',
  }
)

const variantMap: Record<Variant, { classes: string; tag: string }> = {
  'display-large': { classes: 'text-4xl font-bold tracking-tight', tag: 'h1' },
  'display-medium': { classes: 'text-3xl font-bold tracking-tight', tag: 'h1' },
  'display-small': { classes: 'text-2xl font-bold', tag: 'h1' },
  'heading-xlarge': { classes: 'text-xl font-bold', tag: 'h2' },
  'heading-large': { classes: 'text-lg font-semibold', tag: 'h2' },
  'heading-medium': { classes: 'text-base font-semibold', tag: 'h3' },
  'heading-small': { classes: 'text-sm font-semibold', tag: 'h4' },
  'heading-xsmall': {
    classes: 'text-xs font-semibold uppercase tracking-wider',
    tag: 'h5',
  },
  'label-large': { classes: 'text-base font-medium', tag: 'span' },
  'label-medium': { classes: 'text-sm font-medium', tag: 'span' },
  'label-small': { classes: 'text-xs font-medium', tag: 'span' },
  'paragraph-large': { classes: 'text-base', tag: 'p' },
  'paragraph-medium': { classes: 'text-sm', tag: 'p' },
  'paragraph-small': { classes: 'text-xs', tag: 'p' },
  'paragraph-xsmall': { classes: 'text-[11px]', tag: 'p' },
}

const colorMap: Record<Color, string> = {
  primary: 'text-content-primary',
  secondary: 'text-content-secondary',
  tertiary: 'text-content-tertiary',
  inverse: 'text-content-inverse',
  accent: 'text-accent',
  positive: 'text-positive',
  negative: 'text-negative',
}

const computedTag = computed(() => props.as ?? variantMap[props.variant].tag)
const variantClasses = computed(() => variantMap[props.variant].classes)
const colorClasses = computed(() => colorMap[props.color])
</script>

<template>
  <component :is="computedTag" :class="[variantClasses, colorClasses]">
    <slot />
  </component>
</template>
