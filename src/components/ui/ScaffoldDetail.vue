<script setup lang="ts">
import { ref } from "vue";

/**
 * ScaffoldDetail - Full page layout for detail views
 *
 * On mobile: sidebar is a slide-over overlay, toggled via navHeader menuClick
 * On desktop: sidebar is always visible
 */

const mobileSidebarOpen = ref(false);

function openMobileSidebar() {
  mobileSidebarOpen.value = true;
}

function closeMobileSidebar() {
  mobileSidebarOpen.value = false;
}

defineExpose({ openMobileSidebar, closeMobileSidebar });
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-surface">
    <!-- Desktop sidebar -->
    <div class="hidden lg:flex">
      <slot name="sidebar" />
    </div>

    <!-- Mobile sidebar overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="mobileSidebarOpen"
        class="lg:hidden fixed inset-y-0 left-0 z-[10001] flex [&_nav]:!w-[240px]"
      >
        <slot name="sidebar" />
      </div>
    </Transition>
    <!-- Mobile sidebar backdrop -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileSidebarOpen"
        class="lg:hidden fixed inset-0 z-[10000] bg-black/40"
        @click="closeMobileSidebar"
      />
    </Transition>

    <!-- Main area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Top nav header -->
      <slot name="navHeader" :openSidebar="openMobileSidebar" />

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Page header -->
        <slot name="pageHeader" />

        <!-- Tabs bar -->
        <div v-if="$slots.tabs" class="bg-surface sticky top-0 z-10">
          <div class="px-[12px] sm:px-[16px] md:px-[24px]">
            <slot name="tabs" />
          </div>
        </div>

        <!-- Two-column layout -->
        <div class="flex flex-col lg:flex-row lg:min-h-full">
          <div class="flex-1 min-w-0 p-[12px] sm:p-[16px] md:p-[24px]">
            <div class="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]">
              <slot name="content" />
            </div>
          </div>

          <div
            v-if="$slots.rightPanel"
            class="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-border p-[12px] sm:p-[16px] md:p-[24px]"
          >
            <div class="lg:sticky lg:top-[24px]">
              <slot name="rightPanel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
