<script setup lang="ts">
export interface FilterListItem {
  label: string;
  value: string;
  count?: number;
}

defineProps<{
  title?: string;
  modelValue: string;
  items: FilterListItem[];
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div>
    <div
      v-if="title"
      class="text-[13px] font-semibold text-content-primary mb-[8px] px-[4px]"
    >
      {{ title }}
    </div>
    <div class="flex flex-col">
      <button
        v-for="item in items"
        :key="item.value"
        :class="[
          'relative flex items-center justify-between px-[12px] py-[10px] text-[14px] transition-colors text-left',
          modelValue === item.value
            ? 'text-[#276EF1] font-medium bg-surface-selected'
            : 'text-content-secondary hover:bg-surface-input',
        ]"
        @click="$emit('update:modelValue', item.value)"
      >
        <!-- Active left bar indicator -->
        <div
          v-if="modelValue === item.value"
          class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#276EF1]"
        />
        <span>{{ item.label }}</span>
        <span
          v-if="item.count != null"
          :class="[
            'text-[13px]',
            modelValue === item.value
              ? 'text-[#276EF1]'
              : 'text-content-tertiary',
          ]"
        >
          {{ item.count }}
        </span>
      </button>
    </div>
  </div>
</template>
