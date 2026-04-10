<script setup lang="ts">
export interface FilterListItem {
  label: string
  value: string
  count?: number
}

defineProps<{
  title?: string
  modelValue: string
  items: FilterListItem[]
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div>
    <div v-if="title" class="text-[13px] font-semibold text-[#000] mb-[8px] px-[4px]">
      {{ title }}
    </div>
    <div class="flex flex-col">
      <button
        v-for="item in items"
        :key="item.value"
        :class="[
          'relative flex items-center justify-between px-[12px] py-[10px] text-[14px] rounded-[8px] transition-colors text-left',
          modelValue === item.value
            ? 'text-[#276EF1] font-medium bg-[#F0F4FF]'
            : 'text-[#545454] hover:bg-[#f6f6f6]',
        ]"
        @click="$emit('update:modelValue', item.value)"
      >
        <!-- Active left bar indicator -->
        <div
          v-if="modelValue === item.value"
          class="absolute left-0 top-[8px] bottom-[8px] w-[3px] rounded-full bg-[#276EF1]"
        />
        <span>{{ item.label }}</span>
        <span
          v-if="item.count != null"
          :class="['text-[13px]', modelValue === item.value ? 'text-[#276EF1]' : 'text-[#999]']"
        >
          {{ item.count }}
        </span>
      </button>
    </div>
  </div>
</template>
