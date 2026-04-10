<script setup lang="ts">
/**
 * ScaffoldDetail - Full page layout for detail views (Shipment, Order, Carrier, etc.)
 * Combines: SidebarNav + NavHeader + PageHeader + Tabs + DetailSection + DataGrid
 *
 * Copy this component as a starting point for any detail view.
 */
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-white">
    <!-- Sidebar: hidden on mobile, visible on sm+ -->
    <div class="hidden sm:flex">
      <slot name="sidebar" />
    </div>

    <!-- Main area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Top nav header -->
      <slot name="navHeader" />

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Page header -->
        <slot name="pageHeader" />

        <!-- Tabs bar -->
        <div v-if="$slots.tabs" class="px-[12px] sm:px-[24px] border-b border-[#e2e2e2] bg-white sticky top-0 z-10">
          <slot name="tabs" />
        </div>

        <!-- Two-column layout: content + right panel -->
        <div class="flex flex-col lg:flex-row lg:min-h-full">
          <!-- Left: main content -->
          <div class="flex-1 min-w-0 p-[12px] sm:p-[16px] md:p-[24px]">
            <div class="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]">
              <slot name="content" />
            </div>
          </div>

          <!-- Right: side panel - stretches full height on desktop -->
          <div v-if="$slots.rightPanel" class="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-[#e2e2e2] p-[12px] sm:p-[16px] md:p-[24px]">
            <div class="lg:sticky lg:top-[24px]">
              <slot name="rightPanel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
