<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  const currentPath = route.path.replace(/\/$/, '') || '/'
  const targetPath = path.replace(/\/$/, '') || '/'
  
  if (targetPath === '/cabinet') {
    return currentPath === targetPath
  }
  
  return currentPath === targetPath || currentPath.startsWith(targetPath + '/')
}
</script>

<template>
  <div class="pt-[117px] sm:pt-[73px] lg:pt-[173px] min-h-screen bg-(--Background)">
    <Header />

    <main class="pt-8 pb-23">
      <div class="max-w-(--container) mx-auto px-4 min-[510px]:px-8 xl:px-0">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-2xl font-regular text-(--Text-950) font-['Russo_One']">ООО «Название компании»</h1>
          <button class="rounded-lg transition-colors border border-(--border) p-3 max-[510px]:p-2 bg-(--Base-White) cursor-pointer">
            <img src="/image/cabinet/bell.svg" alt="">
          </button>
        </div>

        <nav class="bg-(--Base-White) rounded-xl p-4">
          <NuxtLink
            to="/cabinet"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet') && !route.path.includes('/navigation') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/building.svg" alt="Кабинет" width="20" height="20" :class="isActive('/cabinet') && !route.path.includes('/navigation') ? 'filter-brand' : ''" />
            <span>Кабинет</span>
          </NuxtLink>

          <div class="h-px bg-(--border) my-2 mx-3"></div>

          <NuxtLink
            to="/cabinet/orders"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/orders') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/shopping-bag.svg" alt="Заказы" width="20" height="20" :class="isActive('/cabinet/orders') ? 'filter-brand' : ''" />
            <span>Заказы</span>
          </NuxtLink>

          <NuxtLink
            to="/cabinet/promo"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/promo') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/promo.svg" alt="Промокоды" width="20" height="20" :class="isActive('/cabinet/promo') ? 'filter-brand' : ''" />
            <span>Промокоды</span>
          </NuxtLink>

          <NuxtLink
            to="/cabinet/discounts"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/discounts') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/sale.svg" alt="Скидки" width="20" height="20" :class="isActive('/cabinet/discounts') ? 'filter-brand' : ''" />
            <span>Скидки</span>
          </NuxtLink>

          <div class="h-px bg-(--border) my-2 mx-3"></div>

          <NuxtLink
            to="/cabinet/appeals"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/appeals') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/annotation-dots.svg" alt="Обращения" width="20" height="20" :class="isActive('/cabinet/appeals') ? 'filter-brand' : ''" />
            <span>Обращения</span>
          </NuxtLink>

          <div class="h-px bg-(--border) my-2 mx-3"></div>

          <NuxtLink
            to="/cabinet/addresses"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/addresses') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/marker.svg" alt="Адреса доставки" width="20" height="20" :class="isActive('/cabinet/addresses') ? 'filter-brand' : ''" />
            <span>Адреса доставки</span>
          </NuxtLink>

          <NuxtLink
            to="/cabinet/data"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/data') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/clipboard.svg" alt="Данные юрлица" width="20" height="20" :class="isActive('/cabinet/data') ? 'filter-brand' : ''" />
            <span>Данные юрлица</span>
          </NuxtLink>

          <NuxtLink
            to="/cabinet/users"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/users') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/users.svg" alt="Пользователи" width="20" height="20" :class="isActive('/cabinet/users') ? 'filter-brand' : ''" />
            <span>Пользователи</span>
          </NuxtLink>

          <NuxtLink
            to="/cabinet/notifications"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/cabinet/notifications') ? 'bg-[#E6F4EF] text-(--Brand-700)' : 'text-[#535862] hover:bg-(--Background)'"
          >
            <img src="/image/sidebar/bell-ringing.svg" alt="Уведомления" width="20" height="20" :class="isActive('/cabinet/notifications') ? 'filter-brand' : ''" />
            <span>Уведомления</span>
          </NuxtLink>
        </nav>
      </div>
    </main>
  </div>
</template>

<style scoped>
.filter-brand {
  filter: brightness(0) saturate(100%) invert(36%) sepia(81%) saturate(465%) hue-rotate(113deg) brightness(95%) contrast(93%);
}
</style>

