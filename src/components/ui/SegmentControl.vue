<script setup lang="ts">
import { ref, watch, onMounted, nextTick, computed } from "vue";

export interface SegmentOption {
  label: string;
  value: string;
}

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: SegmentOption[];
    size?: "sm" | "md";
  }>(),
  {
    size: "md",
  },
);

defineEmits<{
  "update:modelValue": [value: string];
}>();

const trackRef = ref<HTMLElement | null>(null);
const indicatorStyle = ref<Record<string, string>>({});

const activeIndex = computed(() =>
  props.options.findIndex((o) => o.value === props.modelValue),
);

function updateIndicator() {
  if (!trackRef.value) return;
  const buttons =
    trackRef.value.querySelectorAll<HTMLButtonElement>("[data-segment-btn]");
  const idx = activeIndex.value;
  if (idx < 0 || !buttons[idx]) {
    indicatorStyle.value = { opacity: "0" };
    return;
  }
  const btn = buttons[idx];
  indicatorStyle.value = {
    width: `${btn.offsetWidth}px`,
    height: `${btn.offsetHeight}px`,
    transform: `translateX(${btn.offsetLeft}px)`,
    opacity: "1",
  };
}

onMounted(() => {
  nextTick(updateIndicator);
});

watch(
  () => props.modelValue,
  () => {
    nextTick(updateIndicator);
  },
);

watch(
  () => props.options,
  () => {
    nextTick(updateIndicator);
  },
  { deep: true },
);
</script>

<template>
  <div class="inline-flex rounded-full bg-surface-input p-[3px]">
    <div
      ref="trackRef"
      :class="[
        'relative inline-flex',
        size === 'sm' ? 'gap-[2px]' : 'gap-[3px]',
      ]"
    >
      <!-- Sliding indicator -->
      <div
        class="absolute top-0 left-0 rounded-full bg-btn-primary shadow-sm transition-all duration-300 ease-out pointer-events-none"
        :style="indicatorStyle"
      />

      <!-- Buttons -->
      <button
        v-for="opt in options"
        :key="opt.value"
        data-segment-btn
        :class="[
          'relative z-[1] rounded-full font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer',
          size === 'sm'
            ? 'px-[12px] py-[4px] text-[12px]'
            : 'px-[16px] py-[6px] text-[14px]',
          modelValue === opt.value
            ? 'text-btn-primary-text'
            : 'text-content-secondary hover:text-content-primary',
        ]"
        @click="$emit('update:modelValue', opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>
