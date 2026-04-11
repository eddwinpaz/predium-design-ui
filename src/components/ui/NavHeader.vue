<script setup lang="ts">
import { ref, computed } from 'vue'

export interface NavItem {
  label: string
  to?: string
  active?: boolean
}

export interface ModuleItem {
  label: string
  icon?: string
  to?: string
  color?: string
}

export interface ModuleGroup {
  title: string
  items: ModuleItem[]
}

const props = withDefaults(
  defineProps<{
    brand?: string
    brandSuffix?: string
    subtitle?: string
    navItems?: NavItem[]
    modules?: ModuleGroup[]
    userName?: string
    userInitials?: string
    avatarColor?: string
    showMenuButton?: boolean
  }>(),
  {
    brand: 'Predium',
    brandSuffix: 'Exchange',
    subtitle: '',
    avatarColor: '#276EF1',
    showMenuButton: false,
  }
)

const emit = defineEmits<{
  navigate: [item: NavItem]
  moduleClick: [item: ModuleItem]
  avatarClick: []
  menuClick: []
}>()

const mobileMenuOpen = ref(false)
const gridOpen = ref(false)

const initials = computed(() => {
  if (props.userInitials) return props.userInitials
  if (props.userName) {
    const parts = props.userName.split(' ')
    return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2)
  }
  return 'U'
})

function toggleGrid() {
  gridOpen.value = !gridOpen.value
  if (gridOpen.value) mobileMenuOpen.value = false
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) gridOpen.value = false
}

/* Default icons per module name for fallback */
const defaultIcons: Record<string, string> = {
  'New Property': 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'List Properties': 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  'Payments': 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
  'Sinisters': 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01',
  'Maintenance': 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  'Ticket Support': 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  'Calendar': 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  'Reports': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  'Settings': 'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
}

const defaultColors = ['#276EF1', '#048848', '#7356BF', '#E11900', '#FFC043', '#0D9488', '#4F46E5', '#F97066']

function getIconPath(item: ModuleItem): string {
  return item.icon || defaultIcons[item.label] || 'M4 6h16M4 12h16M4 18h16'
}

function getColor(item: ModuleItem, groupIdx: number, itemIdx: number): string {
  return item.color || defaultColors[(groupIdx * 4 + itemIdx) % defaultColors.length] || '#276EF1'
}
</script>

<template>
  <div>
    <header class="flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-border bg-surface">
      <!-- Left: Hamburger (mobile) + Brand -->
      <div class="flex items-center gap-[8px]">
        <!-- Hamburger: for sidebar on mobile OR nav menu -->
        <button
          v-if="showMenuButton || navItems?.length"
          class="sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-primary hover:bg-surface-input transition-colors"
          @click="showMenuButton ? $emit('menuClick') : toggleMobileMenu()"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        <div class="flex items-center gap-1">
          <span class="text-[15px] font-bold text-content-primary tracking-tight">{{ brand }}</span>
          <span v-if="brandSuffix" class="text-[15px] font-normal text-content-primary">{{ brandSuffix }}</span>
          <div v-if="subtitle" class="hidden sm:block ml-2 pl-2 border-l border-border">
            <span class="text-xs text-content-secondary italic">{{ subtitle }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Desktop nav + Grid + Avatar -->
      <div class="flex items-center gap-[4px]">
        <nav v-if="navItems?.length" class="hidden sm:flex items-center gap-[2px] mr-[12px]">
          <button
            v-for="item in navItems"
            :key="item.label"
            :class="[
              'px-[12px] py-[6px] text-[14px] rounded-[8px] transition-colors whitespace-nowrap',
              item.active ? 'text-content-primary font-medium' : 'text-content-secondary hover:text-content-primary hover:bg-surface-input',
            ]"
            @click="$emit('navigate', item)"
          >
            {{ item.label }}
          </button>
        </nav>

        <!-- Grid / Module switcher -->
        <div class="relative">
          <button
            :class="[
              'w-[36px] h-[36px] flex items-center justify-center rounded-[8px] transition-colors',
              gridOpen ? 'bg-surface-input text-content-primary' : 'text-content-secondary hover:bg-surface-input',
            ]"
            @click.stop="toggleGrid"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
            </svg>
          </button>

          <!-- Floating modules panel -->
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="gridOpen && modules?.length"
              class="fixed inset-x-0 top-[52px] bottom-0 z-[9999] bg-surface overflow-y-auto border-t border-border
                     sm:absolute sm:inset-auto sm:right-0 sm:top-[44px] sm:bottom-auto sm:w-[420px] sm:max-h-[70vh] sm:rounded-[16px] sm:border sm:border-border sm:shadow-2xl"
            >
              <!-- Desktop only: X button -->
              <div class="hidden sm:flex items-center justify-end px-[12px] pt-[10px]">
                <button
                  class="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors"
                  @click="gridOpen = false"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>

              <!-- Mobile: vertical list flush to top -->
              <div class="sm:hidden">
                <div v-for="(group, gi) in modules" :key="group.title">
                  <div class="px-[16px] pt-[16px] pb-[8px]">
                    <span class="text-[11px] font-semibold text-content-tertiary uppercase tracking-[1px]">{{ group.title }}</span>
                  </div>
                  <div>
                    <button
                      v-for="(item, ii) in group.items"
                      :key="item.label"
                      class="flex items-center gap-[12px] w-full px-[16px] py-[14px] border-b border-border text-left active:bg-surface-input transition-colors"
                      @click="gridOpen = false; $emit('moduleClick', item)"
                    >
                      <div
                        class="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                        :style="{ backgroundColor: getColor(item, gi, ii) + '18' }"
                      >
                        <svg
                          width="18" height="18" viewBox="0 0 24 24" fill="none"
                          :stroke="getColor(item, gi, ii)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        >
                          <path :d="getIconPath(item)" />
                        </svg>
                      </div>
                      <span class="text-[15px] font-medium text-content-primary">{{ item.label }}</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Desktop: 2-column grid -->
              <div class="hidden sm:block px-[20px] pb-[20px]">
                <div class="grid grid-cols-2 gap-[24px]">
                  <div v-for="(group, gi) in modules" :key="group.title">
                    <div class="mb-[10px]">
                      <span class="text-[11px] font-semibold text-content-tertiary uppercase tracking-[1px]">{{ group.title }}</span>
                    </div>
                    <div class="flex flex-col gap-[2px]">
                      <button
                        v-for="(item, ii) in group.items"
                        :key="item.label"
                        class="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[8px] hover:bg-surface-input active:bg-surface-input-hover transition-colors cursor-pointer text-left"
                        @click="gridOpen = false; $emit('moduleClick', item)"
                      >
                        <div
                          class="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center flex-shrink-0"
                          :style="{ backgroundColor: getColor(item, gi, ii) + '18' }"
                        >
                          <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                            :stroke="getColor(item, gi, ii)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          >
                            <path :d="getIconPath(item)" />
                          </svg>
                        </div>
                        <span class="text-[13px] font-medium text-content-primary">{{ item.label }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Avatar -->
        <button
          class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          :style="{ backgroundColor: avatarColor }"
          @click="$emit('avatarClick')"
        >
          {{ initials }}
        </button>
      </div>
    </header>

    <!-- Mobile menu drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen && navItems?.length" class="sm:hidden border-b border-border bg-surface">
        <div v-if="subtitle" class="px-[16px] pt-[12px] pb-[4px]">
          <span class="text-[12px] text-content-tertiary">{{ subtitle }}</span>
        </div>
        <nav class="flex flex-col py-[8px]">
          <button
            v-for="item in navItems"
            :key="item.label"
            :class="[
              'w-full text-left px-[16px] py-[12px] text-[15px] transition-colors',
              item.active ? 'text-content-primary font-semibold bg-surface-input' : 'text-content-secondary hover:bg-surface-input hover:text-content-primary',
            ]"
            @click="$emit('navigate', item); mobileMenuOpen = false"
          >
            {{ item.label }}
          </button>
        </nav>
      </div>
    </Transition>

    <!-- Backdrop -->
    <div v-if="gridOpen" class="fixed inset-0 z-[9998] bg-black/20 sm:bg-transparent" @click="gridOpen = false" />
  </div>
</template>
