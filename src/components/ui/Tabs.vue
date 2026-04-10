<script setup lang="ts">
interface Tab {
  key: string
  label: string
  count?: number
}

withDefaults(
  defineProps<{
    modelValue: string | number
    tabs: Tab[]
    fill?: boolean
  }>(),
  {
    fill: false,
  }
)

defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <div>
    <div :class="['flex border-b border-border', fill ? '' : 'gap-0']" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        role="tab"
        :aria-selected="modelValue === tab.key"
        :class="[
          'relative px-4 py-2.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer',
          fill ? 'flex-1 text-center' : '',
          modelValue === tab.key
            ? 'text-content-primary'
            : 'text-content-tertiary hover:text-content-secondary',
        ]"
        @click="$emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}<span v-if="tab.count != null" class="ml-1 text-content-tertiary">({{ tab.count }})</span>
        <span
          v-if="modelValue === tab.key"
          class="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-t-full"
        />
      </button>
    </div>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>
