<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick, computed } from "vue";

export interface SegmentOption {
  label: string;
  value: string;
  icon?: string;
}

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: SegmentOption[];
    size?: "compact" | "default" | "large";
    rounded?: boolean;
    variant?: "filled" | "outlined";
  }>(),
  {
    size: "default",
    rounded: true,
    variant: "filled",
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

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  nextTick(updateIndicator);
  if (trackRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });
    resizeObserver.observe(trackRef.value);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
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
  <!-- Filled variant -->
  <div
    v-if="variant === 'filled'"
    :class="[
      'segment-control flex flex-col sm:inline-flex sm:flex-row bg-surface-input p-[3px]',
      rounded ? 'rounded-[12px] sm:rounded-full' : 'rounded-[8px]',
    ]"
  >
    <!-- Desktop: horizontal with sliding indicator -->
    <div
      ref="trackRef"
      class="relative hidden sm:inline-flex gap-[3px]"
    >
      <div
        :class="[
          'absolute top-0 left-0 bg-btn-primary shadow-sm transition-all duration-300 ease-out pointer-events-none',
          rounded ? 'rounded-full' : 'rounded-[6px]',
        ]"
        :style="indicatorStyle"
      />
      <button
        v-for="opt in options"
        :key="opt.value"
        data-segment-btn
        :class="[
          'relative z-[1] font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer',
          rounded ? 'rounded-full' : 'rounded-[6px]',
          size === 'compact'
            ? 'px-[10px] py-[4px] text-[12px]'
            : size === 'large'
              ? 'px-[20px] py-[10px] text-[14px]'
              : 'px-[16px] py-[6px] text-[14px]',
          modelValue === opt.value
            ? 'text-btn-primary-text'
            : 'text-content-secondary hover:text-content-primary',
        ]"
        @click="$emit('update:modelValue', opt.value)"
      >
        <span class="inline-flex items-center gap-[6px]">
          <svg
            v-if="opt.icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path :d="opt.icon" />
          </svg>
          {{ opt.label }}
        </span>
      </button>
    </div>

    <!-- Mobile: vertical stacked -->
    <div class="flex flex-col gap-[3px] sm:hidden w-full">
      <button
        v-for="opt in options"
        :key="'m-' + opt.value"
        :class="[
          'w-full text-left font-medium transition-colors duration-200 cursor-pointer',
          rounded ? 'rounded-[10px]' : 'rounded-[6px]',
          size === 'compact'
            ? 'px-[10px] py-[6px] text-[12px]'
            : size === 'large'
              ? 'px-[16px] py-[10px] text-[14px]'
              : 'px-[14px] py-[8px] text-[14px]',
          modelValue === opt.value
            ? 'bg-btn-primary text-btn-primary-text shadow-sm'
            : 'text-content-secondary hover:text-content-primary',
        ]"
        @click="$emit('update:modelValue', opt.value)"
      >
        <span class="inline-flex items-center gap-[6px]">
          <svg
            v-if="opt.icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path :d="opt.icon" />
          </svg>
          {{ opt.label }}
        </span>
      </button>
    </div>
  </div>

  <!-- Outlined variant -->
  <div
    v-else
    class="inline-flex flex-wrap gap-[8px]"
  >
    <button
      v-for="opt in options"
      :key="opt.value"
      :class="[
        'inline-flex items-center gap-[6px] font-medium transition-all duration-150 whitespace-nowrap cursor-pointer border-2',
        rounded ? 'rounded-full' : 'rounded-[8px]',
        size === 'compact'
          ? 'px-[10px] py-[4px] text-[12px]'
          : size === 'large'
            ? 'px-[16px] py-[10px] text-[14px]'
            : 'px-[14px] py-[6px] text-[14px]',
        modelValue === opt.value
          ? 'border-content-primary bg-surface text-content-primary'
          : 'border-border bg-surface text-content-secondary hover:border-content-primary hover:text-content-primary',
      ]"
      @click="$emit('update:modelValue', opt.value)"
    >
      <svg
        v-if="opt.icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path :d="opt.icon" />
      </svg>
      {{ opt.label }}
    </button>
  </div>
</template>
