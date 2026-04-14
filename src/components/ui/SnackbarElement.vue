<script setup lang="ts">
import { computed } from "vue";
import Spinner from "./Spinner.vue";

export interface SnackbarElementProps {
  message: string;
  kind?: "default" | "success" | "error";
  actionText?: string;
  progress?: boolean;
}

const props = withDefaults(defineProps<SnackbarElementProps>(), {
  kind: "default",
  actionText: undefined,
  progress: false,
});

const emit = defineEmits<{
  actionClick: [];
  close: [];
}>();

const bgClass = computed(() => {
  switch (props.kind) {
    case "success":
      return "bg-[#048848]";
    case "error":
      return "bg-[#6B1A1A]";
    default:
      return "bg-[rgb(40,40,40)]";
  }
});
</script>

<template>
  <div
    :class="[
      'inline-flex items-center text-white rounded-[12px] min-w-[320px] max-w-[540px] w-full sm:w-auto shadow-xl',
      bgClass,
    ]"
  >
    <!-- Spinner (progress) -->
    <span v-if="progress" class="flex items-center pl-[16px] flex-shrink-0">
      <Spinner size="sm" color="inverse" />
    </span>

    <!-- Check icon (success) -->
    <span
      v-else-if="kind === 'success'"
      class="flex items-center pl-[16px] flex-shrink-0"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>

    <!-- Error icon -->
    <span
      v-else-if="kind === 'error'"
      class="flex items-center pl-[16px] flex-shrink-0"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    </span>

    <!-- Message -->
    <p class="flex-1 text-[14px] leading-[20px] text-white px-[12px] py-[14px]">
      {{ message }}
    </p>

    <!-- Action button -->
    <button
      v-if="actionText"
      class="h-[48px] px-[16px] text-[14px] font-medium text-white bg-transparent rounded-full cursor-pointer hover:bg-white/10 transition-colors"
      @click="emit('actionClick')"
    >
      {{ actionText }}
    </button>

    <!-- Close button -->
    <button
      class="flex items-center justify-center w-[36px] h-[36px] mr-[8px] rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
      @click="emit('close')"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>
