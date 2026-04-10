<script setup lang="ts">
interface Step {
  label: string
}

defineProps<{
  steps: Step[]
  activeStep: number
}>()
</script>

<template>
  <div class="flex items-center justify-center">
    <template v-for="(step, i) in steps" :key="i">
      <!-- Step circle + label -->
      <div class="flex flex-col items-center">
        <div
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
            i < activeStep ? 'bg-black text-white' : '',
            i === activeStep ? 'bg-black text-white' : '',
            i > activeStep ? 'border-2 border-border text-content-tertiary' : '',
          ]"
        >
          <!-- Checkmark for completed steps -->
          <svg
            v-if="i < activeStep"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span v-else>{{ i + 1 }}</span>
        </div>
        <span
          :class="[
            'mt-2 text-xs font-medium whitespace-nowrap',
            i <= activeStep ? 'text-content-primary' : 'text-content-tertiary',
          ]"
        >
          {{ step.label }}
        </span>
      </div>
      <!-- Connector line -->
      <div
        v-if="i < steps.length - 1"
        :class="[
          'flex-1 h-[2px] mx-3 mt-[-16px]',
          i < activeStep ? 'bg-black' : 'bg-border',
        ]"
      />
    </template>
  </div>
</template>
