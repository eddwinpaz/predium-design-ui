<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: boolean
  label?: string
  description?: string
  disabled?: boolean
  size?: 'sm' | 'md'
}>(), {
  disabled: false,
  size: 'md',
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label
    :class="[
      'flex items-center gap-3',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="[
        'relative inline-flex shrink-0 rounded-full transition-colors duration-200',
        modelValue ? 'bg-content-primary' : 'bg-bg-tertiary',
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
        size === 'sm' ? 'h-5 w-9' : 'h-6 w-11',
      ]"
      @click="!disabled && $emit('update:modelValue', !modelValue)"
    >
      <span
        :class="[
          'inline-block rounded-full bg-surface shadow transform transition-transform duration-200',
          size === 'sm' ? 'h-4 w-4 mt-0.5 ml-0.5' : 'h-5 w-5 mt-0.5 ml-0.5',
          modelValue ? (size === 'sm' ? 'translate-x-4' : 'translate-x-5') : 'translate-x-0',
        ]"
      />
    </button>
    <div v-if="label">
      <span class="text-sm font-medium text-content-primary">{{ label }}</span>
      <p v-if="description" class="text-xs text-content-tertiary">{{ description }}</p>
    </div>
  </label>
</template>
