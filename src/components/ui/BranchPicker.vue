<script setup lang="ts">
import { ref, computed } from "vue";

export interface Branch {
  id: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    branches: Branch[];
    modelValue: string;
    size?: "sm" | "md" | "lg";
    align?: "left" | "center" | "right";
  }>(),
  {
    size: "md",
    align: "left",
  },
);

const emit = defineEmits<{
  "update:modelValue": [id: string];
}>();

const open = ref(false);

const selected = computed(() =>
  props.branches.find((b) => b.id === props.modelValue),
);

const triggerSizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-[6px] py-[2px] text-[12px] gap-[4px]";
    case "lg":
      return "px-[12px] py-[6px] text-[16px] gap-[8px]";
    default:
      return "px-[8px] py-[4px] text-[14px] gap-[6px]";
  }
});

const chevronSize = computed(() => (props.size === "sm" ? 12 : props.size === "lg" ? 16 : 14));

const dropdownSizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-[10px] py-[6px] text-[12px]";
    case "lg":
      return "px-[14px] py-[10px] text-[15px]";
    default:
      return "px-[12px] py-[8px] text-[13px]";
  }
});

const checkSize = computed(() => {
  switch (props.size) {
    case "sm":
      return { circle: "w-[16px] h-[16px]", icon: 10, stroke: 3 };
    case "lg":
      return { circle: "w-[22px] h-[22px]", icon: 14, stroke: 3 };
    default:
      return { circle: "w-[20px] h-[20px]", icon: 12, stroke: 3 };
  }
});

const dropdownAlignClass = computed(() => {
  switch (props.align) {
    case "center":
      return "left-1/2 -translate-x-1/2";
    case "right":
      return "right-0";
    default:
      return "left-0";
  }
});

const triggerAlignClass = computed(() => {
  switch (props.align) {
    case "center":
      return "justify-center";
    case "right":
      return "justify-end";
    default:
      return "";
  }
});

function select(branch: Branch) {
  emit("update:modelValue", branch.id);
  open.value = false;
}
</script>

<template>
  <div class="relative" :class="triggerAlignClass">
    <!-- Trigger -->
    <button
      :class="[
        'inline-flex items-center text-content-primary hover:text-content-primary/80 rounded-[6px] hover:bg-surface-input transition-colors cursor-pointer select-none',
        triggerSizeClass,
      ]"
      @click.stop="open = !open"
    >
      <span class="font-medium whitespace-nowrap">{{ selected?.label ?? 'Select branch' }}</span>
      <svg
        :width="chevronSize"
        :height="chevronSize"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="transition-transform duration-150"
        :class="open ? 'rotate-180' : ''"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        :class="[
          'absolute top-[calc(100%+4px)] z-50 min-w-[220px] max-h-[280px] overflow-y-auto rounded-[10px] border border-border bg-surface shadow-lg py-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          dropdownAlignClass,
        ]"
      >
        <button
          v-for="branch in branches"
          :key="branch.id"
          :class="[
            'flex items-center justify-between gap-[12px] w-full text-left hover:bg-surface-input transition-colors cursor-pointer',
            dropdownSizeClass,
            branch.id === modelValue ? 'text-content-primary font-medium' : 'text-content-secondary',
          ]"
          @click="select(branch)"
        >
          <span class="whitespace-nowrap">{{ branch.label }}</span>
          <!-- Check icon -->
          <span
            v-if="branch.id === modelValue"
            :class="['flex-shrink-0 rounded-full bg-black flex items-center justify-center', checkSize.circle]"
          >
            <svg
              :width="checkSize.icon"
              :height="checkSize.icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              :stroke-width="checkSize.stroke"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </button>
      </div>
    </Transition>

    <!-- Backdrop -->
    <div
      v-if="open"
      class="fixed inset-0 z-40"
      @click="open = false"
    />
  </div>
</template>
