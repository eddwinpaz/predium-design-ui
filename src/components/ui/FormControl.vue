<template>
  <div class="mb-4">
    <label
      v-if="label"
      class="block text-sm font-medium text-content-primary mb-1.5"
    >
      {{ label }}<span v-if="required" class="text-negative ml-0.5">*</span>
    </label>
    <slot />
    <p v-if="error" class="mt-1 text-xs text-negative">{{ error }}</p>
    <p v-else-if="caption" class="mt-1 text-xs text-content-tertiary">
      {{ caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    caption?: string;
    error?: string;
    required?: boolean;
  }>(),
  {
    label: "",
    caption: "",
    error: "",
    required: false,
  },
);
</script>
