<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
    size?: "compact" | "default";
  }>(),
  {
    siblingCount: 1,
    size: "default",
  },
);

const emit = defineEmits<{
  "update:currentPage": [value: number];
}>();

const pages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const siblings = props.siblingCount;

  const range = (start: number, end: number) => {
    const result: number[] = [];
    for (let i = start; i <= end; i++) result.push(i);
    return result;
  };

  const totalNumbers = siblings * 2 + 5; // siblings on each side + first + last + current + 2 ellipsis slots

  if (total <= totalNumbers) {
    return range(1, total);
  }

  const leftSiblingIndex = Math.max(current - siblings, 1);
  const rightSiblingIndex = Math.min(current + siblings, total);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblings;
    const leftRange = range(1, leftCount);
    return [...leftRange, "ellipsis-right", total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblings;
    const rightRange = range(total - rightCount + 1, total);
    return [1, "ellipsis-left", ...rightRange];
  }

  const middleRange = range(leftSiblingIndex, rightSiblingIndex);
  return [1, "ellipsis-left", ...middleRange, "ellipsis-right", total];
});

function goTo(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return;
  emit("update:currentPage", page);
}

const buttonSize = computed(() =>
  props.size === "compact" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm",
);
</script>

<template>
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
</template>
