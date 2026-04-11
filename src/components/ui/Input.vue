<template>
  <div
    :class="[
      'relative flex items-center border-2 rounded-[8px] transition-colors',
      sizeClasses,
      {
        'border-[#e11900] bg-surface': error,
        'border-[#048848] bg-surface': positive && !error,
        'bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected':
          !error && !positive,
        'opacity-40 cursor-not-allowed': disabled,
      },
    ]"
  >
    <!-- Start enhancer: prop text or slot -->
    <div
      v-if="startText || $slots.startEnhancer"
      :class="[
        'flex items-center flex-shrink-0 text-content-tertiary',
        startText ? 'pl-[14px] pr-[10px]' : 'pl-scale300',
      ]"
    >
      <span
        v-if="startText"
        class="text-content-secondary font-medium whitespace-nowrap"
        >{{ startText }}</span
      >
      <slot v-else name="startEnhancer" />
    </div>

    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <button
      v-if="clearable && modelValue"
      type="button"
      class="mr-[10px] flex-shrink-0 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-content-primary text-content-inverse hover:opacity-80 transition-opacity"
      :disabled="disabled"
      @click="$emit('update:modelValue', '')"
    >
      <svg
        class="w-[10px] h-[10px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    <!-- End enhancer: prop text or slot -->
    <div
      v-if="endText || $slots.endEnhancer"
      :class="[
        'flex items-center flex-shrink-0 text-content-tertiary',
        endText ? 'pr-[14px] pl-[10px]' : 'pr-scale300',
      ]"
    >
      <span
        v-if="endText"
        class="text-content-secondary font-medium whitespace-nowrap"
        >{{ endText }}</span
      >
      <slot v-else name="endEnhancer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    size?: "compact" | "default" | "large";
    disabled?: boolean;
    error?: boolean;
    positive?: boolean;
    clearable?: boolean;
    type?: string;
    startText?: string;
    endText?: string;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    size: "default",
    disabled: false,
    error: false,
    positive: false,
    clearable: false,
    type: "text",
    startText: undefined,
    endText: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: string];
}>();

/*
 * Base Web Input exact sizing:
 * compact: height 36px, font 14px
 * default: height 48px, font 16px
 * large:   height 56px, font 16px
 */
const sizeClasses = computed(() => {
  switch (props.size) {
    case "compact":
      return "h-[36px] text-[14px]";
    case "large":
      return "h-[56px] text-[16px]";
    default:
      return "h-[48px] text-[16px]";
  }
});
</script>
