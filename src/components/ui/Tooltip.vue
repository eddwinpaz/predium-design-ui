<template>
  <div class="relative inline-flex" @mouseenter="show = true" @mouseleave="show = false">
    <slot />
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        :class="[
          'absolute z-50 px-2.5 py-1.5 text-xs font-medium bg-bg-inverse text-content-inverse rounded-md shadow-lg whitespace-nowrap pointer-events-none',
          positionClasses,
        ]"
      >
        {{ content }}
        <div :class="['absolute w-2 h-2 bg-bg-inverse rotate-45', arrowClasses]" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    content: string
    placement?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  {
    placement: 'top',
  },
)

const show = ref(false)

const positionClasses = computed(() => {
  switch (props.placement) {
    case 'top':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
    case 'bottom':
      return 'top-full left-1/2 -translate-x-1/2 mt-2'
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-2'
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-2'
    default:
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
  }
})

const arrowClasses = computed(() => {
  switch (props.placement) {
    case 'top':
      return 'top-full left-1/2 -translate-x-1/2 -mt-1'
    case 'bottom':
      return 'bottom-full left-1/2 -translate-x-1/2 -mb-1'
    case 'left':
      return 'top-1/2 left-full -translate-y-1/2 -ml-1'
    case 'right':
      return 'top-1/2 right-full -translate-y-1/2 -mr-1'
    default:
      return 'top-full left-1/2 -translate-x-1/2 -mt-1'
  }
})
</script>
