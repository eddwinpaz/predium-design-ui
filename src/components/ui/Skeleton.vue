<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "text" | "circle" | "rect";
    width?: string;
    height?: string;
    rows?: number;
    animated?: boolean;
  }>(),
  {
    variant: "text",
    width: "100%",
    height: "16px",
    rows: 1,
    animated: true,
  },
);
</script>

<template>
  <div v-if="variant === 'text'" class="space-y-2">
    <div
      v-for="i in rows"
      :key="i"
      :class="['rounded bg-bg-secondary', animated ? 'animate-pulse' : '']"
      :style="{ width: i === rows ? '60%' : width, height }"
    />
  </div>
  <div
    v-else-if="variant === 'circle'"
    :class="['rounded-full bg-bg-secondary', animated ? 'animate-pulse' : '']"
    :style="{ width, height: width }"
  />
  <div
    v-else
    :class="['rounded-lg bg-bg-secondary', animated ? 'animate-pulse' : '']"
    :style="{ width, height }"
  />
</template>
