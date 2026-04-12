<script setup lang="ts">
import { ref, watch } from "vue";

interface AccordionItem {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const props = withDefaults(
  defineProps<{
    items: AccordionItem[];
    multiple?: boolean;
  }>(),
  {
    multiple: false,
  },
);

const openItems = ref<Set<number>>(new Set());

watch(
  () => props.items,
  (items) => {
    items.forEach((item, index) => {
      if (item.defaultOpen) {
        openItems.value.add(index);
      }
    });
  },
  { immediate: true },
);

function toggle(index: number) {
  const newSet = new Set(openItems.value);
  if (newSet.has(index)) {
    newSet.delete(index);
  } else {
    if (!props.multiple) {
      newSet.clear();
    }
    newSet.add(index);
  }
  openItems.value = newSet;
}

function isOpen(index: number): boolean {
  return openItems.value.has(index);
}
</script>

<template>
  <div class="w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-border"
    >
      <button
        type="button"
        class="flex items-center justify-between w-full px-[14px] py-[14px] text-left text-[14px] font-medium text-content-primary hover:bg-surface-hover transition-colors"
        :aria-expanded="isOpen(index)"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="[
            'w-[16px] h-[16px] text-content-secondary transform transition-transform duration-200 flex-shrink-0',
            isOpen(index) ? 'rotate-180' : '',
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        :class="[
          'overflow-hidden transition-all duration-200',
          isOpen(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ]"
      >
        <div
          class="px-[14px] pb-[14px] text-[14px] text-content-secondary leading-[22px]"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>
