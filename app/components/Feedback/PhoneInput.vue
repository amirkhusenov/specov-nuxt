<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import IMask from 'imask'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', event: FocusEvent): void
  (e: 'input', event: InputEvent): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)
let mask: any = null

onMounted(() => {
  if (!inputRef.value) return

  mask = IMask(inputRef.value, {
    mask: '+{7} (000) 000-00-00',
    lazy: false
  })

  mask.on('accept', () => {
    const unmasked = mask.unmaskedValue || ''
    emit('update:modelValue', unmasked)
    // Эмитим input для реактивности (опционально, но помогает)
    emit('input', new InputEvent('input'))
  })
})

// Синхронизация при внешнем изменении
watch(
  () => props.modelValue,
  (newVal) => {
    if (mask && mask.unmaskedValue !== newVal) {
      mask.unmaskedValue = newVal
    }
  },
  { immediate: true }
)

function handleBlur(event: FocusEvent) {
  emit('blur', event)
}

onBeforeUnmount(() => {
  mask?.destroy()
})
</script>

<template>
  <input
    ref="inputRef"
    type="tel"
    :value="mask?.value ?? ''"
    @blur="handleBlur"
    class="shadow-none w-full h-11 bg-white! text-gray-500 placeholder-gray-400 border-transparent rounded-lg py-2.5 px-3.5 focus:outline-none ring-0 appearance-none"
    placeholder="+7 (999) 999-99-99"
  />
</template>