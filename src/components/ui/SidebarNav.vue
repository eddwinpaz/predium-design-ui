<script setup lang="ts">
import { ref, computed } from 'vue'

export interface NavChild {
  label: string
  to: string
  active?: boolean
}

export interface SidebarItem {
  label: string
  to?: string
  icon?: string
  active?: boolean
  children?: NavChild[]
}

const props = withDefaults(
  defineProps<{
    items: SidebarItem[]
    collapsed?: boolean
    brand?: string
  }>(),
  {
    collapsed: false,
    brand: 'Predium',
  }
)

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
  navigate: [to: string]
}>()

const isCollapsed = ref(props.collapsed)
const expandedGroups = ref<Set<string>>(new Set())

/* Auto-expand groups that have an active child */
props.items.forEach(item => {
  if (item.children?.some(c => c.active)) {
    expandedGroups.value.add(item.label)
  }
})

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
  emit('update:collapsed', isCollapsed.value)
}

function toggleGroup(label: string) {
  if (expandedGroups.value.has(label)) {
    expandedGroups.value.delete(label)
  } else {
    expandedGroups.value.add(label)
  }
}

function handleNav(to: string) {
  emit('navigate', to)
}

function isGroupActive(item: SidebarItem): boolean {
  return item.active || (item.children?.some(c => c.active) ?? false)
}

/* Default icon paths */
const defaultIcons: Record<string, string> = {
  Dashboard: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4',
  Search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  Orders: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  Shipments: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  'Rates & Routing': 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  Carriers: 'M8 7h8m-8 5h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
  Facilities: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  Financials: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  Settings: 'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
}

function getIcon(item: SidebarItem): string {
  return item.icon || defaultIcons[item.label] || 'M4 6h16M4 12h16M4 18h16'
}
</script>

<template>
  <nav
    :class="[
      'flex flex-col h-full bg-sidebar-bg text-sidebar-text transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden',
      isCollapsed ? 'w-[56px]' : 'w-[240px]',
    ]"
  >
    <!-- Hamburger -->
    <div class="flex items-center h-[52px] px-[14px] flex-shrink-0">
      <button
        class="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] text-white hover:bg-sidebar-hover transition-colors"
        @click="toggleCollapse"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <span v-if="!isCollapsed" class="ml-[10px] text-[14px] font-semibold truncate">{{ brand }}</span>
    </div>

    <!-- Menu items -->
    <div class="flex-1 overflow-y-auto overflow-x-hidden py-[8px] px-[8px]">
      <template v-for="item in items" :key="item.label">
        <!-- Item WITH children (expandable group) -->
        <template v-if="item.children?.length">
          <button
            :class="[
              'flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]',
              isCollapsed ? 'justify-center px-0 py-[10px]' : 'px-[10px] py-[10px]',
              isGroupActive(item)
                ? 'text-white'
                : 'text-content-tertiary hover:text-white hover:bg-[#1a1a1a]',
            ]"
            @click="isCollapsed ? toggleCollapse() : toggleGroup(item.label)"
          >
            <svg class="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="getIcon(item)" />
            </svg>
            <span v-if="!isCollapsed" class="flex-1 text-[14px] text-left truncate">{{ item.label }}</span>
            <svg
              v-if="!isCollapsed"
              :class="['w-[14px] h-[14px] transition-transform duration-200 flex-shrink-0', expandedGroups.has(item.label) ? 'rotate-180' : '']"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            ><path d="M6 9l6 6 6-6" /></svg>
          </button>

          <!-- Children -->
          <div
            v-if="!isCollapsed && expandedGroups.has(item.label)"
            class="ml-[42px] mb-[4px]"
          >
            <button
              v-for="child in item.children"
              :key="child.to"
              :class="[
                'block w-full text-left text-[14px] py-[8px] px-[10px] rounded-[8px] transition-colors mb-[1px]',
                child.active
                  ? 'text-white bg-[#333]'
                  : 'text-content-tertiary hover:text-white hover:bg-[#1a1a1a]',
              ]"
              @click="handleNav(child.to)"
            >
              {{ child.label }}
            </button>
          </div>
        </template>

        <!-- Item WITHOUT children (simple link) -->
        <template v-else>
          <button
            :class="[
              'flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]',
              isCollapsed ? 'justify-center px-0 py-[10px]' : 'px-[10px] py-[10px]',
              item.active
                ? 'text-white bg-[#333]'
                : 'text-content-tertiary hover:text-white hover:bg-[#1a1a1a]',
            ]"
            @click="item.to && handleNav(item.to)"
          >
            <svg class="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="getIcon(item)" />
            </svg>
            <span v-if="!isCollapsed" class="text-[14px] truncate">{{ item.label }}</span>
          </button>
        </template>
      </template>
    </div>
  </nav>
</template>
