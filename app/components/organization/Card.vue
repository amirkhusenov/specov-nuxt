<script setup lang="ts">
interface OrganizationData {
  name: string
  inn: string
  personalId: string
  clientCode1C: string
  branch: string
}

interface Props {
  organization: OrganizationData
}

defineProps<Props>()
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-5">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
        <img src="/image/cabinet/building.svg" alt="">
      </div>
      <h3 class="text-lg font-bold text-(--Text-950)">Данные организации</h3>
    </div>

    <div class="flex flex-col">
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Наименование организации</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[170px] text-left text-sm">{{ organization.name }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">ИНН</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[170px] text-left text-sm">{{ organization.inn }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Персональный ID</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[170px] text-left text-sm">{{ organization.personalId }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Код клиента 1С</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[170px] text-left text-sm">{{ organization.clientCode1C }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Обслуживающий филиал МИ</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[170px] text-left text-sm">{{ organization.branch }}</span>
      </div>
    </div>
  </div>
</template>

