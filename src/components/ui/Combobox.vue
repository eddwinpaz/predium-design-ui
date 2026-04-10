<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

export interface ComboboxOptionItem {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    options: ComboboxOptionItem[]
    placeholder?: string
    disabled?: boolean
    size?: 'compact' | 'default' | 'large'
  }>(),
  {
    placeholder: 'Search...',
    disabled: false,
    size: 'default',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const query = ref('')

const filteredOptions = computed(() => {
  if (query.value === '') return props.options
  const q = query.value.toLowerCase()
  return props.options.filter((opt) => opt.label.toLowerCase().includes(q))
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'compact':
      return 'h-8'
    case 'large':
      return 'h-12'
    default:
      return 'h-10'
  }
})

function getDisplayValue(val: unknown): string {
  return props.options.find((o) => o.value === val)?.label ?? ''
}
</script>

<template>
  <Combobox
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :disabled="disabled"
  >
    <div class="relative">
      <div
        :class="[
          'flex items-center border-2 rounded-[8px] transition-colors',
          disabled ? 'opacity-40 bg-surface-input border-transparent cursor-not-allowed' : 'bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected',
          sizeClass,
        ]"
      >
        <ComboboxInput
          :placeholder="placeholder"
          :displayValue="getDisplayValue"
          class="w-full bg-transparent outline-none px-3 text-sm placeholder:text-content-tertiary text-content-primary"
          @change="query = ($event.target as HTMLInputElement).value"
        />
        <ComboboxButton class="px-2 text-content-tertiary hover:text-content-secondary">
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </ComboboxButton>
      </div>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ComboboxOptions
          class="absolute z-50 mt-1 w-full bg-bg-primary border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto"
        >
          <div
            v-if="filteredOptions.length === 0"
            class="px-3 py-2 text-sm text-content-tertiary"
          >
            No results found
          </div>
          <ComboboxOption
            v-for="opt in filteredOptions"
            :key="opt.value"
            :value="opt.value"
            v-slot="{ active, selected }"
          >
            <div
              :class="[
                'px-3 py-2 text-sm cursor-pointer flex items-center justify-between text-content-primary',
                active ? 'bg-bg-secondary' : '',
              ]"
            >
              {{ opt.label }}
              <svg
                v-if="selected"
                class="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </ComboboxOption>
        </ComboboxOptions>
      </Transition>
    </div>
  </Combobox>
</template>
