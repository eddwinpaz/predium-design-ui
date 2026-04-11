<script setup lang="ts">
withDefaults(
  defineProps<{
    selected?: boolean
    disabled?: boolean
    align?: 'top' | 'center'
  }>(),
  {
    selected: false,
    disabled: false,
    align: 'center',
  },
)

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'relative flex flex-col w-full text-left rounded-[12px] transition-all duration-150 cursor-pointer group',
      'border-2',
      selected
        ? 'border-border-selected bg-surface shadow-sm'
        : 'border-border bg-surface hover:border-border-selected hover:shadow-sm',
      disabled ? 'opacity-40 cursor-not-allowed hover:border-border hover:shadow-none' : '',
      align === 'center' ? 'items-center text-center' : 'items-start',
    ]"
    @click="!disabled && $emit('click')"
  >
    <!-- Selected indicator circle -->
    <div class="absolute top-[10px] sm:top-[16px] right-[10px] sm:right-[16px]">
      <div v-if="selected" class="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full bg-btn-primary flex items-center justify-center">
        <svg class="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-btn-primary-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
      </div>
      <div v-else class="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full border-2 border-border group-hover:border-border-hover" />
    </div>

    <!-- Content area -->
    <div :class="['p-[14px] sm:p-[20px] md:p-[24px] w-full', align === 'center' ? 'flex flex-col items-center' : '']">
      <!-- Icon slot -->
      <div v-if="$slots.icon" class="mb-[12px]">
        <slot name="icon" />
      </div>

      <!-- Title -->
      <div class="text-[14px] sm:text-[16px] font-semibold text-content-primary leading-[20px] sm:leading-[24px] pr-[20px]">
        <slot />
      </div>

      <!-- Description -->
      <div v-if="$slots.description" class="text-[12px] sm:text-[14px] text-content-secondary mt-[4px] leading-[18px] sm:leading-[20px]">
        <slot name="description" />
      </div>
    </div>
  </button>
</template>
