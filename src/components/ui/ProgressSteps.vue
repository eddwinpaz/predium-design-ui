<script setup lang="ts">
interface Step {
  title: string
  description?: string
}

interface Props {
  steps: Step[]
  currentStep?: number
}

withDefaults(defineProps<Props>(), {
  currentStep: 0,
})
</script>

<template>
  <div class="space-y-0">
    <div v-for="(step, i) in steps" :key="i" class="relative flex gap-4">
      <!-- Vertical line + circle -->
      <div class="flex flex-col items-center">
        <!-- Circle -->
        <div
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border-2 transition-colors',
            i < currentStep ? 'bg-btn-primary border-border-selected text-white' : '',
            i === currentStep ? 'bg-btn-primary border-border-selected text-white' : '',
            i > currentStep ? 'bg-surface border-border text-content-tertiary' : '',
          ]"
        >
          <!-- Checkmark for completed -->
          <svg
            v-if="i < currentStep"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span v-else>{{ i + 1 }}</span>
        </div>
        <!-- Connector line -->
        <div
          v-if="i < steps.length - 1"
          :class="[
            'w-0.5 flex-1 min-h-[24px]',
            i < currentStep ? 'bg-btn-primary' : 'bg-[#e2e2e2]',
          ]"
        />
      </div>

      <!-- Content -->
      <div :class="['pb-8 flex-1', i === steps.length - 1 ? 'pb-0' : '']">
        <h4
          :class="[
            'text-sm font-semibold',
            i <= currentStep ? 'text-content-primary' : 'text-content-tertiary',
          ]"
        >
          {{ step.title }}
        </h4>
        <p
          v-if="step.description"
          :class="[
            'text-xs mt-0.5',
            i <= currentStep ? 'text-content-secondary' : 'text-content-tertiary',
          ]"
        >
          {{ step.description }}
        </p>
        <!-- Step content slot - only show for active step -->
        <div v-if="i === currentStep" class="mt-3">
          <slot
            :name="'step-' + i"
            :step="step"
            :index="i"
            :isActive="true"
            :isCompleted="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
