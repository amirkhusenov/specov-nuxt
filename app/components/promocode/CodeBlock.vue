<script setup lang="ts">
const props = defineProps<{
  code: string
  label: string
}>()

const emit = defineEmits<{
  copy: [code: string]
  use: [code: string]
}>()

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    emit('copy', props.code)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

const handleUse = () => {
  emit('use', props.code)
}
</script>

<template>
  <div class="flex flex-col gap-3 w-full min-[510px]:w-auto lg:w-[200px] shrink-0">
    <div class="bg-(--Background) p-4 rounded-lg flex flex-row justify-between items-center min-[510px]:flex-col min-[510px]:items-start gap-1">
      <div class="text-xs font-medium text-(--Text-600)">{{ label }}</div>
      <div class="text-xl font-bold text-(--Brand-700)">{{ code }}</div>
    </div>
    <div class="flex flex-row justify-between items-center min-[510px]:flex-col gap-3">
    <button 
      @click="handleCopy"
      class="flex items-center justify-center gap-2 px-4 py-2.5 border border-(--border) bg-(--Background) text-sm font-semibold text-(--Brand-950) rounded-lg hover:bg-(--Base-White) transition-colors cursor-pointer w-full"
    >
      <img src="/image/cabinet/copy.svg" alt="" class="w-5 h-5">
      Копировать
    </button>
    <button 
      @click="handleUse"
      class="flex items-center justify-center gap-2 px-4 py-2.5 bg-(--Brand-950) text-white text-sm font-semibold rounded-lg hover:bg-(--Brand-700) transition-colors cursor-pointer w-full"
    >
      <img src="/image/cabinet/check-square-broken.svg" alt="" class="w-5 h-5">
      Использовать
    </button>
    </div>
  </div>
</template>

