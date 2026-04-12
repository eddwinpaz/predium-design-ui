<script setup lang="ts">
interface Step {
  label: string;
}

defineProps<{
  steps: Step[];
  activeStep: number;
}>();
</script>

<template>
  <div class="overflow-x-auto scrollbar-none">
    <div class="px-[40px] sm:px-[50px]">
      <div class="min-w-max mx-auto">
        <!-- Row 1: circles + lines -->
        <div class="flex items-center">
          <template v-for="(step, i) in steps" :key="'c' + i">
            <div
              :class="[
                'flex items-center justify-center flex-shrink-0 w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-full text-[12px] sm:text-[13px] font-semibold transition-colors',
                i <= activeStep
                  ? 'bg-btn-primary text-btn-primary-text'
                  : 'border-2 border-border text-content-tertiary',
              ]"
            >
              <svg
                v-if="i < activeStep"
                class="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <div
              v-if="i < steps.length - 1"
              :class="[
                'flex-1 h-[2px] min-w-[40px] sm:min-w-[60px]',
                i < activeStep ? 'bg-btn-primary' : 'bg-border',
              ]"
            />
          </template>
        </div>
        <!-- Row 2: labels -->
        <div class="flex items-start">
          <template v-for="(step, i) in steps" :key="'l' + i">
            <div class="flex-shrink-0 w-[28px] sm:w-[32px] flex justify-center">
              <span
                :class="[
                  'mt-[6px] text-[11px] sm:text-[12px] font-medium whitespace-nowrap text-center',
                  i <= activeStep
                    ? 'text-content-primary'
                    : 'text-content-tertiary',
                ]"
                style="margin-left: -50px; margin-right: -50px"
              >
                {{ step.label }}
              </span>
            </div>
            <div
              v-if="i < steps.length - 1"
              class="flex-1 min-w-[40px] sm:min-w-[60px]"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
