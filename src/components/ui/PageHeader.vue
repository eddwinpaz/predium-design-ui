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
    positive: 'bg-positive-light text-positive-text',
    warning: 'bg-warning-light text-warning-text',
    negative: 'bg-negative-light text-negative-text',
    accent: 'bg-accent-light text-accent-text',
    neutral: 'bg-surface-input text-content-secondary',
  }
  return map[props.statusColor] ?? map.neutral
})
</script>

<template>
  <div class="px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-surface">
    <!-- Breadcrumbs + Title row -->
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]">
      <div>
        <!-- Breadcrumbs: desktop shows all, mobile shows first + last -->
        <div v-if="breadcrumbs?.length" class="flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px]">
          <!-- Mobile: collapsed -->
          <div class="flex items-baseline flex-wrap gap-[4px] sm:hidden">
            <span
              class="text-content-secondary hover:text-content-primary cursor-pointer"
              @click="$emit('breadcrumbClick', 0)"
            >
              {{ breadcrumbs[0] }}
            </span>
            <template v-if="breadcrumbs.length > 2">
              <span class="text-content-tertiary">›</span>
              <span class="text-content-tertiary">...</span>
            </template>
            <span v-if="breadcrumbs.length > 1" class="text-content-tertiary">›</span>
            <span v-if="breadcrumbs.length > 1" class="text-content-primary font-medium break-words">
              {{ breadcrumbs[breadcrumbs.length - 1] }}
            </span>
          </div>
          <!-- Desktop: full -->
          <div class="hidden sm:flex items-center gap-[6px]">
            <template v-for="(crumb, i) in breadcrumbs" :key="i">
              <span v-if="i > 0" class="text-content-tertiary">›</span>
              <span
                v-if="i < breadcrumbs.length - 1"
                class="text-content-secondary hover:text-content-primary cursor-pointer"
                @click="$emit('breadcrumbClick', i)"
              >
                {{ crumb }}
              </span>
              <span v-else class="text-content-primary font-medium">{{ crumb }}</span>
            </template>
          </div>
        </div>

        <!-- Title + Status -->
        <div class="flex flex-wrap items-center gap-[8px] sm:gap-[12px]">
          <h1 class="text-[20px] sm:text-[24px] font-bold text-content-primary leading-[28px] sm:leading-[32px]">{{ title }}</h1>
          <span
            v-if="status"
            :class="['inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium', statusClasses]"
          >
            {{ status }}
          </span>
        </div>

        <!-- Subtitle -->
        <div v-if="subtitle" class="text-[13px] text-content-tertiary mt-[2px]">
          {{ subtitle }}
        </div>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length" class="flex flex-wrap items-center gap-[8px] sm:mt-[4px]">
        <template v-for="(action, i) in actions" :key="i">
          <!-- Dropdown button -->
          <div v-if="action.kind === 'dropdown'" class="relative">
            <button
              class="flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors"
              @click.stop="toggleDropdown(i)"
            >
              {{ action.label }}
              <svg class="w-[14px] h-[14px] text-content-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div
              v-if="openDropdown === i"
              class="absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-surface border border-border rounded-[12px] shadow-xl overflow-hidden"
            >
              <button
                v-for="item in action.items"
                :key="item"
                class="w-full text-left px-[16px] py-[10px] text-[14px] text-content-primary hover:bg-surface-input transition-colors"
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
                ? 'bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover'
                : 'text-content-primary hover:bg-surface-input',
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
