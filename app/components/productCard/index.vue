<script setup lang="ts">
import type { ProductCard } from '~/types/product'

interface Props {
	item: ProductCard
}

const props = defineProps<Props>()

</script>


<template>
  <div class="grid gap-4">
    <div
      class="relative flex items-center justify-center h-[200px] sm:h-[280px] rounded-2xl overflow-hidden border border-(--border)">
      <div class="absolute top-3 right-3 flex flex-row gap-2">

        <ProductCardFavorite />
        <ProductCardСompare />

      </div>

      <img :src="props.item.image" alt="item.title">

    </div>
    <div class="flex flex-col justify-between items-start self-stretch">
      <div class="gap-2 flex flex-wrap sm:items-center flex-col sm:flex-row">
        <div class="leading-[30px] text-zinc-950 font-semibold text-xl">
          {{ props.item.price.toLocaleString('ru-RU') }} ₽
        </div>
        <div v-if="props.item.oldPrice" class="gap-2 flex justify-center items-center">
          <div class="text-zinc-400 line-through">
            {{ props.item.oldPrice.toLocaleString('ru-RU') }} ₽
          </div>
          <div class="bg-[seagreen] leading-[18px] text-center text-white text-xs px-1.5 rounded-md">
            -{{ props.item.discont }}% </div>
        </div>
      </div>
      <div class="min-h-10">
        <p class="text-sm text-gray-600 line-clamp-2 overflow-ellipsis">{{ props.item.title }}</p>
      </div>
      <div class="w-full gap-4 font-semibold flex flex-wrap sm:flex-nowrap justify-center pt-5 items-center">
        <ProductCardBasket />
        <ProductCardCounter />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS стили */
</style>