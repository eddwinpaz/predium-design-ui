<template>
  <div
    :class="[
      'relative flex items-center border-2 rounded-[8px] transition-colors',
      sizeClasses,
      {
        'border-[#e11900] bg-surface': error,
        'border-[#048848] bg-surface': positive && !error,
        'bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected': !error && !positive,
        'opacity-40 cursor-not-allowed': disabled,
      },
    ]"
  >
    <div v-if="$slots.startEnhancer" class="pl-scale300 flex items-center text-content-tertiary">
      <slot name="startEnhancer" />
    </div>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button
      v-if="clearable && modelValue"
      type="button"
      class="pr-1 pl-0 flex items-center justify-center text-content-tertiary hover:text-content-primary transition-colors"
      :disabled="disabled"
      @click="$emit('update:modelValue', '')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 8.586L5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586z" clip-rule="evenodd" />
      </svg>
    </button>
    <div v-if="$slots.endEnhancer" class="pr-scale300 flex items-center text-content-tertiary">
      <slot name="endEnhancer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    size?: 'compact' | 'default' | 'large'
    disabled?: boolean
    error?: boolean
    positive?: boolean
    clearable?: boolean
    type?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    size: 'default',
    disabled: false,
    error: false,
    positive: false,
    clearable: false,
    type: 'text',
  }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()

/*
 * Base Web Input exact sizing:
 * compact: height 36px, font 14px
 * default: height 48px, font 16px
 * large:   height 56px, font 16px
 */
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'compact':
      return 'h-[36px] text-[14px]'
    case 'large':
      return 'h-[56px] text-[16px]'
    default:
      return 'h-[48px] text-[16px]'
  }
})
</script>
