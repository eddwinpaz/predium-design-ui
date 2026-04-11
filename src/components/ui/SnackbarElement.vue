<script setup lang="ts">
import { computed } from "vue";
import Spinner from "./Spinner.vue";

export interface SnackbarElementProps {
  message: string;
  actionText?: string;
  progress?: boolean;
}

const props = withDefaults(defineProps<SnackbarElementProps>(), {
  actionText: undefined,
  progress: false,
});

const emit = defineEmits<{
  actionClick: [];
}>();

const messageClasses = computed(() => {
  const base = "flex-1 text-[16px] leading-[24px] text-white line-clamp-3";
  if (props.progress) return `${base} px-[16px] py-[16px]`;
  if (props.actionText) return `${base} pl-[16px] pr-[8px] py-[16px]`;
  return `${base} px-[16px] py-[16px]`;
});
</script>

<template>
  <div
    class="inline-flex items-center bg-[rgb(40,40,40)] text-white rounded-[12px] min-w-[320px] max-w-[540px] w-full sm:w-auto shadow-xl"
  >
    <!-- Spinner (progress) -->
    <span v-if="progress" class="flex items-center pl-[16px] flex-shrink-0">
      <Spinner size="sm" color="inverse" />
    </span>

    <!-- Message -->
    <p :class="messageClasses">{{ message }}</p>

    <!-- Action button -->
    <div v-if="actionText" class="flex-shrink-0">
      <button
        class="h-[48px] px-[16px] text-[16px] font-medium text-white bg-transparent rounded-full cursor-pointer hover:bg-white/10 transition-colors"
        @click="emit('actionClick')"
      >
        {{ actionText }}
      </button>
    </div>
  </div>
</template>
