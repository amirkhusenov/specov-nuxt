<script setup lang="ts">
const contactData = {
  contactPerson: 'mari_143@mail.ru',
  phone: '+7 (345) 258-18-63',
  email: 'info@spetsov.ru'
}

const organizationData = {
  name: 'СПЕЦОВ ООО',
  inn: '7204059728',
  personalId: '133019',
  clientCode1C: '15554',
  branch: 'Филиал в Екатеринбурге'
}

const contract = {
  number: '102859103',
  period: 'с 22 января 2016 по 31 декабря 2050',
  prolongation: 'Нет',
  paymentDelay: '30 дней',
  productLimit: '0.00 ₽',
  remainingLimit: '0.00 ₽'
}

const passwordData = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const handleEditPhone = () => {
}

const handleEditEmail = () => {
}

const handleSavePassword = () => {
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
            <CabinetPageHeader title="Мои данные" back-to="/cabinet/navigation" />

            <div class="flex flex-col gap-4 min-[510px]:gap-6 w-full xl:max-w-[590px]">
              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                    <img src="/image/cabinet/user-square.svg" alt="">
                  </div>
                  <h3 class="text-lg font-bold text-(--Text-950)">Контактные данные</h3>
                </div>

                <div class="flex flex-col gap-4">
                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Контактное лицо</label>
                    <input
                      type="text"
                      :value="contactData.contactPerson"
                      readonly
                      class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                    >
                  </div>

                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Телефон</label>
                    <div class="relative">
                      <input
                        type="tel"
                        :value="contactData.phone"
                        readonly
                        class="w-full px-4 py-2.5 pr-12 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                      >
                      <button
                        @click="handleEditPhone"
                        class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center cursor-pointer"
                      >
                        <img src="/image/cabinet/edit.svg" alt="">
                      </button>
                    </div>
                  </div>

                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Email</label>
                    <div class="relative">
                      <input
                        type="email"
                        :value="contactData.email"
                        readonly
                        class="w-full px-4 py-2.5 pr-12 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                      >
                      <button
                        @click="handleEditEmail"
                        class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center cursor-pointer"
                      >
                        <img src="/image/cabinet/edit.svg" alt="">
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <OrganizationCard :organization="organizationData" />

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
                    <img src="/image/cabinet/passcode.svg" alt="">
                  </div>
                  <h3 class="text-lg font-bold text-(--Text-950)">Изменить пароль</h3>
                </div>

                <div class="flex flex-col gap-4">
                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Текущий пароль</label>
                    <input
                      v-model="passwordData.currentPassword"
                      type="password"
                      class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                    >
                  </div>

                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Новый пароль</label>
                    <input
                      v-model="passwordData.newPassword"
                      type="password"
                      class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                    >
                  </div>

                  <div>
                    <label class="text-sm text-(--Text-600) mb-2 block">Подтвердите пароль</label>
                    <input
                      v-model="passwordData.confirmPassword"
                      type="password"
                      class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm"
                    >
                  </div>

                  <button
                    @click="handleSavePassword"
                    class="px-4 py-2.5 mt-2 bg-(--Background) text-(--Text-950) text-base font-semibold rounded-lg hover:bg-(--border) transition-colors cursor-pointer"
                  >
                    Сохранить
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

