<script setup lang="ts">
interface Props {
  heading: string
  description: string
  buttonLabel?: string
  image?: string
  backgroundColor?: string
  color?: string
}

withDefaults(defineProps<Props>(), {
  buttonLabel: undefined,
  image: undefined,
  backgroundColor: '#276EF1',
  color: 'white',
})

defineEmits<{
  action: []
}>()
</script>

<template>
  <div
    :class="['rounded-2xl overflow-hidden relative']"
    :style="{ backgroundColor, color }"
  >
    <div class="flex">
      <div class="flex-1 p-6">
        <h3 class="text-lg font-bold mb-1">{{ heading }}</h3>
        <p class="text-sm opacity-90 mb-4">{{ description }}</p>
        <button
          v-if="buttonLabel"
          class="px-4 py-2 text-sm font-medium rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
          @click="$emit('action')"
        >
          {{ buttonLabel }}
        </button>
      </div>
      <div v-if="image" class="w-32 flex items-end justify-end p-4">
        <img :src="image" :alt="heading" class="max-w-full max-h-24 object-contain" />
      </div>
    </div>
  </div>
</template>
