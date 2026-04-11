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
  <div class="overflow-x-auto scrollbar-none px-[4px]">
    <div class="flex items-center min-w-max mx-auto">
      <template v-for="(step, i) in steps" :key="i">
        <!-- Step circle + label -->
        <div class="flex flex-col items-center flex-shrink-0">
          <div
            :class="[
              'w-[28px] h-[28px] sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[12px] sm:text-sm font-semibold transition-colors',
              i <= activeStep ? 'bg-btn-primary text-btn-primary-text' : '',
              i > activeStep ? 'border-2 border-border text-content-tertiary' : '',
            ]"
          >
            <svg
              v-if="i < activeStep"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
              'mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-medium whitespace-nowrap',
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
            'flex-1 h-[2px] mx-2 sm:mx-3 mt-[-16px] min-w-[32px] sm:min-w-[48px]',
            i < activeStep ? 'bg-btn-primary' : 'bg-border',
          ]"
        />
      </template>
    </div>
  </div>
</template>
