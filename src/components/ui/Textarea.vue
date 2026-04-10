<template>
  <textarea
    :class="[
      'w-full border-2 rounded-[8px] px-3 py-2.5 text-sm bg-bg-primary outline-none transition-colors duration-150',
      'placeholder:text-content-tertiary',
      error
        ? 'border-negative'
        : 'border-transparent bg-surface-input hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected',
      disabled ? 'opacity-40 cursor-not-allowed bg-bg-secondary' : '',
      resize === 'none'
        ? 'resize-none'
        : resize === 'vertical'
          ? 'resize-y'
          : 'resize',
    ]"
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    rows?: number
    disabled?: boolean
    error?: boolean
    resize?: 'none' | 'vertical' | 'both'
  }>(),
  {
    modelValue: '',
    placeholder: '',
    rows: 3,
    disabled: false,
    error: false,
    resize: 'vertical',
  },
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
