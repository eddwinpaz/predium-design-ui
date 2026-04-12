<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  kind?: "info" | "positive" | "warning" | "negative";
  title?: string;
  closeable?: boolean;
  action?: string;
}

const props = withDefaults(defineProps<Props>(), {
  kind: "info",
  title: undefined,
  closeable: true,
  action: undefined,
});

const emit = defineEmits<{
  close: [];
  action: [];
}>();

const visible = ref(true);

const kindClasses = computed(() => {
  switch (props.kind) {
    case "positive":
      return "bg-positive-light text-positive-text";
    case "warning":
      return "bg-warning-light text-warning-text";
    case "negative":
      return "bg-negative-light text-negative-text";
    default:
      return "bg-accent-light text-accent-text";
  }
});

const iconPath = computed(() => {
  switch (props.kind) {
    case "positive":
      // Checkmark circle
      return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
    case "warning":
      // Exclamation triangle
      return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
    case "negative":
      // X circle
      return "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    default:
      // Info circle
      return "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z";
  }
});
</script>

<template>
  <div
    v-if="visible"
    :class="['flex items-center gap-3 px-4 py-3 text-sm', kindClasses]"
  >
    <svg
      class="w-5 h-5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" />
    </svg>
    <div class="flex-1">
      <span v-if="title" class="font-semibold">{{ title }} </span>
      <span><slot /></span>
    </div>
    <button
      v-if="action"
      class="font-medium underline text-sm"
      @click="emit('action')"
    >
      {{ action }}
    </button>
    <button
      v-if="closeable"
      class="opacity-60 hover:opacity-100 ml-2"
      @click="
        visible = false;
        emit('close');
      "
    >
      &#x2715;
    </button>
  </div>
</template>
