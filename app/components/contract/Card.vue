<script setup lang="ts">
interface Contract {
  number: string
  period: string
  prolongation: string
  paymentDelay: string
  productLimit: string
  remainingLimit: string
}

interface Props {
  contract: Contract
  showDownloadButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDownloadButton: false
})
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-5">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-(--Background) rounded-lg flex items-center justify-center">
          <img src="/image/cabinet/file-check.svg" alt="">
        </div>
        <h3 class="text-lg font-bold text-(--Text-950)">Договор</h3>
      </div>
      <button 
        v-if="showDownloadButton"
        class="hidden min-[510px]:flex items-center gap-2 px-4 py-2 bg-(--Brand-950) text-white text-sm font-semibold rounded-lg hover:bg-(--Brand-700) transition-colors cursor-pointer"
      >
        <img src="/image/cabinet/file-download.svg" alt="">
        Скачать договор
      </button>
    </div>

    <div class="flex flex-col">
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Договор №</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.number }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Срок действия</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.period }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Пролонгация</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.prolongation }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Отсрочка платежа</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.paymentDelay }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Товарный лимит</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.productLimit }}</span>
      </div>
      <div class="flex flex-col min-[510px]:flex-row min-[510px]:items-end py-3">
        <span class="text-(--Text-600) shrink-0 text-sm">Остаток товарного лимита</span>
        <span class="hidden min-[510px]:block flex-1 border-b border-dotted border-(--border) mx-2 mb-1"></span>
        <span class="font-bold text-(--Text-950) xl:w-[265px] text-left text-sm">{{ contract.remainingLimit }}</span>
      </div>
    </div>
    
    <button 
      v-if="showDownloadButton"
      class="flex min-[510px]:hidden w-full items-center justify-center gap-2 px-4 py-2.5 mt-4 bg-(--Brand-950) text-white text-sm font-semibold rounded-lg hover:bg-(--Brand-700) transition-colors cursor-pointer"
    >
      <img src="/image/cabinet/file-download.svg" alt="" class="brightness-0 invert">
      Скачать договор
    </button>
  </div>
</template>

