<script setup lang="ts">
import { computed } from 'vue'

export interface DetailField {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    title: string
    fields?: DetailField[]
    columns?: 2 | 3 | 4 | 5 | 6
    editable?: boolean
  }>(),
  {
    columns: 3,
    editable: false,
  }
)

defineEmits<{
  edit: []
}>()

const gridClass = computed(() => {
  const map: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }
  return map[props.columns] ?? 'grid-cols-3'
})
</script>

<template>
  <div>
    <!-- Header: OUTSIDE the card -->
    <div class="flex items-center justify-between mb-[12px]">
      <h3 class="text-[15px] font-semibold text-[#000]">{{ title }}</h3>
      <button
        v-if="editable"
        class="text-[14px] text-[#545454] font-medium hover:text-[#000] cursor-pointer"
        @click="$emit('edit')"
      >
        Edit
      </button>
      <slot name="action" />
    </div>

    <!-- Card: only the content -->
    <div class="border border-[#e2e2e2] rounded-[12px] bg-white">
      <!-- Fields grid -->
      <div v-if="fields?.length" :class="['grid gap-0 px-[24px] py-[20px]', gridClass]">
        <div
          v-for="(field, i) in fields"
          :key="i"
          class="py-[8px] pr-[16px]"
        >
          <div class="text-[11px] font-medium text-[#999] uppercase tracking-[0.5px] leading-[16px]">
            {{ field.label }}
          </div>
          <div class="text-[14px] text-[#000] leading-[20px] mt-[2px]">
            {{ field.value }}
          </div>
        </div>
      </div>

      <!-- Custom content slot (for tables, etc.) -->
      <div v-if="$slots.default" class="px-[24px] py-[20px]">
        <slot />
      </div>
    </div>
  </div>
</template>
