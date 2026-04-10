<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    placement?:
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'top'
      | 'top-start'
      | 'top-end'
  }>(),
  {
    placement: 'bottom-start',
  }
)

const open = ref(false)
const popoverRef = ref<HTMLElement | null>(null)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (popoverRef.value && !popoverRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const placementClasses = computed(() => {
  const map: Record<string, string> = {
    'bottom-end': 'right-0 top-full mt-2',
    'bottom-start': 'left-0 top-full mt-2',
    'bottom': 'left-1/2 -translate-x-1/2 top-full mt-2',
    'top-end': 'right-0 bottom-full mb-2',
    'top-start': 'left-0 bottom-full mb-2',
    'top': 'left-1/2 -translate-x-1/2 bottom-full mb-2',
  }
  return map[props.placement] ?? 'left-0 top-full mt-2'
})
</script>

<template>
  <div ref="popoverRef" class="relative inline-block">
    <div @click.stop="toggle" class="inline-block cursor-pointer">
      <slot name="trigger">
        <button class="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg">
          Open
        </button>
      </slot>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        :class="[
          'absolute z-[9999] min-w-[180px] bg-white border border-[#e2e2e2] rounded-xl shadow-xl overflow-hidden',
          placementClasses,
        ]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
