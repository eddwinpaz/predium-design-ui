<script setup lang="ts">
import { ref, watch } from 'vue'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
  icon?: string
}

const props = withDefaults(
  defineProps<{
    items: TreeNode[]
    defaultExpanded?: boolean
    depth?: number
  }>(),
  {
    defaultExpanded: false,
    depth: 0,
  }
)

function getAllIds(nodes: TreeNode[]): string[] {
  const ids: string[] = []
  for (const node of nodes) {
    if (node.children?.length) {
      ids.push(node.id)
      ids.push(...getAllIds(node.children))
    }
  }
  return ids
}

const expanded = ref<Set<string>>(
  props.defaultExpanded ? new Set(getAllIds(props.items)) : new Set()
)

watch(
  () => props.defaultExpanded,
  (val) => {
    if (val) {
      expanded.value = new Set(getAllIds(props.items))
    } else {
      expanded.value = new Set()
    }
  }
)

function toggle(id: string) {
  const next = new Set(expanded.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  expanded.value = next
}
</script>

<template>
  <ul :class="['text-sm', depth === 0 ? '' : 'ml-4']">
    <li v-for="node in items" :key="node.id">
      <button
        @click="toggle(node.id)"
        class="flex items-center gap-1.5 w-full px-2 py-1.5 rounded hover:bg-bg-secondary transition-colors text-left"
      >
        <svg
          v-if="node.children?.length"
          :class="[
            'w-4 h-4 text-content-tertiary transition-transform',
            expanded.has(node.id) ? 'rotate-90' : '',
          ]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
        <span v-else class="w-4" />
        <span class="text-content-primary">{{ node.label }}</span>
      </button>
      <TreeView
        v-if="node.children?.length && expanded.has(node.id)"
        :items="node.children"
        :depth="depth + 1"
        :default-expanded="defaultExpanded"
      />
    </li>
  </ul>
</template>
