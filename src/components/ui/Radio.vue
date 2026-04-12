<script setup lang="ts">
interface RadioOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: RadioOption[];
    name: string;
    orientation?: "vertical" | "horizontal";
  }>(),
  {
    orientation: "vertical",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function select(option: RadioOption) {
  if (!option.disabled) {
    emit("update:modelValue", option.value);
  }
}
</script>

<template>
  <div
    :class="[
      'flex gap-4',
      orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
    ]"
    role="radiogroup"
  >
    <label
      v-for="option in options"
      :key="option.value"
      :class="[
        'flex items-start gap-3 group',
        option.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      ]"
      @click="select(option)"
    >
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="option.disabled"
        class="sr-only"
      />
      <div class="mt-0.5">
        <div
          :class="[
            'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
            modelValue === option.value
              ? 'border-content-primary'
              : option.disabled
                ? 'border-border'
                : 'border-content-tertiary group-hover:border-content-secondary',
          ]"
        >
          <div
            v-if="modelValue === option.value"
            class="w-2.5 h-2.5 rounded-full bg-content-primary"
          />
        </div>
      </div>
      <div>
        <span class="text-sm font-medium text-content-primary">{{
          option.label
        }}</span>
        <p
          v-if="option.description"
          class="text-xs text-content-tertiary mt-0.5"
        >
          {{ option.description }}
        </p>
      </div>
    </label>
  </div>
</template>
