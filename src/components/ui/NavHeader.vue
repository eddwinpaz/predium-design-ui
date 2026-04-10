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
  <!-- Base Web header: height 52px (scale1200+scale100), px scale600(24px) -->
  <header class="flex items-center justify-between h-[52px] px-scale600 border-b border-[#e2e2e2] bg-white">
    <!-- Left: Brand -->
    <div class="flex items-center gap-1">
      <span class="text-[15px] font-bold text-[#000] tracking-tight">{{ brand }}</span>
      <span v-if="brandSuffix" class="text-[15px] font-normal text-[#000]">{{ brandSuffix }}</span>
      <div v-if="subtitle" class="ml-2 pl-2 border-l border-[#e2e2e2]">
        <span class="text-xs text-[#545454] italic">{{ subtitle }}</span>
      </div>
    </div>

    <!-- Right: Nav + Actions -->
    <div class="flex items-center gap-1">
      <!-- Nav links -->
      <nav v-if="navItems?.length" class="flex items-center gap-0.5 mr-4">
        <button
          v-for="item in navItems"
          :key="item.label"
          :class="[
            'px-3 py-1.5 text-sm rounded-lg transition-colors',
            item.active
              ? 'text-[#000] font-medium'
              : 'text-[#545454] hover:text-[#000] hover:bg-[#f6f6f6]',
          ]"
          @click="$emit('navigate', item)"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- Grid / App switcher icon -->
      <button
        class="w-9 h-9 flex items-center justify-center rounded-lg text-[#545454] hover:bg-[#f6f6f6] transition-colors"
        @click="$emit('gridClick')"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="5" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      </button>

      <!-- User avatar -->
      <button
        class="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold ml-1 cursor-pointer hover:opacity-90 transition-opacity"
        :style="{ backgroundColor: avatarColor }"
        @click="$emit('avatarClick')"
      >
        {{ initials }}
      </button>
    </div>
  </header>
</template>
