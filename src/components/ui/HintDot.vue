<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: "accent" | "primary" | "positive" | "negative" | "warning";
    hidden?: boolean;
    horizontalOffset?: string;
    verticalOffset?: string;
  }>(),
  {
    color: "accent",
    hidden: false,
    horizontalOffset: "-14px",
    verticalOffset: "-4px",
  },
);

const dotColor = computed(() => {
  const map: Record<string, string> = {
    accent: "bg-accent",
    primary: "bg-content-primary",
    positive: "bg-positive",
    negative: "bg-negative",
    warning: "bg-warning",
  };
  return map[props.color];
});

const positionerStyle = computed(() => ({
  top: props.verticalOffset,
  right: props.horizontalOffset,
}));
</script>

<template>
  <div class="relative inline-block">
    <slot />
    <div
      v-if="!hidden"
      class="absolute w-[16px] h-[16px] flex items-center justify-center pointer-events-none"
      :style="positionerStyle"
    >
      <div :class="['w-[8px] h-[8px] rounded-full', dotColor]" />
    </div>
  </div>
</template>
