<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string
  countryCode?: string
  disabled?: boolean
  error?: boolean
  size?: 'compact' | 'default' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  countryCode: '+1',
  disabled: false,
  error: false,
  size: 'default',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:countryCode': [value: string]
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'compact': return 'h-8 text-sm'
    case 'large': return 'h-12 text-base'
    default: return 'h-10 text-sm'
  }
})
</script>

<template>
  <div
    :class="[
      'flex border-2 rounded-[8px] overflow-hidden transition-colors',
      error ? 'border-[#e11900] bg-white' : '',
      !error && !disabled ? 'bg-[#f6f6f6] border-transparent hover:bg-[#eee] focus-within:!bg-white focus-within:!border-[#000]' : '',
      disabled ? 'opacity-40 bg-[#f6f6f6] border-transparent' : '',
    ]"
  >
    <select
      :value="countryCode"
      :disabled="disabled"
      :class="[
        'bg-bg-secondary border-r border-border px-2 text-sm font-medium outline-none cursor-pointer',
        sizeClass,
      ]"
      @change="emit('update:countryCode', ($event.target as HTMLSelectElement).value)"
    >
      <option value="+1">&#x1F1FA;&#x1F1F8; +1</option>
      <option value="+52">&#x1F1F2;&#x1F1FD; +52</option>
      <option value="+44">&#x1F1EC;&#x1F1E7; +44</option>
      <option value="+49">&#x1F1E9;&#x1F1EA; +49</option>
      <option value="+33">&#x1F1EB;&#x1F1F7; +33</option>
      <option value="+81">&#x1F1EF;&#x1F1F5; +81</option>
      <option value="+86">&#x1F1E8;&#x1F1F3; +86</option>
      <option value="+91">&#x1F1EE;&#x1F1F3; +91</option>
    </select>
    <input
      :value="modelValue"
      :disabled="disabled"
      type="tel"
      placeholder="(555) 123-4567"
      :class="['flex-1 outline-none px-3 text-sm bg-transparent', sizeClass]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
