<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    duration?: number
    paused?: boolean
    disabled?: boolean
  }>(),
  {
    label: 'Countdown',
    duration: 10,
    paused: true,
    disabled: false,
  }
)

const emit = defineEmits<{
  click: []
}>()

const remaining = ref(props.duration)
const finished = ref(false)
let interval: ReturnType<typeof setInterval> | null = null

const running = computed(() => !props.paused && !finished.value)

const displayTime = computed(() => {
  const mins = Math.floor(remaining.value / 60)
  const secs = remaining.value % 60
  return `${mins}:${String(secs).padStart(2, '0')}`
})

const progress = computed(() => {
  if (props.duration === 0) return 100
  return ((props.duration - remaining.value) / props.duration) * 100
})

function tick() {
  remaining.value--
  if (remaining.value <= 0) {
    remaining.value = 0
    finished.value = true
    stopTimer()
    emit('click')
  }
}

function startTimer() {
  if (interval || finished.value) return
  interval = setInterval(tick, 1000)
}

function stopTimer() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

function reset() {
  stopTimer()
  remaining.value = props.duration
  finished.value = false
}

/* Declarative start/pause via paused prop */
watch(() => props.paused, (paused) => {
  if (!paused && !finished.value) {
    startTimer()
  } else {
    stopTimer()
  }
}, { immediate: true })

watch(() => props.duration, () => {
  reset()
})

onBeforeUnmount(() => stopTimer())

defineExpose({ reset })
</script>

<template>
  <button
    :class="[
      'relative inline-flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-medium',
      'h-[48px] min-w-[140px]',
      finished || disabled
        ? 'bg-surface-input-hover text-content-disabled cursor-not-allowed'
        : 'cursor-pointer',
    ]"
    :disabled="finished || disabled"
    @click="!finished && !disabled && $emit('click')"
  >
    <!-- Background layers when running -->
    <template v-if="running && !finished">
      <!-- Elapsed portion: black -->
      <div
        class="absolute inset-y-0 left-0 bg-btn-primary transition-[width] duration-1000 ease-linear"
        :style="{ width: progress + '%' }"
      />
      <!-- Remaining portion: gray -->
      <div
        class="absolute inset-y-0 right-0 bg-surface-input-hover transition-[width] duration-1000 ease-linear"
        :style="{ width: (100 - progress) + '%' }"
      />
    </template>

    <!-- Solid black when paused but not finished and not started yet -->
    <div
      v-if="!running && !finished && !disabled"
      class="absolute inset-0 bg-btn-primary"
    />

    <!-- Content -->
    <span
      :class="[
        'relative z-10 flex items-center gap-[4px] px-[16px]',
        finished || disabled ? 'text-content-disabled' : 'text-btn-primary-text',
      ]"
    >
      <span>{{ label }}</span>
      <span class="tabular-nums">({{ displayTime }})</span>
    </span>
  </button>
</template>
