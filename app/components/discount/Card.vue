<script setup lang="ts">
interface Discount {
  percent: string
  category: string
  icon: string
  bgColor: string
}

defineProps<{
  discount: Discount
}>()
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-4 flex items-start gap-3">
    <div 
      :class="['w-11 h-11 rounded-lg shrink-0 flex items-center justify-center', discount.bgColor]"
    >
      <img :src="discount.icon" alt="" class="w-6 h-6">
    </div>
    <div class="flex-1">
      <div class="text-2xl font-bold text-(--Text-950) mb-1">{{ discount.percent }}</div>
      <div class="text-sm text-(--Text-600)">{{ discount.category }}</div>
    </div>
  </div>
</template>

