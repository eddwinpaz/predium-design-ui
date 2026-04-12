<script setup lang="ts">
import { computed, ref } from "vue";

export interface MenuItemType {
  label?: string;
  icon?: string;
  danger?: boolean;
  disabled?: boolean;
  divider?: boolean;
}

const props = withDefaults(
  defineProps<{
    items: MenuItemType[];
    align?: "left" | "right";
  }>(),
  { align: "left" },
);

const emit = defineEmits<{
  select: [item: MenuItemType];
}>();

const open = ref(false);

const alignClass = computed(() =>
  props.align === "right" ? "right-0" : "left-0",
);

function handleClickOutside(e: MouseEvent) {
  open.value = false;
}

function toggle() {
  open.value = !open.value;
  if (open.value) {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside, { once: true });
    }, 0);
  }
}

function selectItem(item: MenuItemType) {
  if (item.disabled) return;
  emit("select", item);
  open.value = false;
}
</script>

<template>
  <div class="relative inline-block text-left">
    <div @click.stop="toggle">
      <slot name="trigger">
        <button
          class="px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg"
        >
          Menu
        </button>
      </slot>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        :class="[
          'absolute z-[9999] mt-1 w-56 bg-surface border border-border rounded-xl shadow-lg py-1 focus:outline-none',
          alignClass,
        ]"
        @click.stop
      >
        <template v-for="(item, i) in items" :key="i">
          <div v-if="item.divider" class="border-t border-border my-1" />
          <button
            v-else
            :class="[
              'w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors',
              item.danger
                ? 'text-[#e11900] hover:bg-[#fef2f2]'
                : 'text-content-primary hover:bg-surface-input',
              item.disabled
                ? 'opacity-40 cursor-not-allowed'
                : 'cursor-pointer',
            ]"
            @click="selectItem(item)"
          >
            {{ item.label }}
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>
