<script setup lang="ts">
export interface ButtonGroupOption {
  label: string
  value: string
  disabled?: boolean
}

withDefaults(
  defineProps<{
    modelValue: string
    options: ButtonGroupOption[]
    size?: 'compact' | 'default'
  }>(),
  {
    size: 'default',
  }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="inline-flex rounded-lg border border-border overflow-hidden">
    <button
      v-for="(opt, i) in options"
      :key="opt.value"
      :class="[
        'px-4 text-sm font-medium transition-colors',
        size === 'compact' ? 'py-1.5' : 'py-2',
        modelValue === opt.value
          ? 'bg-black text-white'
          : 'bg-bg-primary text-content-primary hover:bg-bg-secondary',
        i > 0 ? 'border-l border-border' : '',
        opt.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      ]"
      :disabled="opt.disabled"
      @click="!opt.disabled && $emit('update:modelValue', opt.value)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>
