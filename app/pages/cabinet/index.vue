<script setup lang="ts">
const company = {
  name: 'ООО «Спецов»',
  inn: '9729198725',
  kpp: '772801001'
}

const manager = {
  name: 'Прокопьева Ирина Сергеевна',
  phone: '+8 (922) 107-92-77',
  email: 'i.prokopeva@instrument.ru'
}

const credit = {
  available: 530712.27,
  total: 1000000,
  general: 469287.73,
  overdue: 0
}

const orders = [
  { id: '481439875', date: '15 августа', amount: 9874.92, status: 'Готов к выдаче', statusColor: 'green' },
  { id: '481439875', date: '8 августа', amount: 9874.92, status: 'В обработке', statusColor: 'orange' }
]

const discounts = [
  { percent: 24, category: 'Силовое оборудование' },
  { percent: 22, category: 'Ручной инструмент' }
]

const contract = {
  number: '102859103',
  period: 'с 22 января 2016 по 31 декабря 2050',
  prolongation: 'Нет',
  paymentDelay: '30 дней',
  productLimit: '0.00 ₽',
  remainingLimit: '0.00 ₽'
}

const appeals = [
  {
    date: '15 августа',
    status: 'В работе',
    title: 'Поддержка по работе личного кабинета',
    text: 'Добрый день. Не работает строка поиска. Хоть по наим...'
  },
  {
    date: '1 июня',
    status: 'В работе',
    title: 'Другое',
    text: 'Добрый день. Необходимо внести изменения в личные...'
  }
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price).replace(',', ',') + ' ₽'
}

const creditPercent = computed(() => {
  return (credit.available / credit.total) * 100
})
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
            <CabinetPageHeader title="Кабинет" back-to="/cabinet/navigation" />

            <div class="flex flex-col xl:flex-row justify-between gap-4 min-[510px]:gap-6">
              <div class="w-full xl:w-[590px] flex flex-col gap-4 min-[510px]:gap-6">
                <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                    <img src="/image/cabinet/building.svg" alt="">
                  </div>
                  <div>
                    <div class="font-semibold text-(--Text-950)">{{ company.name }}</div>
                    <div class="text-sm text-(--Text-600)">ИНН {{ company.inn }} КПП {{ company.kpp }}</div>
                  </div>
                </div>
              </div>

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                    <img src="/image/cabinet/pie-chart.svg" alt="">
                  </div>
                  <h3 class="text-xl font-bold text-(--Text-950)">Кредиторская задолженность</h3>
                </div>

                <div class="mb-4">
                  <div class="text-base font-semibold text-(--Text-950) mb-2">Доступный лимит по договору</div>
                  <div class="h-2 bg-[#e9eaeb] rounded-full overflow-hidden">
                    <div class="h-full bg-(--Brand-600) rounded-full" :style="{ width: creditPercent + '%' }"></div>
                  </div>
                  <div class="flex justify-between mt-2 text-sm">
                    <span class="text-(--Brand-950) font-medium">{{ formatPrice(credit.available) }}</span>
                    <span class="text-(--Text-600)">{{ formatPrice(credit.total) }}</span>
                  </div>
                </div>

                <div class="grid grid-cols-1 min-[510px]:grid-cols-2 gap-2 pt-4">
                  <div class="bg-(--Background) p-4 rounded-2xl">
                    <div class="text-xl font-semibold text-(--Text-950)">{{ formatPrice(credit.general) }}</div>
                    <div class="text-sm text-(--Text-600)">Общая кредиторская задолженность</div>
                  </div>
                  <div class="bg-(--Background) p-4 rounded-2xl">
                    <div class="text-xl font-semibold text-(--Error-500)">{{ formatPrice(credit.overdue) }}</div>
                    <div class="text-sm text-(--Text-600)">Просроченная кредиторская задолженность</div>
                  </div>
                </div>
              </div>

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                      <img src="/image/sidebar/shopping-bag.svg" alt="">
                    </div>
                    <h3 class="text-lg font-bold text-(--Text-950)">Заказы</h3>
                  </div>
                  <NuxtLink to="/cabinet/orders" class="flex items-center gap-1 text-sm text-(--Text-950) font-semibold border border-(--border) py-2 px-4 bg-(--Background) rounded-lg">
                    Все
                    <img src="/image/cabinet/arrow-right.svg" alt="">
                  </NuxtLink>
                </div>

                <div class="flex flex-col gap-2">
                  <div v-for="(order, index) in orders" :key="index" class="flex items-center justify-between py-3 bg-(--Background) p-4 rounded-2xl">
                    <div>
                      <div class="font-bold text-(--Text-950)">{{ order.id }}</div>
                      <div class="text-sm text-(--Text-600)">от {{ order.date }}</div>
                    </div>
                    <div class="text-right">
                      <div class="font-bold text-(--Text-950)">{{ formatPrice(order.amount) }}</div>
                      <div class="flex items-center gap-1.5 justify-end">
                        <span class="w-1.5 h-1.5 rounded-full" :class="order.statusColor === 'green' ? 'bg-(--Brand-700)' : 'bg-(--Warning-600)'"></span>
                        <span class="text-sm" :class="order.statusColor === 'green' ? 'text-(--Brand-700)' : 'text-(--Warning-600)'">{{ order.status }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                    <img src="/image/sidebar/sale.svg" alt="">
                  </div>
                  <h3 class="text-lg font-bold text-(--Text-950)">Скидки</h3>
                </div>

                <div class="grid grid-cols-1 min-[510px]:grid-cols-2 gap-2">
                  <div v-for="(discount, index) in discounts" :key="index" class="bg-(--Background) p-4 rounded-2xl">
                    <div class="text-xl font-bold text-(--Text-950)">{{ discount.percent }}%</div>
                    <div class="text-sm text-(--Text-600)">{{ discount.category }}</div>
                  </div>
                </div>
              </div>

              <ContractCard :contract="contract" :show-download-button="true" />
            </div>

            <div class="w-full xl:w-[280px] flex flex-col gap-4 min-[510px]:gap-6">
            <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-(--Background) rounded-lg flex items-center justify-center mb-3">
                    <img src="/image/cabinet/user-square.svg" alt="">
                  </div>
                  <div class="text-sm text-(--Text-600) mb-1">Персональный менеджер</div>
                  <div class="font-semibold text-(--Text-950) mb-3 text-">{{ manager.name }}</div>
                  <a :href="'tel:' + manager.phone" class="flex items-center gap-2 text-sm text-(--Text-600) hover:text-(--Text-950) mb-2">
                    <img src="/image/cabinet/phone-call.svg" alt="">
                    {{ manager.phone }}
                  </a>
                  <a :href="'mailto:' + manager.email" class="flex items-center gap-2 text-sm text-(--Text-600) hover:text-(--Text-950)">
                    <img src="/image/cabinet/mail.svg" alt="">
                    {{ manager.email }}
                  </a>
                </div>
              </div>

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-start justify-between mb-5">
                  <div class="flex items-start gap-3 flex-col">
                    <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                      <img src="/image/sidebar/annotation-dots.svg" alt="">
                    </div>
                    <h3 class="font-bold text-(--Text-950) text-xl">Обращения</h3>
                  </div>
                  <NuxtLink to="/cabinet/appeals" class="flex items-center gap-1 text-sm text-(--Text-950) font-semibold border border-(--border) py-2 px-4 bg-(--Background) rounded-lg">
                    Все
                    <img src="/image/cabinet/arrow-right.svg" alt="">
                  </NuxtLink>
                </div>

                <div class="flex flex-col gap-2">
                  <div v-for="(appeal, index) in appeals" :key="index" class="bg-(--Background) p-4 rounded-2xl">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-sm text-(--Text-600)">{{ appeal.date }}</span>
                      <span class="flex items-center gap-1.5 text-xs font-medium">
                        <span class="w-1.5 h-1.5 rounded-full bg-(--Brand-700)"></span>
                        <span class="text-(--Brand-700)">{{ appeal.status }}</span>
                      </span>
                    </div>
                    <div class="font-semibold text-(--Text-950) text-sm mb-1">{{ appeal.title }}</div>
                    <div class="text-sm text-(--Text-600) line-clamp-2">{{ appeal.text }}</div>
                  </div>
                </div>

                <button class="w-full mt-4 px-4 py-2.5 bg-(--Brand-950) text-white text-sm font-medium rounded-lg hover:bg-(--Brand-700) transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <img src="/image/sidebar/annotation-dots.svg" alt="" class="brightness-0 invert" />
                  Новое обращение
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

