<script setup lang="ts">
import { ref, computed } from 'vue'

export interface NavItem {
  label: string
  to?: string
  active?: boolean
}

const props = withDefaults(
  defineProps<{
    brand?: string
    brandSuffix?: string
    subtitle?: string
    navItems?: NavItem[]
    userName?: string
    userInitials?: string
    avatarColor?: string
  }>(),
  {
    brand: 'Predium',
    brandSuffix: 'Exchange',
    subtitle: '',
    avatarColor: '#276EF1',
  }
)

defineEmits<{
  navigate: [item: NavItem]
  avatarClick: []
  gridClick: []
}>()

const mobileMenuOpen = ref(false)

const initials = computed(() => {
  if (props.userInitials) return props.userInitials
  if (props.userName) {
    const parts = props.userName.split(' ')
    return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2)
  }
  return 'U'
})
</script>

<template>
  <div>
    <header class="flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-[#e2e2e2] bg-white">
      <!-- Left: Hamburger (mobile) + Brand -->
      <div class="flex items-center gap-[8px]">
        <!-- Hamburger menu - mobile only -->
        <button
          v-if="navItems?.length"
          class="sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-[#000] hover:bg-[#f6f6f6] transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <!-- Brand -->
        <div class="flex items-center gap-1">
          <span class="text-[15px] font-bold text-[#000] tracking-tight">{{ brand }}</span>
          <span v-if="brandSuffix" class="text-[15px] font-normal text-[#000]">{{ brandSuffix }}</span>
          <div v-if="subtitle" class="hidden sm:block ml-2 pl-2 border-l border-[#e2e2e2]">
            <span class="text-xs text-[#545454] italic">{{ subtitle }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Desktop nav + Actions -->
      <div class="flex items-center gap-[4px]">
        <!-- Desktop nav links -->
        <nav v-if="navItems?.length" class="hidden sm:flex items-center gap-[2px] mr-[12px]">
          <button
            v-for="item in navItems"
            :key="item.label"
            :class="[
              'px-[12px] py-[6px] text-[14px] rounded-[8px] transition-colors whitespace-nowrap',
              item.active
                ? 'text-[#000] font-medium'
                : 'text-[#545454] hover:text-[#000] hover:bg-[#f6f6f6]',
            ]"
            @click="$emit('navigate', item)"
          >
            {{ item.label }}
          </button>
        </nav>

        <!-- Grid icon -->
        <button
          class="hidden sm:flex w-[36px] h-[36px] items-center justify-center rounded-[8px] text-[#545454] hover:bg-[#f6f6f6] transition-colors"
          @click="$emit('gridClick')"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="5" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
            <circle cx="5" cy="19" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
          </svg>
        </button>

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
      <div
        v-if="mobileMenuOpen && navItems?.length"
        class="sm:hidden border-b border-[#e2e2e2] bg-white"
      >
        <!-- Subtitle on mobile -->
        <div v-if="subtitle" class="px-[16px] pt-[12px] pb-[4px]">
          <span class="text-[12px] text-[#999]">{{ subtitle }}</span>
        </div>

        <!-- Nav items -->
        <nav class="flex flex-col py-[8px]">
          <button
            v-for="item in navItems"
            :key="item.label"
            :class="[
              'w-full text-left px-[16px] py-[12px] text-[15px] transition-colors',
              item.active
                ? 'text-[#000] font-semibold bg-[#f6f6f6]'
                : 'text-[#545454] hover:bg-[#f6f6f6] hover:text-[#000]',
            ]"
            @click="$emit('navigate', item); mobileMenuOpen = false"
          >
            {{ item.label }}
          </button>
        </nav>
      </div>
    </Transition>
  </div>
</template>
