<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    showValue?: boolean
  }>(),
  {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: false,
  }
)

defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <div class="w-full">
    <div class="flex items-center gap-3">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :disabled="disabled"
        class="slider-input w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-secondary
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md
          disabled:opacity-40 disabled:cursor-not-allowed"
        @input="$emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
      />
      <span
        v-if="showValue"
        class="text-sm font-medium text-content-primary min-w-[3ch] text-right"
      >
        {{ modelValue }}
      </span>
    </div>
  </div>
</template>
