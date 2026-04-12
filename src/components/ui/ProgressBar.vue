<template>
  <div class="w-full">
    <div
      :class="[
        'w-full rounded-full bg-bg-tertiary overflow-hidden',
        heightClass,
      ]"
    >
      <div
        :class="[
          'h-full rounded-full transition-all duration-500 ease-out',
          barColorClass,
          animated ? 'animate-pulse' : '',
        ]"
        :style="{ width: clampedValue + '%' }"
      />
    </div>
    <span
      v-if="showLabel"
      class="text-xs text-content-secondary mt-1 inline-block"
    >
      {{ clampedValue }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    value: number;
    color?: "primary" | "positive" | "warning" | "negative" | "accent";
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    animated?: boolean;
  }>(),
  {
    color: "primary",
    size: "md",
    showLabel: false,
    animated: false,
  },
);

const clampedValue = computed(() => Math.max(0, Math.min(100, props.value)));

const heightClass = computed(() => {
  const map: Record<string, string> = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };
  return map[props.size];
});

const barColorClass = computed(() => {
  const map: Record<string, string> = {
    primary: "bg-content-primary",
    positive: "bg-positive",
    warning: "bg-warning",
    negative: "bg-negative",
    accent: "bg-accent",
  };
  return map[props.color];
});
</script>
