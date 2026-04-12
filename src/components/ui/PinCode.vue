<script setup lang="ts">
import { ref, nextTick } from "vue";

interface Props {
  modelValue?: string;
  length?: number;
  mask?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: "compact" | "default";
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  length: 4,
  mask: false,
  disabled: false,
  error: false,
  size: "default",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  complete: [value: string];
}>();

const inputs = ref<HTMLInputElement[]>([]);

function handleInput(index: number, event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  if (value.length > 1) {
    target.value = value.charAt(value.length - 1);
  }

  const chars = props.modelValue.split("");
  chars[index] = target.value;
  // Pad with empty strings up to the index
  while (chars.length <= index) {
    chars.push("");
  }
  const newValue = chars.join("").slice(0, props.length);
  emit("update:modelValue", newValue);

  if (target.value && index < props.length - 1) {
    nextTick(() => {
      inputs.value[index + 1]?.focus();
    });
  }

  if (newValue.length === props.length && !newValue.includes("")) {
    emit("complete", newValue);
  }
}

function handleBackspace(index: number, event: KeyboardEvent) {
  const target = event.target as HTMLInputElement;
  if (!target.value && index > 0) {
    const chars = props.modelValue.split("");
    chars[index - 1] = "";
    emit("update:modelValue", chars.join(""));
    nextTick(() => {
      inputs.value[index - 1]?.focus();
    });
  }
}
</script>

<template>
  <div class="flex gap-2">
    <input
      v-for="i in length"
      :key="i"
      ref="inputs"
      :type="mask ? 'password' : 'text'"
      maxlength="1"
      inputmode="numeric"
      :value="modelValue[i - 1] || ''"
      :disabled="disabled"
      :class="[
        'text-center font-semibold border-2 rounded-[8px] outline-none transition-colors',
        size === 'compact' ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl',
        error
          ? 'border-[#e11900] bg-surface'
          : 'bg-surface-input border-transparent focus:!bg-surface focus:!border-border-selected',
        disabled ? 'opacity-40 cursor-not-allowed' : '',
      ]"
      @input="handleInput(i - 1, $event)"
      @keydown.backspace="handleBackspace(i - 1, $event)"
    />
  </div>
</template>
