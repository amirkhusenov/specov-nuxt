<script setup lang="ts">
interface User {
  id: string
  fullName: string
  email: string
  phone: string
  blocked: boolean
}

const activeTab = ref<'active' | 'blocked'>('active')

const users = ref<User[]>([
  {
    id: '1',
    fullName: 'Мейко Виталий Иванович',
    email: 'mvi@spetsov.ru',
    phone: '+7 (982) 934-47-88',
    blocked: false
  },
  {
    id: '2',
    fullName: 'Рыжкова Евгения Валерьевна',
    email: 'zakup3@spetsov.ru',
    phone: '+7 (906) 873-39-98',
    blocked: false
  },
  {
    id: '3',
    fullName: 'Ткачук А.Н',
    email: 'zakup1@spetsov.ru',
    phone: '+7 (912) 928-36-51',
    blocked: false
  },
  {
    id: '4',
    fullName: 'Волосникова Мария Николаевна',
    email: 'zakup2@spetsov.ru',
    phone: '+7 (345) 258-18-60',
    blocked: false
  }
])

const filteredUsers = computed(() => {
  return users.value.filter(user => 
    activeTab.value === 'active' ? !user.blocked : user.blocked
  )
})

const handleAddUser = () => {
}

const handleEdit = (userId: string) => {
}

const handleBlock = (userId: string) => {
  const user = users.value.find(u => u.id === userId)
  if (user) {
    user.blocked = !user.blocked
    if (user.blocked) {
      activeTab.value = 'blocked'
    } else {
      activeTab.value = 'active'
    }
  }
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
            <CabinetPageHeader 
              title="Пользователи" 
              back-to="/cabinet/navigation"
              :add-button-text="'Добавить пользователя'"
              @add="handleAddUser"
            />

            <div class="flex gap-1 bg-(--Base-White) p-1 rounded-lg w-fit max-[510px]:w-full">
              <button
                @click="activeTab = 'active'"
                :class="[
                  'px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors max-[510px]:w-full',
                  activeTab === 'active' 
                    ? 'bg-(--Background) text-(--Brand-700)' 
                    : 'bg-(--Base-White) text-(--Text-600)'
                ]"
              >
                Активные
              </button>
              <button
                @click="activeTab = 'blocked'"
                :class="[
                  'px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors max-[510px]:w-full',
                  activeTab === 'blocked' 
                    ? 'bg-(--Background) text-(--Brand-700)' 
                    : 'bg-(--Base-White) text-(--Text-600)'
                ]"
              >
                Заблокированные
              </button>
            </div>

            <div>
              <div class="hidden min-[510px]:grid grid-cols-12 gap-4 px-4 py-3 mb-4 bg-(--Background) rounded-2xl">
                <div class="col-span-4 text-left text-sm font-medium text-(--Text-600)">ФИО</div>
                <div class="col-span-4 text-left text-sm font-medium text-(--Text-600)">Email</div>
                <div class="col-span-3 text-left text-sm font-medium text-(--Text-600)">Телефон</div>
              <div class="col-span-1"></div>
            </div>

            <div class="flex flex-col gap-4 min-[510px]:gap-2">
              <UserCard
                v-for="user in filteredUsers"
                :key="user.id"
                :user="user"
                @edit="handleEdit"
                @block="handleBlock"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

