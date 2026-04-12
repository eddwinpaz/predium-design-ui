<script setup lang="ts">
import { computed } from "vue";

interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
}

const props = withDefaults(
  defineProps<{
    columns: Column[];
    rows: Record<string, any>[];
    hoverable?: boolean;
    striped?: boolean;
    compact?: boolean;
    stickyHeader?: boolean;
  }>(),
  {
    hoverable: true,
    striped: false,
    compact: false,
    stickyHeader: false,
  },
);

/* Base Web table: header py=scale300(12), px=scale400(16), cell py=scale400(16) compact=scale200(8) */
const headerClass = computed(() => [
  "text-font100 font-medium text-content-tertiary uppercase tracking-wider px-scale400 py-scale300 border-b-2 border-border bg-bg-primary",
  props.stickyHeader ? "sticky top-0 z-10" : "",
]);

function rowClass(index: number) {
  return [
    "border-b border-border",
    props.hoverable ? "hover:bg-bg-secondary" : "",
    props.striped && index % 2 !== 0 ? "bg-bg-secondary/50" : "",
  ];
}

const cellClass = computed(() => [
  "px-scale400 text-font200 text-content-primary",
  props.compact ? "py-scale200" : "py-scale400",
]);
</script>

<template>
  <div :class="stickyHeader ? '' : 'overflow-x-auto'">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            :class="[
              headerClass,
              col.align === 'right'
                ? 'text-right'
                : col.align === 'center'
                  ? 'text-center'
                  : 'text-left',
            ]"
            :style="col.width ? { width: col.width } : {}"
          >
            <slot :name="'header-' + col.key" :column="col">{{
              col.label
            }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i" :class="rowClass(i)">
          <td
            v-for="col in columns"
            :key="col.key"
            :class="[
              cellClass,
              col.align === 'right'
                ? 'text-right'
                : col.align === 'center'
                  ? 'text-center'
                  : 'text-left',
            ]"
          >
            <slot
              :name="'cell-' + col.key"
              :row="row"
              :value="row[col.key]"
              :row-index="i"
            >
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
