<script setup lang="ts">
export interface ListItem {
  label: string
  description?: string
  endContent?: string
}

withDefaults(defineProps<{
  items: ListItem[]
  hoverable?: boolean
  divided?: boolean
}>(), {
  hoverable: true,
  divided: true,
})
</script>

<template>
  <ul class="w-full">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="[
        'px-4 py-3 flex items-center justify-between',
        divided && i < items.length - 1 ? 'border-b border-border' : '',
        hoverable ? 'hover:bg-bg-secondary transition-colors cursor-pointer' : '',
      ]"
    >
      <slot name="item" :item="item" :index="i">
        <div>
          <div class="text-sm font-medium text-content-primary">{{ item.label }}</div>
          <div v-if="item.description" class="text-xs text-content-tertiary mt-0.5">{{ item.description }}</div>
        </div>
        <span v-if="item.endContent" class="text-sm text-content-secondary">{{ item.endContent }}</span>
      </slot>
    </li>
  </ul>
</template>
