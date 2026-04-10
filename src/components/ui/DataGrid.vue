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
        <h3 v-if="title" class="text-[15px] font-semibold text-[#000]">{{ title }}</h3>
        <!-- Selection count badge -->
        <span
          v-if="hasSelection"
          class="text-[12px] font-medium text-[#545454] bg-[#f6f6f6] px-[8px] py-[2px] rounded-full"
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
                : 'text-[#000] bg-[#f6f6f6] hover:bg-[#eee]',
            ]"
            @click="handleBulkAction(action.key)"
          >
            {{ action.label }} ({{ selected.size }})
          </button>
          <button
            class="px-[8px] py-[4px] text-[12px] font-medium text-[#000] hover:underline transition-colors"
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
            class="px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] text-[13px] sm:text-[14px] font-medium text-white bg-[#000] hover:bg-[#333] rounded-[8px] transition-colors"
            @click="exitEdit"
          >
            Done
          </button>
        </template>
      </div>
    </div>

    <!-- Desktop/Tablet: table -->
    <div class="hidden sm:block border border-[#e2e2e2] rounded-[12px] bg-white overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-[#e2e2e2]">
              <th v-if="selectable" class="w-[44px] px-[12px] py-[10px] text-left">
                <div
                  :class="[
                    'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors',
                    allSelected || someSelected ? 'bg-[#000] border-[#000]' : 'border-[#ccc] hover:border-[#999]',
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
                class="px-[12px] py-[10px] text-left text-[11px] font-medium text-[#999] uppercase tracking-[0.5px] whitespace-nowrap"
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
                'border-b border-[#e2e2e2] last:border-b-0 transition-colors',
                selected.has(i) ? 'bg-[#f0f4ff]' : 'hover:bg-[#fafafa]',
              ]"
            >
              <td v-if="selectable" class="w-[44px] px-[12px] py-[10px]">
                <div
                  :class="[
                    'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors',
                    selected.has(i) ? 'bg-[#000] border-[#000]' : 'border-[#ccc] hover:border-[#999]',
                  ]"
                  @click="toggleRow(i)"
                >
                  <svg v-if="selected.has(i)" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6l3 3 5-5" /></svg>
                </div>
              </td>
              <td
                v-for="col in columns"
                :key="col.key"
                class="px-[12px] py-[10px] text-[13px] text-[#000]"
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
          'border border-[#e2e2e2] rounded-[12px] bg-white p-[14px] transition-colors',
          selected.has(i) ? 'border-[#000] bg-[#f0f4ff]' : '',
        ]"
      >
        <div class="flex items-start gap-[10px]">
          <div
            v-if="selectable"
            :class="[
              'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 mt-[2px]',
              selected.has(i) ? 'bg-[#000] border-[#000]' : 'border-[#ccc]',
            ]"
            @click="toggleRow(i)"
          >
            <svg v-if="selected.has(i)" class="w-[11px] h-[11px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6l3 3 5-5" /></svg>
          </div>

          <div class="flex-1 min-w-0">
            <div class="grid grid-cols-2 gap-x-[12px] gap-y-[8px]">
              <div v-for="col in columns" :key="col.key">
                <div class="text-[10px] font-medium text-[#999] uppercase tracking-[0.5px]">{{ col.label }}</div>
                <div class="text-[13px] text-[#000] mt-[1px] truncate">
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
