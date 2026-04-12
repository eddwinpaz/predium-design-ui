<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

withDefaults(
  defineProps<{
    open: boolean;
    size?: "sm" | "md" | "lg" | "xl";
    title?: string;
    closeable?: boolean;
  }>(),
  {
    size: "md",
    closeable: true,
  },
);

const emit = defineEmits<{
  close: [];
}>();

const sizeClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

function onClose() {
  emit("close");
}
</script>

<template>
  <TransitionRoot :show="open" as="template">
    <Dialog
      :open="open"
      @close="closeable ? onClose() : undefined"
      class="relative z-50"
    >
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="transition duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
      </TransitionChild>

      <!-- Panel container -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="transition duration-200 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="transition duration-150 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            :class="[
              'w-full rounded-xl bg-bg-primary shadow-xl',
              sizeClasses[size],
            ]"
          >
            <!-- Header -->
            <div class="flex items-center justify-between px-6 pt-6 pb-0">
              <DialogTitle
                v-if="title"
                class="text-lg font-semibold text-content-primary"
              >
                {{ title }}
              </DialogTitle>
              <button
                v-if="closeable"
                class="ml-auto p-1 rounded-md text-content-tertiary hover:text-content-primary hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Close"
                @click="onClose"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="px-6 py-4">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="px-6 pb-6 pt-0">
              <slot name="footer" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
