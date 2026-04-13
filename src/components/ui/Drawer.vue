<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const props = withDefaults(
  defineProps<{
    open: boolean;
    side?: "left" | "right";
    size?: "sm" | "md" | "lg";
    title?: string;
    persistent?: boolean;
  }>(),
  {
    side: "right",
    size: "md",
    title: "",
    persistent: false,
  },
);

const emit = defineEmits<{
  close: [];
}>();

const sizeClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};
</script>

<template>
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-[10001]" @close="!persistent && emit('close')">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="transition-opacity duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            :class="[
              'pointer-events-none fixed inset-y-0 flex',
              side === 'right' ? 'right-0' : 'left-0',
            ]"
          >
            <TransitionChild
              as="template"
              enter="transform transition duration-300 ease-out"
              :enter-from="
                side === 'right' ? 'translate-x-full' : '-translate-x-full'
              "
              enter-to="translate-x-0"
              leave="transform transition duration-200 ease-in"
              leave-from="translate-x-0"
              :leave-to="
                side === 'right' ? 'translate-x-full' : '-translate-x-full'
              "
            >
              <DialogPanel
                :class="[
                  'pointer-events-auto w-screen flex flex-col bg-bg-primary shadow-xl',
                  sizeClasses[size],
                ]"
              >
                <!-- Header -->
                <div
                  class="flex items-center justify-between px-4 py-3 border-b border-border"
                >
                  <h2 class="text-lg font-semibold text-content-primary">
                    {{ title }}
                  </h2>
                  <button
                    class="p-1 rounded-lg text-content-tertiary hover:text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer"
                    @click="emit('close')"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
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

                <!-- Body -->
                <div class="flex-1 overflow-y-auto p-4">
                  <slot />
                </div>

                <!-- Footer -->
                <div
                  v-if="$slots.footer"
                  class="border-t border-border px-4 py-3"
                >
                  <slot name="footer" />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
