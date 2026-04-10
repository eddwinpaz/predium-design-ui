<script setup lang="ts">
export interface SegmentOption {
  label: string
  value: string
}

withDefaults(
  defineProps<{
    modelValue: string
    options: SegmentOption[]
    size?: 'sm' | 'md'
  }>(),
  {
    size: 'md',
  }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div
    :class="[
      'inline-flex rounded-full bg-[#f0f0f0] p-[3px]',
      size === 'sm' ? 'gap-[2px]' : 'gap-[3px]',
    ]"
  >
    <button
      v-for="opt in options"
      :key="opt.value"
      :class="[
        'rounded-full font-medium transition-all duration-200 whitespace-nowrap',
        size === 'sm' ? 'px-[12px] py-[4px] text-[12px]' : 'px-[16px] py-[6px] text-[14px]',
        modelValue === opt.value
          ? 'bg-white text-[#000] shadow-sm'
          : 'text-[#545454] hover:text-[#000]',
      ]"
      @click="$emit('update:modelValue', opt.value)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>
