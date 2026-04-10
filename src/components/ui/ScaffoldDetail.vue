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
    <!-- Sidebar -->
    <slot name="sidebar" />

    <!-- Main area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Top nav header -->
      <slot name="navHeader" />

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Page header (breadcrumbs, title, status, actions) -->
        <slot name="pageHeader" />

        <!-- Tabs bar -->
        <div v-if="$slots.tabs" class="px-[16px] sm:px-[24px] border-b border-[#e2e2e2] bg-white sticky top-0 z-10">
          <slot name="tabs" />
        </div>

        <!-- Two-column layout: content + right panel -->
        <div class="flex flex-col lg:flex-row">
          <!-- Left: main content -->
          <div class="flex-1 min-w-0 p-[16px] sm:p-[24px]">
            <div class="flex flex-col gap-[24px] sm:gap-[32px]">
              <slot name="content" />
            </div>
          </div>

          <!-- Right: sticky side panel (map, route, etc.) -->
          <div v-if="$slots.rightPanel" class="lg:w-[360px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-[#e2e2e2] p-[16px] sm:p-[24px] lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
            <slot name="rightPanel" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
