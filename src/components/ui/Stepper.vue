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
    <div class="min-w-max mx-auto">
      <!-- Row 1: circles + lines -->
      <div class="flex items-center">
        <template v-for="(step, i) in steps" :key="'c'+i">
          <div class="flex items-center justify-center flex-shrink-0 w-[28px] sm:w-8 h-[28px] sm:h-8 rounded-full text-[12px] sm:text-sm font-semibold transition-colors"
            :class="[
              i <= activeStep ? 'bg-btn-primary text-btn-primary-text' : 'border-2 border-border text-content-tertiary',
            ]"
          >
            <svg v-if="i < activeStep" class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <div
            v-if="i < steps.length - 1"
            :class="['flex-1 h-[2px] mx-[8px] sm:mx-[12px] min-w-[32px] sm:min-w-[48px]', i < activeStep ? 'bg-btn-primary' : 'bg-border']"
          />
        </template>
      </div>
      <!-- Row 2: labels aligned under circles -->
      <div class="flex items-start">
        <template v-for="(step, i) in steps" :key="'l'+i">
          <div class="flex-shrink-0 w-[28px] sm:w-8 flex justify-center">
            <span :class="['mt-[6px] text-[10px] sm:text-xs font-medium whitespace-nowrap', i <= activeStep ? 'text-content-primary' : 'text-content-tertiary']"
              :style="{ marginLeft: '-20px', marginRight: '-20px', textAlign: 'center' }"
            >
              {{ step.label }}
            </span>
          </div>
          <div v-if="i < steps.length - 1" class="flex-1 min-w-[32px] sm:min-w-[48px] mx-[8px] sm:mx-[12px]" />
        </template>
      </div>
    </div>
  </div>
</template>
