<script setup lang="ts">
import { ref, useSlots } from "vue";

const props = withDefaults(
  defineProps<{
    brand?: string;
    brandSuffix?: string;
    subtitle?: string;
    showMenuButton?: boolean;
  }>(),
  {
    brand: "Predium",
    brandSuffix: "Exchange",
    subtitle: "",
    showMenuButton: false,
  },
);

const emit = defineEmits<{
  menuClick: [];
}>();

const slots = useSlots();
const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <div class="relative z-[9999]">
    <header
      class="relative z-[9999] flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-border bg-surface"
    >
      <!-- Left: Hamburger (mobile) + Brand -->
      <div class="flex items-center gap-[8px]">
        <button
          v-if="showMenuButton || slots['mobile-menu']"
          class="sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-primary hover:bg-surface-input transition-colors"
          @click="showMenuButton ? $emit('menuClick') : toggleMobileMenu()"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="flex items-center gap-1">
          <span
            class="text-[15px] font-bold text-content-primary tracking-tight"
            >{{ brand }}</span
          >
          <span
            v-if="brandSuffix"
            class="text-[15px] font-normal text-content-primary"
            >{{ brandSuffix }}</span
          >
          <div
            v-if="subtitle"
            class="hidden sm:block ml-2 pl-2 border-l border-border"
          >
            <span class="text-xs text-content-secondary italic">{{
              subtitle
            }}</span>
          </div>
        </div>
      </div>

      <!-- Center -->
      <div v-if="slots.center" class="absolute left-1/2 -translate-x-1/2 flex items-center">
        <slot name="center" />
      </div>

      <!-- Right: composable actions -->
      <div class="flex items-center gap-[4px]">
        <slot name="actions" />
      </div>
    </header>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen && slots['mobile-menu']"
        class="sm:hidden border-b border-border bg-surface"
      >
        <slot name="mobile-menu" />
      </div>
    </Transition>
  </div>
</template>
