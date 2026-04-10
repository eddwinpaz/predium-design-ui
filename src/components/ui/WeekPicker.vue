<script setup lang="ts">
import { ref, computed } from 'vue'

export interface DayOption {
  date: number
  month?: string
  price?: string
  label?: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: number
    days: DayOption[]
    headers?: string[]
  }>(),
  {
    headers: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function isSelected(day: DayOption): boolean {
  return props.modelValue === day.date
}
</script>

<template>
  <div class="w-full border border-[#e2e2e2] rounded-[12px] overflow-hidden">
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }">
      <!-- Day headers -->
      <div
        v-for="header in headers"
        :key="header"
        class="py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-[#545454] border-b border-[#e2e2e2]"
      >
        {{ header }}
      </div>

      <!-- Day cells -->
      <div
        v-for="(day, i) in days"
        :key="i"
        :class="[
          'relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors',
          i > 0 ? 'border-l border-[#e2e2e2]' : '',
          day.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#f6f6f6]',
        ]"
        @click="!day.disabled && emit('update:modelValue', day.date)"
      >
        <!-- Date number or selected circle -->
        <div
          :class="[
            'flex items-center justify-center text-[15px] sm:text-[18px] font-semibold',
            isSelected(day)
              ? 'w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#7356BF] text-white'
              : 'text-[#000]',
          ]"
        >
          {{ day.date }}
        </div>

        <!-- Month label (for first day of new month) -->
        <span v-if="day.month" class="text-[12px] text-[#999] mt-[2px]">
          {{ day.month }}
        </span>

        <!-- Price -->
        <span v-if="day.price" class="text-[11px] sm:text-[13px] text-[#000] mt-[4px]">
          {{ day.price }}
        </span>

        <!-- Label (e.g. "Delivery") -->
        <span v-if="day.label" class="text-[13px] text-[#7356BF] font-medium mt-[4px]">
          {{ day.label }}
        </span>
      </div>
    </div>
  </div>
</template>
