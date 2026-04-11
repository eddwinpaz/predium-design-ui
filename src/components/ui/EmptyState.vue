<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  actionLabel?: string
  secondaryActionLabel?: string
  icon?: 'search' | 'document' | 'inbox' | 'error' | 'custom'
}>()

defineEmits<{
  action: []
  secondaryAction: []
}>()

const icons: Record<string, string> = {
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  inbox: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
  error: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
}
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-[48px] sm:py-[64px] px-[24px]">
    <!-- Icon -->
    <div class="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-surface-input flex items-center justify-center mb-[20px] sm:mb-[24px]">
      <slot name="icon">
        <svg
          :class="'w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] text-content-tertiary'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="icons[icon || 'inbox']" />
        </svg>
      </slot>
    </div>

    <!-- Title -->
    <h3 class="text-[18px] sm:text-[20px] font-semibold text-content-primary leading-[26px]">
      {{ title }}
    </h3>

    <!-- Description -->
    <p v-if="description" class="text-[13px] sm:text-[14px] text-content-secondary mt-[8px] max-w-[400px] leading-[20px]">
      {{ description }}
    </p>

    <!-- Actions -->
    <div v-if="actionLabel || secondaryActionLabel" class="flex flex-col sm:flex-row items-center gap-[10px] mt-[20px] sm:mt-[24px]">
      <button
        v-if="actionLabel"
        class="px-[20px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:bg-btn-primary-hover transition-colors"
        @click="$emit('action')"
      >
        {{ actionLabel }}
      </button>
      <button
        v-if="secondaryActionLabel"
        class="px-[20px] py-[10px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors"
        @click="$emit('secondaryAction')"
      >
        {{ secondaryActionLabel }}
      </button>
    </div>
  </div>
</template>
