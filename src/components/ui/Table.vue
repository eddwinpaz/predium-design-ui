<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import Checkbox from "./Checkbox.vue";
import {
  useVueTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  FlexRender,
  type SortingState,
  type ColumnDef,
  type VisibilityState,
} from "@tanstack/vue-table";

export interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
  sortable?: boolean;
}

const props = withDefaults(
  defineProps<{
    columns: Column[];
    rows: Record<string, any>[];
    hoverable?: boolean;
    striped?: boolean;
    compact?: boolean;
    stickyHeader?: boolean;
    sortable?: boolean;
    multiSort?: boolean;
    columnToggle?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
    columnToggleLabel?: string;
    loading?: boolean;
    loadingRows?: number;
    emptyTitle?: string;
    emptyDescription?: string;
    clickableRows?: boolean;
  }>(),
  {
    hoverable: true,
    striped: false,
    compact: false,
    stickyHeader: false,
    sortable: true,
    multiSort: false,
    columnToggle: false,
    searchable: false,
    searchPlaceholder: "Search...",
    columnToggleLabel: "Columns",
    loading: false,
    loadingRows: 5,
    emptyTitle: "No data",
    emptyDescription: "There are no records to display.",
    clickableRows: false,
  },
);

const emit = defineEmits<{
  rowClick: [row: Record<string, any>, index: number];
}>();

const slots = useSlots();

const sorting = ref<SortingState>([]);
const columnVisibility = ref<VisibilityState>({});
const globalFilter = ref("");
const columnMenuOpen = ref(false);

const tanstackColumns = computed<ColumnDef<Record<string, any>, any>[]>(() =>
  props.columns.map((col) => ({
    id: col.key,
    accessorKey: col.key,
    header: col.label,
    enableSorting: col.sortable !== false && props.sortable,
    meta: { align: col.align, width: col.width },
  })),
);

const table = useVueTable({
  get data() {
    return props.rows;
  },
  get columns() {
    return tanstackColumns.value;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get globalFilter() {
      return globalFilter.value;
    },
  },
  enableMultiSort: props.multiSort,
  onSortingChange: (updater) => {
    sorting.value =
      typeof updater === "function" ? updater(sorting.value) : updater;
  },
  onColumnVisibilityChange: (updater) => {
    columnVisibility.value =
      typeof updater === "function"
        ? updater(columnVisibility.value)
        : updater;
  },
  onGlobalFilterChange: (updater) => {
    globalFilter.value =
      typeof updater === "function" ? updater(globalFilter.value) : updater;
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
});

const visibleRows = computed(() => table.getRowModel().rows);
const isEmpty = computed(
  () => !props.loading && visibleRows.value.length === 0,
);
const totalColumns = computed(() =>
  table
    .getAllLeafColumns()
    .filter((c) => c.getIsVisible()).length,
);

const headerClass = computed(() => [
  "text-font100 font-medium text-content-primary px-scale400 py-scale300 border-b-2 border-border bg-bg-primary",
  props.stickyHeader ? "sticky top-0 z-10" : "",
]);

const cellClass = computed(() => [
  "px-scale400 text-font200 text-content-primary",
  props.compact ? "py-scale200" : "py-scale400",
]);

function rowClass(index: number) {
  return [
    "border-b border-border",
    props.hoverable ? "hover:bg-bg-secondary" : "",
    props.striped && index % 2 !== 0 ? "bg-bg-secondary/50" : "",
    props.clickableRows ? "cursor-pointer" : "",
  ];
}

function alignClass(align?: string) {
  return align === "right"
    ? "text-right"
    : align === "center"
      ? "text-center"
      : "text-left";
}

function handleRowClick(row: Record<string, any>, index: number) {
  if (props.clickableRows) {
    emit("rowClick", row, index);
  }
}
</script>

<template>
  <div>
    <!-- Toolbar: search + column toggle -->
    <div
      v-if="searchable || columnToggle"
      class="flex items-center gap-[8px] mb-[8px]"
    >
      <!-- Search -->
      <div v-if="searchable" class="relative flex-1 max-w-[320px]">
        <svg
          class="absolute left-[10px] top-1/2 -translate-y-1/2 text-content-tertiary pointer-events-none"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          :value="globalFilter"
          :placeholder="searchPlaceholder"
          class="w-full h-[34px] pl-[32px] pr-[10px] text-[13px] text-content-primary bg-surface border border-border rounded-[8px] outline-none placeholder:text-content-tertiary focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
          @input="globalFilter = ($event.target as HTMLInputElement).value"
        />
        <button
          v-if="globalFilter"
          class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] flex items-center justify-center rounded-full text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors"
          @click="globalFilter = ''"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div v-else />

      <div class="flex items-center gap-[8px]">
      <!-- Column toggle -->
      <div v-if="columnToggle" class="relative">
        <button
          class="inline-flex items-center gap-[6px] px-[10px] py-[6px] text-[12px] font-medium text-content-secondary border border-border rounded-[8px] hover:bg-surface-input transition-colors"
          @click.stop="columnMenuOpen = !columnMenuOpen"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          {{ columnToggleLabel }}
        </button>

        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="columnMenuOpen"
            class="absolute right-0 top-[36px] z-50 min-w-[180px] rounded-[10px] border border-border bg-surface shadow-lg py-[6px] px-[4px]"
          >
            <div
              v-for="col in table.getAllLeafColumns()"
              :key="col.id"
              class="px-[8px] py-[2px] rounded-[6px] hover:bg-surface-input"
            >
              <Checkbox
                :model-value="col.getIsVisible()"
                :label="String(col.columnDef.header)"
                @update:model-value="col.toggleVisibility()"
              />
            </div>
          </div>
        </Transition>

        <!-- Backdrop -->
        <div
          v-if="columnMenuOpen"
          class="fixed inset-0 z-40"
          @click="columnMenuOpen = false"
        />
      </div>
      <!-- Toolbar actions slot -->
      <slot name="toolbar-actions" />
      </div>
    </div>

    <!-- Table -->
    <div :class="stickyHeader ? '' : 'overflow-x-auto'">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :class="[
                headerClass,
                alignClass((header.column.columnDef.meta as any)?.align),
                header.column.getCanSort()
                  ? 'cursor-pointer select-none hover:text-content-primary'
                  : '',
              ]"
              :style="
                (header.column.columnDef.meta as any)?.width
                  ? { width: (header.column.columnDef.meta as any).width }
                  : {}
              "
              @click="header.column.getToggleSortingHandler()?.($event)"
            >
              <div
                class="inline-flex items-center gap-[4px]"
                :class="
                  (header.column.columnDef.meta as any)?.align === 'right'
                    ? 'flex-row-reverse'
                    : ''
                "
              >
                <slot
                  :name="'header-' + header.column.id"
                  :column="
                    columns.find((c) => c.key === header.column.id) || {
                      key: header.column.id,
                      label: '',
                    }
                  "
                >
                  <FlexRender
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </slot>
                <span
                  v-if="header.column.getCanSort()"
                  class="inline-flex text-[10px] opacity-60"
                >
                  <template v-if="header.column.getIsSorted() === 'asc'">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </template>
                  <template
                    v-else-if="header.column.getIsSorted() === 'desc'"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </template>
                  <template v-else>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="opacity-40"
                    >
                      <path d="M7 15l5 5 5-5M7 9l5-5 5 5" />
                    </svg>
                  </template>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loading skeleton -->
          <template v-if="loading">
            <tr
              v-for="n in loadingRows"
              :key="'skel-' + n"
              class="border-b border-border"
            >
              <td
                v-for="col in table.getVisibleLeafColumns()"
                :key="'skel-' + col.id"
                :class="cellClass"
              >
                <div
                  class="h-[14px] rounded-[4px] bg-surface-input animate-pulse"
                  :style="{ width: (40 + ((n * 17 + col.id.length * 13) % 40)) + '%' }"
                />
              </td>
            </tr>
          </template>

          <!-- Empty state -->
          <tr v-else-if="isEmpty">
            <td :colspan="totalColumns" class="py-[48px] text-center">
              <slot name="empty">
                <div class="flex flex-col items-center gap-[8px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-content-tertiary"
                  >
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                  </svg>
                  <span class="text-[14px] font-medium text-content-secondary">{{
                    emptyTitle
                  }}</span>
                  <span class="text-[12px] text-content-tertiary">{{
                    emptyDescription
                  }}</span>
                </div>
              </slot>
            </td>
          </tr>

          <!-- Rows -->
          <template v-else>
            <tr
              v-for="(row, i) in visibleRows"
              :key="row.id"
              :class="rowClass(i)"
              @click="handleRowClick(row.original, i)"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :class="[
                  cellClass,
                  alignClass((cell.column.columnDef.meta as any)?.align),
                ]"
              >
                <slot
                  :name="'cell-' + cell.column.id"
                  :row="row.original"
                  :value="cell.getValue()"
                  :row-index="i"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Footer slot for external pagination, etc. -->
    <slot name="footer" />
  </div>
</template>
