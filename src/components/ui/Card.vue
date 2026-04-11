<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    padding?: "none" | "sm" | "md" | "lg";
    bordered?: boolean;
    hoverable?: boolean;
    shadow?: boolean;
  }>(),
  {
    padding: "md",
    bordered: true,
    hoverable: false,
    shadow: false,
  },
);

/* Base Web Card padding: sm=scale300(12), md=scale600(24), lg=scale800(32) */
const paddingClasses = computed(() => {
  const map: Record<string, string> = {
    none: "p-0",
    sm: "p-scale300",
    md: "p-scale600",
    lg: "p-scale800",
  };
  return map[props.padding];
});

const cardClasses = computed(() => [
  "bg-bg-primary rounded-[12px] overflow-hidden",
  props.bordered ? "border-2 border-border" : "",
  props.hoverable
    ? "hover:shadow-md transition-shadow duration-200 cursor-pointer"
    : "",
  props.shadow ? "shadow-sm" : "",
]);
</script>

<template>
  <div :class="cardClasses">
    <div
      v-if="$slots.header"
      class="px-scale600 py-scale400 border-b border-border"
    >
      <slot name="header" />
    </div>
    <div :class="paddingClasses">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="px-scale600 py-scale300 border-t border-border bg-bg-secondary/50"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
