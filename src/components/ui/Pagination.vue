<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    currentPage: number;
    totalPages: number;
    totalItems?: number;
    pageSize?: number;
    pageSizes?: number[];
    siblingCount?: number;
    size?: "compact" | "default";
  }>(),
  {
    totalItems: 0,
    pageSize: 20,
    pageSizes: () => [10, 25, 50, 100],
    siblingCount: 1,
    size: "default",
  },
);

const emit = defineEmits<{
  "update:currentPage": [value: number];
  "update:pageSize": [value: number];
}>();

const pageSizeOpen = ref(false);

const pages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const siblings = props.siblingCount;

  const range = (start: number, end: number) => {
    const result: number[] = [];
    for (let i = start; i <= end; i++) result.push(i);
    return result;
  };

  const totalNumbers = siblings * 2 + 5;

  if (total <= totalNumbers) {
    return range(1, total);
  }

  const leftSiblingIndex = Math.max(current - siblings, 1);
  const rightSiblingIndex = Math.min(current + siblings, total);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblings;
    return [...range(1, leftCount), "ellipsis-right", total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblings;
    return [1, "ellipsis-left", ...range(total - rightCount + 1, total)];
  }

  return [
    1,
    "ellipsis-left",
    ...range(leftSiblingIndex, rightSiblingIndex),
    "ellipsis-right",
    total,
  ];
});

const showingFrom = computed(() =>
  props.totalItems === 0 ? 0 : (props.currentPage - 1) * props.pageSize + 1,
);
const showingTo = computed(() =>
  Math.min(props.currentPage * props.pageSize, props.totalItems),
);

function goTo(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage)
    return;
  emit("update:currentPage", page);
}

function onPageSizeChange(size: number) {
  pageSizeOpen.value = false;
  emit("update:pageSize", size);
  emit("update:currentPage", 1);
}

const buttonSize = computed(() =>
  props.size === "compact" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm",
);
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-3 py-3">
    <!-- Left: Page size selector -->
    <div class="flex items-center gap-2">
      <span class="text-[13px] text-content-tertiary whitespace-nowrap"
        >Rows per page</span
      >
      <div class="relative">
        <button
          class="flex items-center gap-1 px-[10px] py-[5px] text-[13px] font-medium text-content-primary border border-border rounded-[8px] hover:bg-surface-input transition-colors min-w-[56px] justify-between"
          @click="pageSizeOpen = !pageSizeOpen"
        >
          {{ pageSize }}
          <svg
            class="w-3 h-3 text-content-tertiary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div
          v-if="pageSizeOpen"
          class="absolute bottom-full left-0 mb-1 z-[100] w-[72px] rounded-[8px] border border-border bg-surface shadow-lg py-[4px]"
        >
          <button
            v-for="size in pageSizes"
            :key="size"
            class="w-full text-left px-[12px] py-[6px] text-[13px] transition-colors"
            :class="
              size === pageSize
                ? 'text-content-primary font-medium bg-surface-input'
                : 'text-content-secondary hover:bg-surface-input'
            "
            @click="onPageSizeChange(size)"
          >
            {{ size }}
          </button>
        </div>
      </div>
    </div>

    <!-- Center: Info -->
    <span
      v-if="totalItems > 0"
      class="text-[13px] text-content-tertiary hidden sm:block"
    >
      <span class="font-medium text-content-secondary">{{ showingFrom }}</span>
      –
      <span class="font-medium text-content-secondary">{{ showingTo }}</span>
      of
      <span class="font-medium text-content-secondary">{{ totalItems }}</span>
    </span>

    <!-- Right: Page navigation -->
    <nav
      class="flex items-center gap-1"
      role="navigation"
      aria-label="Pagination"
    >
      <!-- Previous -->
      <button
        type="button"
        :class="[
          buttonSize,
          'flex items-center justify-center rounded-lg transition-colors',
          currentPage <= 1
            ? 'text-content-tertiary cursor-not-allowed'
            : 'text-content-primary hover:bg-bg-secondary cursor-pointer',
        ]"
        :disabled="currentPage <= 1"
        @click="goTo(currentPage - 1)"
      >
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <!-- Pages -->
      <template v-for="(page, idx) in pages" :key="idx">
        <span
          v-if="typeof page === 'string'"
          :class="[
            buttonSize,
            'flex items-center justify-center text-content-tertiary',
          ]"
        >
          &hellip;
        </span>
        <button
          v-else
          type="button"
          :class="[
            buttonSize,
            'flex items-center justify-center rounded-lg transition-colors cursor-pointer',
            page === currentPage
              ? 'bg-black text-white'
              : 'text-content-primary hover:bg-bg-secondary',
          ]"
          @click="goTo(page)"
        >
          {{ page }}
        </button>
      </template>

      <!-- Next -->
      <button
        type="button"
        :class="[
          buttonSize,
          'flex items-center justify-center rounded-lg transition-colors',
          currentPage >= totalPages
            ? 'text-content-tertiary cursor-not-allowed'
            : 'text-content-primary hover:bg-bg-secondary cursor-pointer',
        ]"
        :disabled="currentPage >= totalPages"
        @click="goTo(currentPage + 1)"
      >
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  </div>

  <!-- Backdrop to close page size dropdown -->
  <div
    v-if="pageSizeOpen"
    class="fixed inset-0 z-[99]"
    @click="pageSizeOpen = false"
  />
</template>
