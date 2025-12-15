<script setup lang="ts">
interface Promocode {
  title: string
  date: string
  condition?: string
  description: string
  code: string
  label: string
}

defineProps<{
  promo: Promocode
}>()

const emit = defineEmits<{
  copy: [code: string]
  use: [code: string]
}>()

const handleCopy = (code: string) => {
  emit('copy', code)
}

const handleUse = (code: string) => {
  emit('use', code)
}
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-4 min-[510px]:p-5 flex flex-col min-[510px]:flex-row lg:flex-row gap-4 min-[510px]:gap-5">
    <div class="flex flex-col min-[510px]:flex-row gap-3 flex-1">
      <div class="w-10 h-10 bg-[#DCFCE7] rounded-lg flex items-center justify-center shrink-0">
        <img src="/image/cabinet/sale-green.svg" alt="" class="w-5 h-5">
      </div>
      <div class="flex-1">
        <h3 class="text-base font-bold text-(--Text-950) mb-2">{{ promo.title }}</h3>
        <div class="text-sm text-(--Text-600) mb-2">
          {{ promo.date }}
          <template v-if="promo.condition">
            · {{ promo.condition }}
          </template>
        </div>
        <p class="text-sm text-(--Text-600)">{{ promo.description }}</p>
      </div>
    </div>

    <PromocodeCodeBlock 
      :code="promo.code"
      :label="promo.label"
      @copy="handleCopy"
      @use="handleUse"
    />
  </div>
</template>

