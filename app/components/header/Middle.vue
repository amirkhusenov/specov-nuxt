<script setup lang="ts">
import IconsCompare from '@/components/icons/Compare.vue'
import IconsFavorite from '@/components/icons/Favorite.vue'
import IconsCart from '@/components/icons/Cart.vue'
const buttons = [
  {
    src: '/compare',
    icon: IconsCompare
  },
  {
    src: '/favorite',
    icon: IconsFavorite
  },
  {
    src: '/cart',
    icon: IconsCart
  },
]
</script>

<template>
  <div class="flex-wrap justify-between sm:flex-nowrap max-w-(--container) w-full m-auto px-4 gap-4 self-stretch
    items-center sm:justify-center flex">

    <HeaderLogo />

    <HeaderCatalogButton class="hidden lg:flex" />

    <HeaderSearch class="w-full order-1 sm:order-0" />

    <!-- buttons -->
    <a v-for="item in buttons" :href="item.src"
      class="hidden lg:flex border-zinc-300 p-[11px] justify-spacse-between h-11 w-11 flex-col bg-white items-center border border-solid rounded-lg"
      caption="Корзина">
      <span class="h-5 w-5">
        <component :is="item.icon" />
      </span>
    </a>

    <HeaderLogin class="hidden lg:flex" />

    <!-- Мобильное меню -->
    <div class="order-0 lg:hidden">
      <USlideover :close="{
        color: 'primary',
        class: 'rounded-full'
      }">
        <HeaderBurger />

        <template #body>
          <div class="flex items-center flex-col gap-5">
            <HeaderPhone :mobile="true" />
            <HeaderNav />
            <HeaderCatalogButton />
            <!-- buttons -->
            <div class="flex justify-center gap-3 flex-wrap">
              <a v-for="item in buttons" :href="item.src"
                class="flex border-zinc-300 p-[11px] justify-center h-11 w-11 flex-col bg-white items-center border border-solid rounded-lg">
                <span class="h-5 w-5">
                  <component :is="item.icon" />
                </span>
              </a>
            </div>
            <HeaderLogin />
          </div>
        </template>
      </USlideover>
    </div>

  </div>
</template>