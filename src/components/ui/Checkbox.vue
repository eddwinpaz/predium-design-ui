<template>
  <label
    :class="[
      'flex gap-3 cursor-pointer group',
      disabled ? 'opacity-40 cursor-not-allowed' : '',
    ]"
  >
    <div class="flex items-start pt-0.5">
      <div
        :class="[
          'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150',
          modelValue
            ? 'bg-black border-black'
            : 'border-border group-hover:border-border-hover',
          disabled ? '' : 'cursor-pointer',
        ]"
        @click.prevent="!disabled && $emit('update:modelValue', !modelValue)"
      >
        <svg
          v-if="modelValue"
          class="w-3 h-3 text-white"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M2 6l3 3 5-5" />
        </svg>
      </div>
    </div>
    <div>
      <span class="text-sm font-medium text-content-primary">{{ label }}</span>
      <p v-if="description" class="text-xs text-content-tertiary mt-0.5">
        {{ description }}
      </p>
    </div>
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: boolean
    label: string
    description?: string
    disabled?: boolean
  }>(),
  {
    description: '',
    disabled: false,
  },
)

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
