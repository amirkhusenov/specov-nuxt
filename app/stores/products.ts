import { defineStore } from 'pinia'
import { popularProducts } from '~/data/products'
import { buildingProducts } from '~/data/products'
import { gardenProducts } from '~/data/products'

export const useProductsStore = defineStore('products', () => {
  const popular = ref(popularProducts)
  const building = ref(buildingProducts)
  const garden = ref(gardenProducts)

  return {
    popular,
    building,
    garden
  }

})