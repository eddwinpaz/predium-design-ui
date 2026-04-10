<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    heading: string
    description: string
    buttonLabel?: string
    image?: string
    backgroundColor?: string
    color?: string
    layout?: 'horizontal' | 'vertical'
  }>(),
  {
    backgroundColor: '#276EF1',
    color: 'white',
    layout: 'horizontal',
  }
)

defineEmits<{
  action: []
}>()
</script>

<template>
  <!-- VERTICAL layout: image on top, content below on white bg -->
  <div v-if="layout === 'vertical'" class="rounded-[16px] overflow-hidden border border-border bg-surface">
    <!-- Image -->
    <div v-if="image" class="w-full h-[200px] overflow-hidden">
      <img :src="image" :alt="heading" class="w-full h-full object-cover" />
    </div>
    <!-- Content -->
    <div class="p-[24px]">
      <h3 class="text-[18px] font-bold text-content-primary leading-[24px]">{{ heading }}</h3>
      <p class="text-[14px] text-content-secondary mt-[6px] leading-[20px]">{{ description }}</p>
      <button
        v-if="buttonLabel"
        class="mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-btn-primary text-white hover:bg-btn-primary-hover transition-colors"
        @click="$emit('action')"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </div>

  <!-- HORIZONTAL layout: colored bg, optional image on right -->
  <div v-else class="rounded-[16px] overflow-hidden" :style="{ backgroundColor, color }">
    <div class="flex items-center min-h-[120px]">
      <!-- Content -->
      <div class="flex-1 p-[24px]">
        <h3 class="text-[18px] font-bold leading-[24px]">{{ heading }}</h3>
        <p class="text-[14px] opacity-85 mt-[4px] leading-[20px]">{{ description }}</p>
        <button
          v-if="buttonLabel"
          class="mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-surface/20 hover:bg-surface/30 transition-colors"
          @click="$emit('action')"
        >
          {{ buttonLabel }}
        </button>
      </div>
      <!-- Image -->
      <div v-if="image" class="flex-shrink-0 p-[16px]">
        <img :src="image" :alt="heading" class="w-[100px] h-[100px] rounded-[12px] object-cover" />
      </div>
    </div>
  </div>
</template>
