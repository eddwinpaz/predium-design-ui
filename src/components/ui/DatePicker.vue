<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: "compact" | "default" | "large";
  }>(),
  {
    modelValue: "",
    placeholder: "Select date",
    disabled: false,
    size: "default",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isOpen = ref(false);
const containerRef = ref<HTMLDivElement | null>(null);

const today = new Date();
const viewYear = ref(today.getFullYear());
const viewMonth = ref(today.getMonth());

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const selectedDate = computed(() => {
  if (!props.modelValue) return null;
  const parts = props.modelValue.split("-").map(Number);
  const y = parts[0] ?? 2026;
  const m = parts[1] ?? 1;
  const d = parts[2] ?? 1;
  return { year: y, month: m - 1, day: d };
});

const displayValue = computed(() => {
  if (!props.modelValue) return "";
  const d = selectedDate.value;
  if (!d) return "";
  return `${MONTHS[d.month]} ${d.day}, ${d.year}`;
});

const calendarDays = computed(() => {
  const firstDay = new Date(viewYear.value, viewMonth.value, 1).getDay();
  const daysInMonth = new Date(
    viewYear.value,
    viewMonth.value + 1,
    0,
  ).getDate();
  const daysInPrev = new Date(viewYear.value, viewMonth.value, 0).getDate();

  const cells: {
    day: number;
    month: number;
    year: number;
    current: boolean;
  }[] = [];

  // Previous month fill
  for (let i = firstDay - 1; i >= 0; i--) {
    const m = viewMonth.value - 1;
    const y = m < 0 ? viewYear.value - 1 : viewYear.value;
    cells.push({
      day: daysInPrev - i,
      month: (m + 12) % 12,
      year: y,
      current: false,
    });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      day: d,
      month: viewMonth.value,
      year: viewYear.value,
      current: true,
    });
  }

  // Next month fill
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const m = viewMonth.value + 1;
    const y = m > 11 ? viewYear.value + 1 : viewYear.value;
    cells.push({ day: d, month: m % 12, year: y, current: false });
  }

  return cells;
});

function prevMonth() {
  if (viewMonth.value === 0) {
    viewMonth.value = 11;
    viewYear.value--;
  } else {
    viewMonth.value--;
  }
}

function nextMonth() {
  if (viewMonth.value === 11) {
    viewMonth.value = 0;
    viewYear.value++;
  } else {
    viewMonth.value++;
  }
}

function selectDay(cell: { day: number; month: number; year: number }) {
  const mm = String(cell.month + 1).padStart(2, "0");
  const dd = String(cell.day).padStart(2, "0");
  emit("update:modelValue", `${cell.year}-${mm}-${dd}`);
  isOpen.value = false;
}

function isSelected(cell: { day: number; month: number; year: number }) {
  if (!selectedDate.value) return false;
  return (
    cell.day === selectedDate.value.day &&
    cell.month === selectedDate.value.month &&
    cell.year === selectedDate.value.year
  );
}

function isToday(cell: { day: number; month: number; year: number }) {
  return (
    cell.day === today.getDate() &&
    cell.month === today.getMonth() &&
    cell.year === today.getFullYear()
  );
}

function toggle() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("mousedown", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("mousedown", handleClickOutside),
);

const sizeClasses = computed(() => {
  const map: Record<string, string> = {
    compact: "h-8 px-3 text-sm",
    default: "h-10 px-4 text-sm",
    large: "h-12 px-5 text-base",
  };
  return map[props.size];
});
</script>

<template>
  <div ref="containerRef" class="relative inline-block w-64">
    <!-- Trigger -->
    <button
      type="button"
      :disabled="disabled"
      :class="[
        'w-full flex items-center justify-between border-2 rounded-[8px] transition-colors',
        sizeClasses,
        disabled
          ? 'opacity-40 cursor-not-allowed bg-surface-input border-transparent'
          : 'bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected cursor-pointer',
      ]"
      @click="toggle"
    >
      <span
        :class="modelValue ? 'text-content-primary' : 'text-content-tertiary'"
      >
        {{ displayValue || placeholder }}
      </span>
      <svg
        class="w-4 h-4 text-content-secondary ml-2 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    </button>

    <!-- Dropdown Calendar -->
    <div
      v-if="isOpen"
      class="absolute z-50 mt-1 w-72 bg-bg-primary border border-border rounded-xl shadow-lg p-3"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-2">
        <button
          type="button"
          class="w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer"
          @click="prevMonth"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="text-sm font-semibold text-content-primary"
          >{{ MONTHS[viewMonth] }} {{ viewYear }}</span
        >
        <button
          type="button"
          class="w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer"
          @click="nextMonth"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <!-- Day Headers -->
      <div class="grid grid-cols-7 mb-1">
        <div
          v-for="d in DAYS"
          :key="d"
          class="w-9 h-9 flex items-center justify-center text-xs font-medium text-content-tertiary"
        >
          {{ d }}
        </div>
      </div>

      <!-- Day Grid -->
      <div class="grid grid-cols-7">
        <div
          v-for="(cell, idx) in calendarDays"
          :key="idx"
          :class="[
            'w-9 h-9 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors',
            isSelected(cell)
              ? 'bg-black text-white'
              : cell.current
                ? 'text-content-primary hover:bg-bg-secondary'
                : 'text-content-tertiary hover:bg-bg-secondary',
            isToday(cell) && !isSelected(cell) ? 'font-bold' : '',
          ]"
          @click="selectDay(cell)"
        >
          {{ cell.day }}
        </div>
      </div>
    </div>
  </div>
</template>
