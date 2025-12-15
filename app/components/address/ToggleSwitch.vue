<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label: string
  value: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <div class="flex items-center gap-3">
    <label class="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        :checked="modelValue"
        @change="handleChange"
        class="sr-only peer"
      >
      <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--Brand-600)"></div>
    </label>
    <div class="flex-1">
      <div class="text-xs text-(--Text-600) font-medium">{{ label }}</div>
      <div class="text-base text-(--Text-950) font-semibold">{{ value }}</div>
    </div>
  </div>
</template>

