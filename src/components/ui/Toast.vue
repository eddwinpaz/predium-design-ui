<script setup lang="ts">
import { watch, ref, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  message: string
  kind?: 'info' | 'positive' | 'warning' | 'negative'
  action?: string
  duration?: number
  visible?: boolean
}>(), {
  kind: 'info',
  duration: 5000,
  visible: false,
})

const emit = defineEmits<{
  close: []
  action: []
}>()

const timer = ref<ReturnType<typeof setTimeout> | null>(null)

function startTimer() {
  clearTimer()
  if (props.duration > 0 && props.visible) {
    timer.value = setTimeout(() => {
      emit('close')
    }, props.duration)
  }
}

function clearTimer() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

watch(() => props.visible, (val) => {
  if (val) {
    startTimer()
  } else {
    clearTimer()
  }
}, { immediate: true })

watch(() => props.duration, () => {
  if (props.visible) startTimer()
})

onBeforeUnmount(() => {
  clearTimer()
})

const kindClassMap: Record<string, string> = {
  info: 'bg-bg-inverse text-content-inverse',
  positive: 'bg-positive text-white',
  warning: 'bg-warning text-black',
  negative: 'bg-negative text-white',
}

function kindClasses(): string {
  return kindClassMap[props.kind] || kindClassMap.info
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible"
      :class="['flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm min-w-[320px]', kindClasses()]"
    >
      <span class="flex-1">{{ message }}</span>
      <button
        v-if="action"
        class="font-medium underline cursor-pointer"
        @click="emit('action')"
      >
        {{ action }}
      </button>
      <button
        class="ml-1 opacity-60 hover:opacity-100 cursor-pointer"
        @click="emit('close')"
      >
        ✕
      </button>
    </div>
  </Transition>
</template>
