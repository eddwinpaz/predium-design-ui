<script setup lang="ts">
import { ref, computed } from 'vue'

export interface PageHeaderAction {
  label: string
  kind?: 'primary' | 'secondary' | 'dropdown'
  items?: string[]
}

const props = withDefaults(
  defineProps<{
    breadcrumbs?: string[]
    title: string
    subtitle?: string
    status?: string
    statusColor?: 'positive' | 'warning' | 'negative' | 'accent' | 'neutral'
    actions?: PageHeaderAction[]
  }>(),
  {
    statusColor: 'positive',
  }
)

defineEmits<{
  breadcrumbClick: [index: number]
  actionClick: [action: PageHeaderAction]
  dropdownSelect: [action: PageHeaderAction, item: string]
}>()

const openDropdown = ref<number | null>(null)

function toggleDropdown(i: number) {
  openDropdown.value = openDropdown.value === i ? null : i
}

const statusClasses = computed(() => {
  const map: Record<string, string> = {
    positive: 'bg-[#e6f4ea] text-[#1e7d34]',
    warning: 'bg-[#fef3c7] text-[#92400e]',
    negative: 'bg-[#fef2f2] text-[#991b1b]',
    accent: 'bg-[#eaf0fd] text-[#1e40af]',
    neutral: 'bg-[#f6f6f6] text-[#545454]',
  }
  return map[props.statusColor] ?? map.neutral
})
</script>

<template>
  <div class="px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-white">
    <!-- Breadcrumbs + Title row -->
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]">
      <div>
        <!-- Breadcrumbs -->
        <div v-if="breadcrumbs?.length" class="flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px] overflow-x-auto whitespace-nowrap">
          <template v-for="(crumb, i) in breadcrumbs" :key="i">
            <span v-if="i > 0" class="text-[#999]">›</span>
            <span
              v-if="i < breadcrumbs.length - 1"
              class="text-[#545454] hover:text-[#000] cursor-pointer"
              @click="$emit('breadcrumbClick', i)"
            >
              {{ crumb }}
            </span>
            <span v-else class="text-[#000] font-medium">{{ crumb }}</span>
          </template>
        </div>

        <!-- Title + Status -->
        <div class="flex flex-wrap items-center gap-[8px] sm:gap-[12px]">
          <h1 class="text-[20px] sm:text-[24px] font-bold text-[#000] leading-[28px] sm:leading-[32px]">{{ title }}</h1>
          <span
            v-if="status"
            :class="['inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium', statusClasses]"
          >
            {{ status }}
          </span>
        </div>

        <!-- Subtitle -->
        <div v-if="subtitle" class="text-[13px] text-[#999] mt-[2px]">
          {{ subtitle }}
        </div>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length" class="flex flex-wrap items-center gap-[8px] sm:mt-[4px]">
        <template v-for="(action, i) in actions" :key="i">
          <!-- Dropdown button -->
          <div v-if="action.kind === 'dropdown'" class="relative">
            <button
              class="flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-[#000] hover:bg-[#f6f6f6] rounded-[8px] transition-colors"
              @click.stop="toggleDropdown(i)"
            >
              {{ action.label }}
              <svg class="w-[14px] h-[14px] text-[#545454]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div
              v-if="openDropdown === i"
              class="absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-white border border-[#e2e2e2] rounded-[12px] shadow-xl overflow-hidden"
            >
              <button
                v-for="item in action.items"
                :key="item"
                class="w-full text-left px-[16px] py-[10px] text-[14px] text-[#000] hover:bg-[#f6f6f6] transition-colors"
                @click="openDropdown = null; $emit('dropdownSelect', action, item)"
              >
                {{ item }}
              </button>
            </div>
          </div>

          <!-- Regular button -->
          <button
            v-else
            :class="[
              'px-[12px] py-[8px] text-[14px] font-medium rounded-[8px] transition-colors',
              action.kind === 'primary'
                ? 'bg-[#000] text-white hover:bg-[#333]'
                : 'text-[#000] hover:bg-[#f6f6f6]',
            ]"
            @click="$emit('actionClick', action)"
          >
            {{ action.label }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
