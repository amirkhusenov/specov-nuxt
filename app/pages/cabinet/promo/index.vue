<script setup lang="ts">
const promocodes = [
  {
    title: '-30% на первый заказ для юрлиц',
    date: 'до 31 августа',
    condition: 'на заказ от 500₽',
    description: 'Максимальная скидка по промокоду — 3000 рублей. Суммируется с другими акциями',
    code: 'GET400',
    label: 'Промокод'
  },
  {
    title: 'Скидка 5% на выделенные бренды',
    date: 'до 31 августа',
    condition: '',
    description: 'Максимальная скидка по промокоду — 5000 рублей. Суммируется с другими акциями. Не действует на заказы юрлиц. Список брендов: Inforce, Gigant, Grizzly, AEG, Ryobi, KEYANG, SHTOK, DCA, Atlet, NEO Tools, Topex, Top Tools, Graphite, QBRICK, KENDO, Mundial, Richip, Sata, Sjal, Senci, Bucktool, X-MAX, EX KASEI, TRUEGREEN, LIFAN, Richip, Worten.',
    code: 'PROMO5000',
    label: 'Промокод'
  },
  {
    title: '-3000 рублей на первый заказ от 10 000 рублей для b2b-клиента',
    date: 'до 31 августа',
    condition: 'для заказов от 10 000 до 29 999 рублей',
    description: 'Оформите заказ на сумму от 10 000 до 29 999 рублей и получите выгоду.',
    code: 'B2B3000',
    label: 'Промокод'
  }
]

const copyPromocode = (code: string) => {
  navigator.clipboard.writeText(code)
}

const usePromocode = (code: string) => {
  console.log('Использовать промокод:', code)
}
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
            <CabinetPageHeader title="Промокоды" back-to="/cabinet/navigation" />

            <div class="flex flex-col gap-4 min-[510px]:gap-6">
              <PromocodeCard 
                v-for="(promo, index) in promocodes" 
                :key="index"
                :promo="promo"
                @copy="copyPromocode"
                @use="usePromocode"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
