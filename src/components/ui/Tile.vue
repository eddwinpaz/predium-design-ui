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
        ? 'border-[#000] bg-white shadow-sm'
        : 'border-[#e2e2e2] bg-white hover:border-[#000] hover:shadow-sm',
      disabled ? 'opacity-40 cursor-not-allowed hover:border-[#e2e2e2] hover:shadow-none' : '',
      align === 'center' ? 'items-center text-center' : 'items-start',
    ]"
    @click="!disabled && $emit('click')"
  >
    <!-- Selected indicator circle -->
    <div class="absolute top-[16px] right-[16px]">
      <div v-if="selected" class="w-[20px] h-[20px] rounded-full bg-[#000] flex items-center justify-center">
        <svg class="w-[12px] h-[12px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
      </div>
      <div v-else class="w-[20px] h-[20px] rounded-full border-2 border-[#e2e2e2] group-hover:border-[#999]" />
    </div>

    <!-- Content area with Base Web spacing: padding 24px -->
    <div :class="['p-[24px] pt-[20px] w-full', align === 'center' ? 'flex flex-col items-center' : '']">
      <!-- Icon slot -->
      <div v-if="$slots.icon" class="mb-[12px]">
        <slot name="icon" />
      </div>

      <!-- Title -->
      <div class="text-[16px] font-semibold text-[#000] leading-[24px]">
        <slot />
      </div>

      <!-- Description -->
      <div v-if="$slots.description" class="text-[14px] text-[#545454] mt-[4px] leading-[20px]">
        <slot name="description" />
      </div>
    </div>
  </button>
</template>
