<script setup lang="ts">
import { ref, computed } from 'vue'

export interface DataGridColumn {
  key: string
  label: string
  width?: string
  hideMobile?: boolean
}

export interface BulkAction {
  label: string
  key: string
  danger?: boolean
}

const props = withDefaults(
  defineProps<{
    title?: string
    columns: DataGridColumn[]
    rows: Record<string, any>[]
    selectable?: boolean
    editable?: boolean
    bulkActions?: BulkAction[]
  }>(),
  {
    selectable: true,
    editable: true,
    bulkActions: () => [
      { label: 'Delete', key: 'delete', danger: true },
      { label: 'Export', key: 'export' },
    ],
  }
)

const emit = defineEmits<{
  edit: []
  bulkAction: [action: string, indices: number[]]
}>()

const selected = ref<Set<number>>(new Set())
const editMode = ref(false)

const allSelected = computed(() =>
  props.rows.length > 0 && selected.value.size === props.rows.length
)

const someSelected = computed(() =>
  selected.value.size > 0 && selected.value.size < props.rows.length
)

const hasSelection = computed(() => selected.value.size > 0)

function toggleAll() {
  if (allSelected.value) {
    selected.value = new Set()
  } else {
    selected.value = new Set(props.rows.map((_, i) => i))
  }
}

function toggleRow(index: number) {
  const next = new Set(selected.value)
  if (next.has(index)) {
    next.delete(index)
  } else {
    next.add(index)
  }
  selected.value = next
}

function handleBulkAction(key: string) {
  emit('bulkAction', key, Array.from(selected.value))
  selected.value = new Set()
}

function enterEdit() {
  editMode.value = true
  emit('edit')
}

function exitEdit() {
  editMode.value = false
  selected.value = new Set()
}
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-wrap items-center justify-between gap-[8px] mb-[12px]">
      <div class="flex items-center gap-[8px]">
        <h3 v-if="title" class="text-[15px] font-semibold text-content-primary">{{ title }}</h3>
        <!-- Selection count badge -->
        <span
          v-if="hasSelection"
          class="text-[12px] font-medium text-content-secondary bg-surface-input px-[8px] py-[2px] rounded-full"
        >
          {{ selected.size }} selected
        </span>
      </div>

      <div class="flex items-center gap-[6px]">
        <!-- Bulk action bar (visible when items selected) -->
        <template v-if="hasSelection">
          <button
            v-for="action in bulkActions"
            :key="action.key"
            :class="[
              'px-[8px] py-[4px] text-[12px] font-medium rounded-[6px] transition-colors',
              action.danger
                ? 'text-white bg-[#e11900] hover:bg-[#c41400]'
                : 'text-content-primary bg-surface-input hover:bg-surface-input-hover',
            ]"
            @click="handleBulkAction(action.key)"
          >
            {{ action.label }} ({{ selected.size }})
          </button>
          <button
            class="px-[8px] py-[4px] text-[12px] font-medium text-content-primary hover:underline transition-colors"
            @click="selected = new Set()"
          >
            Cancel
          </button>
        </template>

        <!-- Slot for custom header actions (no built-in Edit button) -->
        <template v-else>
          <slot name="headerActions" />
          <button
            v-if="editable && !editMode"
            class="hidden"
            @click="enterEdit"
          >
            Edit
          </button>
          <button
            v-if="editMode"
            class="px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] text-[13px] sm:text-[14px] font-medium text-white bg-btn-primary hover:bg-btn-primary-hover rounded-[8px] transition-colors"
            @click="exitEdit"
          >
            Done
          </button>
        </template>
      </div>
    </div>

    <!-- Desktop/Tablet: table -->
    <div class="hidden sm:block border border-border rounded-[12px] bg-surface overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border">
              <th v-if="selectable" class="w-[44px] px-[12px] py-[10px] text-left">
                <div
                  :class="[
                    'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors',
                    allSelected || someSelected ? 'bg-btn-primary border-border-selected' : 'border-border-hover hover:border-border-hover',
                  ]"
                  @click="toggleAll"
                >
                  <svg v-if="allSelected" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6l3 3 5-5" /></svg>
                  <svg v-else-if="someSelected" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6h8" /></svg>
                </div>
              </th>
              <th
                v-for="col in columns"
                :key="col.key"
                class="px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap"
                :style="col.width ? { width: col.width } : {}"
              >
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in rows"
              :key="i"
              :class="[
                'border-b border-border last:border-b-0 transition-colors',
                selected.has(i) ? 'bg-surface-selected' : 'hover:bg-surface-hover',
              ]"
            >
              <td v-if="selectable" class="w-[44px] px-[12px] py-[10px]">
                <div
                  :class="[
                    'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors',
                    selected.has(i) ? 'bg-btn-primary border-border-selected' : 'border-border-hover hover:border-border-hover',
                  ]"
                  @click="toggleRow(i)"
                >
                  <svg v-if="selected.has(i)" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6l3 3 5-5" /></svg>
                </div>
              </td>
              <td
                v-for="col in columns"
                :key="col.key"
                class="px-[12px] py-[10px] text-[13px] text-content-primary"
              >
                <slot :name="'cell-' + col.key" :row="row" :value="row[col.key]" :index="i" :editMode="editMode">
                  {{ row[col.key] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Mobile: card view -->
    <div class="sm:hidden flex flex-col gap-[8px]">
      <div
        v-for="(row, i) in rows"
        :key="i"
        :class="[
          'border border-border rounded-[12px] bg-surface p-[14px] transition-colors',
          selected.has(i) ? 'border-border-selected bg-surface-selected' : '',
        ]"
      >
        <div class="flex items-start gap-[10px]">
          <div
            v-if="selectable"
            :class="[
              'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 mt-[2px]',
              selected.has(i) ? 'bg-btn-primary border-border-selected' : 'border-border-hover',
            ]"
            @click="toggleRow(i)"
          >
            <svg v-if="selected.has(i)" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6l3 3 5-5" /></svg>
          </div>

          <div class="flex-1 min-w-0">
            <div class="grid grid-cols-2 gap-x-[12px] gap-y-[8px]">
              <div v-for="col in columns" :key="col.key">
                <div class="text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]">{{ col.label }}</div>
                <div class="text-[13px] text-content-primary mt-[1px] truncate">
                  <slot :name="'cell-' + col.key" :row="row" :value="row[col.key]" :index="i" :editMode="editMode">
                    {{ row[col.key] }}
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
