<template>
  <div
    v-if="visible"
    :class="[
      'flex items-start gap-3 px-4 py-3 rounded-lg text-sm border-l-4',
      kindClasses,
    ]"
  >
    <!-- Icon -->
    <div class="flex-shrink-0 mt-0.5">
      <!-- Info icon -->
      <svg
        v-if="kind === 'info'"
        class="w-5 h-5 text-accent"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- Positive icon -->
      <svg
        v-else-if="kind === 'positive'"
        class="w-5 h-5 text-positive"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- Warning icon -->
      <svg
        v-else-if="kind === 'warning'"
        class="w-5 h-5 text-warning"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- Negative icon -->
      <svg
        v-else-if="kind === 'negative'"
        class="w-5 h-5 text-negative"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <p v-if="title" class="font-semibold mb-0.5">{{ title }}</p>
      <div><slot /></div>
    </div>

    <!-- Close button -->
    <button
      v-if="closeable"
      class="flex-shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors duration-150 cursor-pointer"
      @click="handleClose"
    >
      <svg
        class="w-4 h-4 text-content-secondary"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    kind?: "info" | "positive" | "warning" | "negative";
    closeable?: boolean;
    title?: string;
  }>(),
  {
    kind: "info",
    closeable: true,
    title: "",
  },
);

const emit = defineEmits<{
  close: [];
}>();

const visible = ref(true);

const kindClasses = computed(() => {
  switch (props.kind) {
    case "info":
      return "bg-accent-light border-l-accent text-content-primary";
    case "positive":
      return "bg-positive-light border-l-positive text-content-primary";
    case "warning":
      return "bg-warning-light border-l-warning text-content-primary";
    case "negative":
      return "bg-negative-light border-l-negative text-content-primary";
    default:
      return "bg-accent-light border-l-accent text-content-primary";
  }
});

function handleClose() {
  visible.value = false;
  emit("close");
}
</script>
