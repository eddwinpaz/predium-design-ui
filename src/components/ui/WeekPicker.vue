<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";

export interface DayOption {
  date: number;
  month?: string;
  price?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<{
    modelValue?: number;
    days: DayOption[];
    headers?: string[];
  }>(),
  {
    headers: () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

function isSelected(day: DayOption): boolean {
  return props.modelValue === day.date;
}

const animatingDate = ref<number | null>(null);

watch(
  () => props.modelValue,
  (val) => {
    if (val == null) return;
    animatingDate.value = val;
    setTimeout(() => {
      animatingDate.value = null;
    }, 300);
  },
);
</script>

<template>
  <div class="w-full border border-border rounded-[12px] overflow-hidden">
    <div
      class="grid"
      :style="{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }"
    >
      <!-- Day headers -->
      <div
        v-for="header in headers"
        :key="header"
        class="py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-content-secondary border-b border-border"
      >
        {{ header }}
      </div>

      <!-- Day cells -->
      <div
        v-for="(day, i) in days"
        :key="i"
        :class="[
          'relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors',
          i > 0 ? 'border-l border-border' : '',
          day.disabled
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-surface-input',
        ]"
        @click="!day.disabled && emit('update:modelValue', day.date)"
      >
        <!-- Date number or selected circle -->
        <div
          :class="[
            'flex items-center justify-center text-[15px] sm:text-[18px] font-semibold transition-all duration-300 ease-out',
            isSelected(day)
              ? 'w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-black text-white'
              : 'text-content-primary scale-100',
            animatingDate === day.date ? 'animate-[pop_0.3s_ease-out]' : '',
          ]"
        >
          {{ day.date }}
        </div>

        <!-- Month label (for first day of new month) -->
        <span
          v-if="day.month"
          class="text-[12px] text-content-tertiary mt-[2px]"
        >
          {{ day.month }}
        </span>

        <!-- Price -->
        <span
          v-if="day.price"
          class="text-[11px] sm:text-[13px] text-content-primary mt-[4px]"
        >
          {{ day.price }}
        </span>

        <!-- Label (e.g. "Delivery") -->
        <span
          v-if="day.label"
          class="text-[13px] text-content-primary font-medium mt-[4px]"
        >
          {{ day.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pop {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
