<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: 'light' | 'dark'
    size?: 'sm' | 'md'
  }>(),
  {
    size: 'md',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: 'light' | 'dark']
}>()

const isDark = computed(() => props.modelValue === 'dark')

function toggle() {
  emit('update:modelValue', isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isDark"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :class="[
      'relative inline-flex shrink-0 rounded-full transition-colors duration-300 border-2 cursor-pointer',
      isDark
        ? 'bg-[#f0f0f0] border-[#f0f0f0]'
        : 'bg-[#1a1a1a] border-[#1a1a1a]',
      size === 'sm' ? 'h-[26px] w-[50px]' : 'h-[30px] w-[56px]',
    ]"
    @click="toggle"
  >
    <!-- Knob with icon -->
    <span
      :class="[
        'inline-flex items-center justify-center rounded-full shadow transition-all duration-300',
        isDark
          ? 'bg-[#1a1a1a] translate-x-[24px]'
          : 'bg-white translate-x-0',
        size === 'sm' ? 'h-[18px] w-[18px] mt-[2px] ml-[2px]' : 'h-[22px] w-[22px] mt-[2px] ml-[2px]',
        isDark && size === 'sm' ? 'translate-x-[24px]' : '',
        isDark && size === 'md' ? 'translate-x-[26px]' : '',
      ]"
    >
      <!-- Sun icon (light mode) -->
      <svg
        v-if="!isDark"
        :class="size === 'sm' ? 'w-[11px] h-[11px]' : 'w-[13px] h-[13px]'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1a1a"
        stroke-width="2.5"
        stroke-linecap="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <!-- Moon icon (dark mode) -->
      <svg
        v-else
        :class="size === 'sm' ? 'w-[11px] h-[11px]' : 'w-[13px] h-[13px]'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f0f0f0"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </span>
  </button>
</template>
