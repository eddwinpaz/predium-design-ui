<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    selected?: boolean;
    disabled?: boolean;
    size?: "sm" | "md";
  }>(),
  {
    selected: false,
    disabled: false,
    size: "md",
  },
);

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

function tagClasses(): string {
  const base =
    "inline-flex items-center rounded-full font-medium transition-colors duration-150";

  const sizeMap: Record<string, string> = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  const state = props.selected
    ? "bg-btn-primary text-btn-primary-text border border-btn-primary cursor-pointer"
    : "bg-surface text-content-primary border border-border hover:bg-surface-hover cursor-pointer";

  const parts = [base, sizeMap[props.size], state];

  if (props.disabled) {
    parts.push("opacity-40 cursor-not-allowed");
  }

  return parts.join(" ");
}

const classes = computed(() => tagClasses());

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit("click", event);
  }
}
</script>

<template>
  <button :class="classes" @click="handleClick">
    <slot />
  </button>
</template>
