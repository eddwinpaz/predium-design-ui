<template>
  <Listbox
    :model-value="modelValue"
    :disabled="disabled"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="relative">
      <ListboxButton
        :class="[
          'flex items-center justify-between w-full border-2 rounded-[8px] px-[14px] text-left transition-colors',
          sizeClasses,
          {
            'border-[#e11900] bg-surface': error,
            'bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected':
              !error && !disabled,
            'opacity-40 cursor-not-allowed bg-surface-input border-transparent':
              disabled,
          },
        ]"
      >
        <span
          :class="[
            selectedLabel ? 'text-content-primary' : 'text-content-tertiary',
            'truncate',
          ]"
        >
          {{ selectedLabel || placeholder }}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-content-tertiary ml-2 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </ListboxButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-50 mt-1 w-full bg-surface border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto focus:outline-none"
        >
          <ListboxOption
            v-for="opt in options"
            :key="opt.value"
            :value="opt.value"
            v-slot="{ active, selected }"
            as="template"
          >
            <li
              :class="[
                'flex items-center justify-between px-3 py-2 cursor-pointer text-sm text-content-primary',
                active ? 'bg-bg-secondary' : '',
                selected ? 'font-medium' : '',
              ]"
            >
              <span>{{ opt.label }}</span>
              <svg
                v-if="selected"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-content-primary flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

interface Option {
  label: string;
  value: string;
}

const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
    options: Option[];
    placeholder?: string;
    size?: "compact" | "default" | "large";
    disabled?: boolean;
    error?: boolean;
  }>(),
  {
    modelValue: null,
    placeholder: "Select...",
    size: "default",
    disabled: false,
    error: false,
  },
);

defineEmits<{
  "update:modelValue": [value: string];
}>();

const sizeClasses = computed(() => {
  switch (props.size) {
    case "compact":
      return "h-[36px] text-[14px]";
    case "large":
      return "h-[48px] text-[16px]";
    default:
      return "h-[40px] text-[14px]";
  }
});

const selectedLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue);
  return found ? found.label : "";
});
</script>
