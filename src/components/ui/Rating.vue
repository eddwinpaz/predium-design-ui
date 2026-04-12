<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  modelValue?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  readOnly?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  max: 5,
  size: "md",
  readOnly: false,
  color: "#FFC043",
});

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const hoverValue = ref(0);

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "w-4 h-4";
    case "lg":
      return "w-7 h-7";
    default:
      return "w-5 h-5";
  }
});
</script>

<template>
  <div class="inline-flex items-center gap-0.5">
    <button
      v-for="i in max"
      :key="i"
      type="button"
      :class="[
        'transition-colors',
        readOnly
          ? 'cursor-default'
          : 'cursor-pointer hover:scale-110 transition-transform',
      ]"
      @click="!readOnly && emit('update:modelValue', i)"
      @mouseenter="!readOnly && (hoverValue = i)"
      @mouseleave="!readOnly && (hoverValue = 0)"
    >
      <svg
        :class="sizeClass"
        viewBox="0 0 24 24"
        :fill="(hoverValue || modelValue) >= i ? color : '#E2E2E2'"
        stroke="none"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    </button>
  </div>
</template>
