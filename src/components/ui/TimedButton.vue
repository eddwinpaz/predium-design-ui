<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    duration: number
    autoStart?: boolean
    disabled?: boolean
  }>(),
  {
    duration: 10,
    autoStart: false,
    disabled: false,
  }
)

const emit = defineEmits<{
  complete: []
  click: []
}>()

const remaining = ref(props.duration)
const running = ref(false)
const finished = ref(false)
let interval: ReturnType<typeof setInterval> | null = null

const displayTime = computed(() => {
  const mins = Math.floor(remaining.value / 60)
  const secs = remaining.value % 60
  return `${mins}:${String(secs).padStart(2, '0')}`
})

const progress = computed(() => {
  if (props.duration === 0) return 0
  return ((props.duration - remaining.value) / props.duration) * 100
})

function start() {
  if (running.value || finished.value) return
  running.value = true
  interval = setInterval(() => {
    remaining.value--
    if (remaining.value <= 0) {
      remaining.value = 0
      running.value = false
      finished.value = true
      if (interval) clearInterval(interval)
      emit('complete')
    }
  }, 1000)
}

function reset() {
  if (interval) clearInterval(interval)
  remaining.value = props.duration
  running.value = false
  finished.value = false
}

function handleClick() {
  if (finished.value || props.disabled) return
  if (!running.value) start()
  emit('click')
}

watch(() => props.autoStart, (val) => {
  if (val) start()
}, { immediate: true })

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})

defineExpose({ start, reset })
</script>

<template>
  <button
    :class="[
      'relative inline-flex items-center overflow-hidden rounded-full text-[14px] font-medium transition-colors',
      'h-[40px] min-w-[120px]',
      finished || disabled
        ? 'bg-[#eee] text-[#999] cursor-not-allowed'
        : 'bg-[#000] text-white cursor-pointer hover:bg-[#222]',
    ]"
    :disabled="finished || disabled"
    @click="handleClick"
  >
    <!-- Progress fill (black sliding from left) -->
    <div
      v-if="running"
      class="absolute inset-y-0 left-0 bg-[#000] transition-all duration-1000 ease-linear"
      :style="{ width: progress + '%' }"
    />

    <!-- Remaining area (gray when running) -->
    <div
      v-if="running"
      class="absolute inset-y-0 right-0 bg-[#e0e0e0]"
      :style="{ width: (100 - progress) + '%' }"
    />

    <!-- Label -->
    <span
      :class="[
        'relative z-10 w-full text-center px-[16px]',
        running ? 'text-white' : '',
      ]"
    >
      {{ label }}({{ displayTime }})
    </span>
  </button>
</template>
