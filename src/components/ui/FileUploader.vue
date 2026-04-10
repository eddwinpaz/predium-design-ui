<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  accept?: string
  multiple?: boolean
  maxSize?: number
  disabled?: boolean
  label?: string
}>(), {
  accept: '',
  multiple: false,
  maxSize: 10 * 1024 * 1024,
  disabled: false,
  label: 'Drop files here or',
})

const emit = defineEmits<{
  upload: [files: File[]]
  error: [message: string]
}>()

const dragOver = ref(false)
const files = ref<File[]>([])
const fileInput = ref<HTMLInputElement | null>(null)

function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)} ${units[i]}`
}

function validateAndAdd(newFiles: File[]) {
  const valid: File[] = []
  for (const file of newFiles) {
    if (file.size > props.maxSize) {
      emit('error', `File "${file.name}" exceeds maximum size of ${formatSize(props.maxSize)}`)
      continue
    }
    valid.push(file)
  }
  if (valid.length) {
    if (props.multiple) {
      files.value = [...files.value, ...valid]
    } else {
      files.value = valid[0] ? [valid[0]] : []
    }
    emit('upload', files.value)
  }
}

function handleDrop(e: DragEvent) {
  dragOver.value = false
  if (props.disabled || !e.dataTransfer?.files.length) return
  validateAndAdd(Array.from(e.dataTransfer.files))
}

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (!target.files?.length) return
  validateAndAdd(Array.from(target.files))
  target.value = ''
}

function openFilePicker() {
  if (props.disabled) return
  fileInput.value?.click()
}

function removeFile(index: number) {
  files.value = files.value.filter((_, i) => i !== index)
}
</script>

<template>
  <div>
    <div
      :class="[
        'border-2 border-dashed rounded-xl p-8 text-center transition-colors',
        dragOver ? 'border-accent bg-accent-light' : 'border-border hover:border-content-tertiary',
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      ]"
      @dragover.prevent="!disabled && (dragOver = true)"
      @dragleave="dragOver = false"
      @drop.prevent="handleDrop"
      @click="openFilePicker"
    >
      <svg class="mx-auto w-10 h-10 text-content-tertiary mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p class="text-sm text-content-secondary">
        {{ label }} <span class="text-accent font-medium">browse</span>
      </p>
      <p class="text-xs text-content-tertiary mt-1">Maximum file size: {{ formatSize(maxSize) }}</p>
      <input
        ref="fileInput"
        type="file"
        :accept="accept"
        :multiple="multiple"
        class="hidden"
        @change="handleFileChange"
      />
    </div>

    <div v-if="files.length" class="mt-3 space-y-2">
      <div
        v-for="(file, i) in files"
        :key="i"
        class="flex items-center gap-3 px-3 py-2 bg-bg-secondary rounded-lg text-sm"
      >
        <svg class="w-4 h-4 text-content-tertiary shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="flex-1 truncate text-content-primary">{{ file.name }}</span>
        <span class="text-content-tertiary text-xs">{{ formatSize(file.size) }}</span>
        <button
          class="text-content-tertiary hover:text-negative cursor-pointer"
          @click.stop="removeFile(i)"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>
