<script setup lang="ts">
const discounts = [
  {
    percent: '24%',
    category: 'Силовое оборудование',
    icon: '/image/cabinet/power-equipment.svg',
    bgColor: 'bg-[#FEE4E2]'
  },
  {
    percent: '22%',
    category: 'Ручной инструмент',
    icon: '/image/cabinet/hand-tools.svg',
    bgColor: 'bg-[#F5F1DF]'
  }
]
</script>

<template>
  <div class="pt-[117px] sm:pt-[73px] lg:pt-[173px] min-h-screen bg-(--Background)">
    <Header />

    <main class="pt-8 pb-23">
      <div class="max-w-(--container) mx-auto px-4 min-[510px]:px-8 xl:px-0">
        <div class="flex gap-8 min-[1280px]:mx-4.5">
          <div class="hidden xl:block">
            <Sidebar />
          </div>

          <div class="flex-1 flex flex-col gap-4 min-[510px]:gap-6">
            <CabinetPageHeader title="Скидки" back-to="/cabinet/navigation" />

            <div class="grid grid-cols-1 min-[510px]:grid-cols-2 gap-2">
              <DiscountCard 
                v-for="(discount, index) in discounts" 
                :key="index"
                :discount="discount"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

