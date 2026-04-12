<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

withDefaults(
  defineProps<{
    items: BreadcrumbItem[];
    separator?: string;
  }>(),
  {
    separator: "/",
  },
);
</script>

<template>
  <nav class="flex items-center gap-1.5 text-sm">
    <template v-for="(item, i) in items" :key="i">
      <span v-if="i > 0" class="text-content-tertiary">{{ separator }}</span>
      <a
        v-if="item.to && i < items.length - 1"
        :href="item.to"
        class="text-accent hover:underline cursor-pointer"
      >
        {{ item.label }}
      </a>
      <span
        v-else
        :class="
          i === items.length - 1
            ? 'text-content-primary font-medium'
            : 'text-content-secondary'
        "
      >
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>
