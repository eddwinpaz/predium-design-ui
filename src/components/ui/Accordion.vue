<script setup lang="ts">
import { ref, watch } from 'vue'

interface AccordionItem {
  title: string
  content: string
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<{
  items: AccordionItem[]
  multiple?: boolean
}>(), {
  multiple: false,
})

const openItems = ref<Set<number>>(new Set())

// Initialize default open items
watch(
  () => props.items,
  (items) => {
    items.forEach((item, index) => {
      if (item.defaultOpen) {
        openItems.value.add(index)
      }
    })
  },
  { immediate: true }
)

function toggle(index: number) {
  const newSet = new Set(openItems.value)
  if (newSet.has(index)) {
    newSet.delete(index)
  } else {
    if (!props.multiple) {
      newSet.clear()
    }
    newSet.add(index)
  }
  openItems.value = newSet
}

function isOpen(index: number): boolean {
  return openItems.value.has(index)
}
</script>

<template>
  <div class="w-full border-t border-border">
    <div v-for="(item, index) in items" :key="index">
      <button
        type="button"
        class="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium text-content-primary hover:bg-bg-secondary transition-colors border-b border-border"
        :aria-expanded="isOpen(index)"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="[
            'w-4 h-4 text-content-secondary transform transition-transform duration-200',
            isOpen(index) ? 'rotate-180' : '',
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        :class="[
          'overflow-hidden transition-all duration-200 border-b border-border',
          isOpen(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ]"
      >
        <div class="px-4 py-3 text-sm text-content-secondary">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>
