<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import Compare from '~/components/icons/Compare.vue'
import Favorite from '~/components/icons/Favorite.vue'
import type ButtonVue from '~/components/section/Button.vue'

const isMoreText = ref(false)
const isMoreSpec = ref(false)

const popularProducts = useProductsStore().popular
const buildingProducts = useProductsStore().building
const gardenProducts = useProductsStore().garden

const route = useRoute()
const productId = route.params.id as string

const allProducts = [...popularProducts, ...buildingProducts, ...gardenProducts]

const product = allProducts.find(item => item.id == productId)

const specifications = [
  { label: 'Макс. крутящий момент', value: '6 Нм' },
  { label: 'Число скоростей', value: '1' },
  { label: 'Тип аккумулятора', value: 'Li-lon' },
  { label: 'Напряжение аккумулятора', value: '3.6 В' },
  { label: 'Устройство аккумулятора', value: 'встроенный' },
  { label: 'Вид упаковки', value: 'чемодан/кейс' },
  { label: 'Тип двигателя', value: 'щеточный' }
];

</script>

<template>
  <div class="pt-[117px] sm:pt-[73px] lg:pt-[173px] overflow-hidden [background:var(--Base-White)]">

    <Header />

    <Breadcrumbs />

    <main>
      <Section class="mb-6">
        <SectionContainer>

          <div class="flex gap-4 mb-4 justify-between">

            <div class="flex gap-2 sm:gap-4 flex-wrap">
              <p class="text-xs sm:text-sm leading-5 text-gray-600 font-medium">
                Код товара: 15561175
              </p>
              <div class="flex">

                <div class="flex">
                  <i class="flex items-center justify-center w-5 h-5">
                    <img src="/image/star.svg" alt="Star">
                  </i>
                  <i class="flex items-center justify-center w-5 h-5">
                    <img src="/image/star.svg" alt="Star">
                  </i>
                  <i class="flex items-center justify-center w-5 h-5">
                    <img src="/image/star.svg" alt="Star">
                  </i>
                  <i class="flex items-center justify-center w-5 h-5">
                    <img src="/image/star.svg" alt="Star">
                  </i>
                  <i class="flex items-center justify-center w-5 h-5">
                    <img src="/image/star.svg" alt="Star">
                  </i>
                </div>

                <p class="text-sm leading-5 text-(--Brand-700) font-medium">
                  15 отзывов
                </p>

              </div>
            </div>

            <div class="flex gap-6">
              <button class="flex items-center gap-1.5 text-gray-600 text-base leading-6 cursor-pointer">
                <i class="w-5 h-5 flex items-center justify-center">
                  <Compare />
                </i>
                <span class="hidden sm:block">
                  Сравнить
                </span>
              </button>
              <button class="flex items-center gap-1.5 text-gray-600 text-base leading-6 cursor-pointer">
                <i class="w-5 h-5 flex items-center justify-center">
                  <Favorite />
                </i>
                <span class="hidden sm:block">
                  В избранное
                </span>
              </button>
            </div>

          </div>

          <div class="flex flex-wrap sm:flex-nowrap gap-8">

            <!--col-1-->
            <div class="lg:max-w-[592px] min-w-0">
              <h1 class="mb-6 font-['Russo_One'] text-lg leading-7 sm:text-3xl sm:leading-10 tracking-[0] text-gray-950">
                {{ product?.title }}
              </h1>
              <ProductSliderDetail :imgs="product?.imgs" />
            </div>

            <!--col-2-->
            <div class="hidden lg:flex flex-col gap-10 items-start max-w-[280px]">

              <div class="flex flex-col gap-4">
                <div class="mb-4 font-sans font-bold text-base leading-6 text-black">
                  Характеристики
                </div>
                <div class="grid gap-4">
                  <p v-for="(item, i) in specifications" :key="i" class="flex gap-1 text-sm leading-5">
                    <span class="font-medium text-gray-600">
                      {{ item.label }}
                    </span>
                    <b class="font-bold text-gray-950">
                      {{ item.value }}
                    </b>
                  </p>
                </div>
                <button @click="isMoreSpec = !isMoreSpec"
                  class="flex gap-1.5 items-center text-sm leading-5 cursor-pointer text-gray-600">
                  {{ isMoreSpec ? 'Свернуть' : 'Все характеристики' }}
                  <i class="flex items-center justify-center w-5 h-5">
                    <ProductIconsAng />
                  </i>
                </button>
              </div>

              <div class="flex flex-col gap-4">
                <div class="mb-4 font-sans font-bold text-base leading-6 text-black">
                  О товаре
                </div>
                <p :class="[!isMoreText ? 'line-clamp-4 overflow-hidden' : '']"
                  class="text-sm leading-5 font-medium text-gray-600">
                  Предназначен для сверления, сверления с ударом и долбления (три режима) в таких материалах как
                  бетон, природный камень, дерево, металл
                  Предназначен для сверления, сверления с ударом и долбления (три режима) в таких материалах как
                  бетон, природный камень, дерево, металл
                  Предназначен для сверления, сверления с ударом и долбления (три режима) в таких материалах как
                  бетон, природный камень, дерево, металл
                </p>
                <button @click="isMoreText = !isMoreText"
                  class="flex gap-1.5 items-center text-sm leading-5 cursor-pointer text-gray-600">
                  {{ isMoreText ? 'Свернуть' : 'Читать далее' }}
                  <i class="flex items-center justify-center w-5 h-5">
                    <ProductIconsAng />
                  </i>
                </button>
              </div>

              <button
                class="flex gap-2 items-center bg-gray-100 rounded-2xl p-2 text-base leading-6 text-black cursor-pointer">
                <img class="w-10 h-9" src="/image/example.png" alt="Example">
                <span class="text-left font-bold">
                  Сопутствующие товары
                </span>
                <i class="flex items-center justify-center w-5 h-5">
                  <ProductIconsAng />
                </i>
              </button>

            </div>

            <!--col-3-->
            <div class="flex flex-col gap-6 sm:max-w-[280px] shrink-0 w-full">

              <div class="flex flex-col gap-6 bg-gray-100 rounded-lg p-6">

                <div>
                  <p class="text-[24px] leading-8 sm:text-[36px] sm:leading-11 text-gray-950 font-semibold">
                    {{ product?.price }} ₽
                  </p>
                  <span class="text-gray-600 text-sm leading-5 font-medium">
                    Цена за шт.
                  </span>
                </div>

                <div class="flex flex-col gap-2">
                  <ProductCounter class="justify-between! text-base!" />
                  <ProductBasketButton class="h-12 text-base! leading-6" />
                  <UButton
                    class="flex items-center justify-center h-12 cursor-pointer rounded-xl border border-(--border) text-(--Brand-950) text-base"
                    color="neutral">Быстрый заказ</UButton>

                </div>

              </div>

              <div class="flex flex-col gap-6 bg-gray-100 rounded-lg p-6">

                <div class="font-sans font-bold text-base leading-6 text-black">
                  Способы получения заказа
                </div>

                <div class="flex items-center gap-2 text-(--Brand-700)">
                  <span class="flex items-center justify-center w-5 h-5">
                    <ProductIconsShop />
                  </span>
                  <p class="text-sm leading-5 font-bold">
                    Самовывоз из магазина
                  </p>
                </div>

                <div class="text-sm leading-5 font-medium">
                  <p>
                    ул. 50 лет Октября, 118А
                  </p>
                  <span
                    class="text-(--Brand-700) font-bold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
                    Много
                  </span>
                </div>

                <div class="text-sm leading-5 font-medium">
                  <p>
                    ул. Горпищекомбинатовская, 1с1
                  </p>
                  <span
                    class="text-red-700 font-bold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
                    Мало
                  </span>
                </div>

                <div>
                  <div class="flex items-center gap-2 text-(--Brand-700)">
                    <span class="flex items-center justify-center w-5 h-5">
                      <ProductIconsCar />
                    </span>
                    <p class="text-sm leading-5 font-bold">
                      Доставка курьером
                    </p>
                  </div>
                  <p class="text-sm leading-5 font-medium">Завтра от 290 рублей</p>
                </div>
               
                <div>
                  <div class="flex items-center gap-2 text-(--Brand-700)">
                    <span class="flex items-center justify-center w-5 h-5">
                      <ProductIconsCube />
                    </span>
                    <p class="text-sm leading-5 font-bold">
                      Транспортная компания
                    </p>
                  </div>
                  <p class="text-sm leading-5 font-medium">СДЭК, DPD, Деловые линии</p>
                </div>


              </div>

            </div>

          </div>

        </SectionContainer>
      </Section>
    </main>

    <Footer />

  </div>
</template>
