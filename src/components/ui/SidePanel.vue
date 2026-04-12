<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    collapsed?: boolean;
    collapsible?: boolean;
    width?: number;
    bordered?: boolean;
  }>(),
  {
    title: "",
    collapsed: false,
    collapsible: true,
    width: 260,
    bordered: true,
  },
);

const emit = defineEmits<{
  "update:collapsed": [value: boolean];
  add: [];
}>();

const isCollapsed = ref(props.collapsed);

watch(
  () => props.collapsed,
  (val) => {
    isCollapsed.value = val;
  },
);

function toggle() {
  isCollapsed.value = !isCollapsed.value;
  emit("update:collapsed", isCollapsed.value);
}

const sidebarStyle = computed(() => ({
  width: isCollapsed.value ? "0px" : `${props.width}px`,
  minWidth: isCollapsed.value ? "0px" : `${props.width}px`,
}));
</script>

<template>
  <div class="flex h-full w-full overflow-hidden">
    <!-- Sidebar -->
    <div
      class="flex flex-col bg-surface overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0"
      :class="bordered ? 'border-r border-border' : ''"
      :style="sidebarStyle"
    >
      <!-- Sidebar header -->
      <div
        v-if="title || $slots.headerActions || collapsible"
        class="flex items-center justify-between h-[48px] px-[16px] flex-shrink-0"
      >
        <span class="text-[15px] font-semibold text-content-primary truncate">{{
          title
        }}</span>
        <div class="flex items-center gap-[4px]">
          <slot name="headerActions" />
          <!-- Add button -->
          <button
            v-if="$slots.headerActions === undefined && $slots.add"
            class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors"
            @click="$emit('add')"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <!-- Collapse button -->
          <button
            v-if="collapsible"
            class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors"
            @click="toggle"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Sidebar content -->
      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        <slot name="sidebar" />
      </div>
    </div>

    <!-- Expand button (visible when collapsed) -->
    <div
      v-if="isCollapsed && collapsible"
      class="flex-shrink-0 border-r border-border flex flex-col items-center pt-[12px]"
    >
      <button
        class="w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors"
        @click="toggle"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>

    <!-- Main content -->
    <div class="flex-1 min-w-0 overflow-auto">
      <slot />
    </div>
  </div>
</template>
