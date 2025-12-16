<script setup lang="ts">
const cabinetStore = useCabinetStore()

const onlyUnread = ref(false)
const showForm = ref(false)

const handleNewAppeal = () => {
  showForm.value = true
}

const handleCancelForm = () => {
  showForm.value = false
}

const handleSubmitForm = (data: { topic: string; message: string; files: File[] }) => {
  console.log('Submit appeal:', data)
  showForm.value = false
}
</script>

<template>
  <div class="pt-[117px] sm:pt-[73px] lg:pt-[173px] min-h-screen bg-(--Background)">
    <Header />

    <main class="pt-8 pb-23">
      <div class="max-w-(--container) mx-auto px-4 min-[750px]:px-8 xl:px-0">
        <div class="flex gap-8 min-[1280px]:mx-4.5">
          <div class="hidden xl:block">
            <Sidebar />
          </div>

          <div class="flex-1 flex flex-col gap-4 min-[750px]:gap-6">
            <template v-if="showForm">
              <AppealForm 
                @cancel="handleCancelForm"
                @submit="handleSubmitForm"
              />
            </template>
            <template v-else>
              <CabinetPageHeader 
                title="Обращения" 
                back-to="/cabinet/navigation"
                add-button-text="Новое обращение"
                add-button-icon="/image/sidebar/annotation-dots.svg"
                @add="handleNewAppeal"
              />

              <div class="bg-(--Base-White) rounded-xl p-5">
                <div class="flex flex-col min-[750px]:flex-row min-[750px]:items-center min-[750px]:justify-between gap-4 mb-6">
                  <div class="flex items-center gap-4">
                    <span class="hidden min-[510px]:block text-sm text-(--Text-600) font-medium">Сортировка:</span>
                    
                    <span class="flex items-center gap-1 text-sm font-medium text-(--Brand-700)">
                      Все статусы
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="var(--Brand-700)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>

                    <span class="flex items-center gap-1 text-sm font-medium text-(--Brand-700)">
                      За весь период
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="var(--Brand-700)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>

                  <div class="flex items-center gap-3">
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        v-model="onlyUnread"
                        class="sr-only peer"
                      >
                      <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--Brand-600)"></div>
                    </label>
                    <span class="text-sm font-semibold text-(--Text-950)">Только непрочитанные</span>
                  </div>
                </div>

                <div class="flex flex-col gap-2 min-[750px]:gap-6">
                  <AppealCard
                    v-for="appeal in cabinetStore.appeals"
                    :key="appeal.id"
                    :appeal="appeal"
                  />
                  
                  <div v-if="cabinetStore.appeals.length === 0" class="text-center py-4">
                    <p class="text-sm text-(--Text-600)">Нет обращений</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

