<script setup lang="ts">
const products = [
  { article: '67502', name: 'Ведро гибкое сверхпрочно...', image: '/image/products/img-13.png', quantity: 80, pricePerUnit: 217.60, sum: 25600.00, discount: 32, toPay: 17408.00 },
  { article: '80881', name: 'Валик для внутренних раб...', image: '/image/products/img-14.png', quantity: 30, pricePerUnit: 134.94, sum: 5190.00, discount: 22, toPay: 4048.20 },
  { article: '85510', name: 'Шпательная лопатка из не...', image: '/image/products/img-15.png', quantity: 20, pricePerUnit: 127.56, sum: 3270.80, discount: 22, toPay: 2551.20 },
]

const orders = [
  {
    id: '481439875',
    date: '15 августа',
    productCount: 2,
    user: 'Волосникова Мария',
    email: null,
    total: 9874.92,
    status: 'Готов к выдаче',
    statusColor: 'green',
    products: products
  },
  {
    id: '481439875',
    date: '15 августа',
    productCount: 13,
    user: null,
    email: 'mari_143@mail.ru',
    total: 9874.92,
    status: 'Готов к выдаче',
    statusColor: 'green',
    products: products
  },
  {
    id: '481439875',
    date: '15 августа',
    productCount: 3,
    user: null,
    email: 'mari_143@mail.ru',
    total: 9874.92,
    status: 'Готов к выдаче',
    statusColor: 'green',
    products: products
  },
  {
    id: '481439875',
    date: '15 августа',
    productCount: 13,
    user: null,
    email: 'mari_143@mail.ru',
    total: 9874.92,
    status: 'Готов к выдаче',
    statusColor: 'green',
    showRepeatButton: true,
    products: products
  },
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
            <CabinetPageHeader 
              title="Заказы" 
              back-to="/cabinet/navigation"
              add-button-text="Новый заказ"
              add-button-breakpoint="min-[870px]:inline"
              add-button-class="p-3 min-[870px]:px-4 min-[870px]:py-3"
            />

            <div class="bg-(--Base-White) rounded-xl p-4 min-[870px]:p-5 overflow-hidden">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-sm text-(--Text-600)">Сортировка:</span>
                <button class="flex items-center gap-1 text-sm text-(--Brand-700) font-medium cursor-pointer">
                  Все заказы
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Введите артикул или наименование товара"
                  class="w-full px-4 py-3 border border-(--border) rounded-lg text-sm text-(--Text-600) placeholder:text-(--Text-600) focus:outline-none focus:border-(--Brand-600)"
                >
                <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-(--Text-600)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

              <div class="hidden md:grid grid-cols-[120px_1fr_1fr_180px_40px] xl:grid-cols-[160px_1fr_1fr_180px_40px] gap-4 px-4 py-3 text-sm text-(--Text-600) mb-2">
                <div>Заказ</div>
                <div>Кол-во товаров</div>
                <div>Пользователь</div>
                <div class="text-right">Сумма и статус</div>
                <div></div>
              </div>

              <div class="flex flex-col gap-2">
                <OrdersCards 
                  v-for="(order, index) in orders" 
                  :key="index" 
                  :order="order" 
                  :index="index" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

