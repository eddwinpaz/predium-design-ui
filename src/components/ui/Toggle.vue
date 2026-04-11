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
        'relative inline-flex shrink-0 rounded-full transition-colors duration-200 border-2',
        modelValue
          ? 'bg-content-primary border-content-primary'
          : 'bg-bg-tertiary border-content-tertiary',
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
        size === 'sm' ? 'h-[22px] w-[40px]' : 'h-[26px] w-[48px]',
      ]"
      @click="!disabled && $emit('update:modelValue', !modelValue)"
    >
      <span
        :class="[
          'inline-block rounded-full shadow-sm transition-all duration-200',
          modelValue ? 'bg-btn-primary-text' : 'bg-content-secondary',
          size === 'sm' ? 'h-[14px] w-[14px] mt-[2px] ml-[2px]' : 'h-[18px] w-[18px] mt-[2px] ml-[2px]',
          modelValue ? (size === 'sm' ? 'translate-x-[18px]' : 'translate-x-[22px]') : 'translate-x-0',
        ]"
      />
    </button>
    <div v-if="label">
      <span class="text-sm font-medium text-content-primary">{{ label }}</span>
      <p v-if="description" class="text-xs text-content-tertiary">{{ description }}</p>
    </div>
  </label>
</template>
