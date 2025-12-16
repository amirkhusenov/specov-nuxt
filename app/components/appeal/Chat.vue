<script setup lang="ts">
import type { Appeal } from '~/types/cabinet'

interface Props {
  appeal: Appeal
}

const props = defineProps<Props>()
const emit = defineEmits<{
  back: []
}>()

const cabinetStore = useCabinetStore()
const messageText = ref('')
const rating = ref(0)
const hoveredRating = ref(0)

const getStatusColor = (status: string) => {
  return status === 'В работе' ? 'text-(--Success-700)' : 'text-(--Text-600)'
}

const getDotColor = (status: string) => {
  return status === 'В работе' ? 'bg-(--Success-700)' : 'bg-(--Text-600)'
}

const handleSendMessage = () => {
  if (messageText.value.trim()) {
    cabinetStore.addAppealMessage(props.appeal.id, messageText.value.trim())
    messageText.value = ''
  }
}

const handleBack = () => {
  emit('back')
}

const handleSubmitRating = () => {
  if (rating.value > 0) {
    console.log('Rating submitted:', rating.value)
  }
}

const setRating = (value: number) => {
  rating.value = value
}

const isStarActive = (star: number) => {
  return star <= (hoveredRating.value || rating.value)
}
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-5">
    <button 
      @click="handleBack"
      class="flex items-center gap-1.5 text-sm text-(--Text-600) hover:text-(--Text-950) transition-colors mb-4"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Все обращения
    </button>

    <h2 class="text-xl font-bold text-(--Text-950) mb-2">{{ appeal.title }}</h2>
    <span class="flex items-center gap-[5px] text-sm font-medium mb-6" :class="getStatusColor(appeal.status)">
      <span class="w-2 h-2 rounded-full" :class="getDotColor(appeal.status)"></span>
      {{ appeal.status }}
    </span>

    <div class="flex flex-col gap-6 mb-6">
      <div 
        v-for="message in appeal.messages" 
        :key="message.id"
        class="flex gap-3"
      >
        <div 
          class="w-10 h-10 rounded-full flex items-center justify-center"
          :class="message.sender === 'user' ? 'bg-(--Background)' : 'bg-(--Brand-600)'"
        >
          <img 
            v-if="message.sender === 'user'"
            src="/image/cabinet/user-circle.svg" 
            alt="User" 
            class="w-6 h-6"
          />
          <img 
            v-else
            src="/image/cabinet/specov-logo.svg" 
            alt="Спецов" 
            class="w-6 h-6"
          />
        </div>

        <div class="flex-1">
          <div class="flex items-center justify-between mb-2">
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-(--Text-950)">{{ message.senderName }}</span>
              <span v-if="message.senderRole" class="text-xs text-(--Text-600)">{{ message.senderRole }}</span>
            </div>
            <span class="text-xs text-(--Text-600)">{{ message.timestamp }}</span>
          </div>
          <p class="text-sm text-(--Text-600) leading-relaxed">{{ message.text }}</p>
        </div>
      </div>
    </div>

    <div v-if="appeal.status === 'В работе'" class="flex items-center gap-3 pt-4 border-t border-(--Border-200)">
      <input
        v-model="messageText"
        type="text"
        placeholder="Напишите сообщение"
        class="flex-1 h-12 px-4 border border-(--Border-200) rounded-lg text-sm text-(--Text-950) placeholder:text-(--Text-400) focus:outline-none focus:border-(--Brand-600) transition-colors"
        @keyup.enter="handleSendMessage"
      />
      <button
        @click="handleSendMessage"
        :disabled="!messageText.trim()"
        class="h-12 px-6 bg-(--Brand-600) text-white text-sm font-semibold rounded-lg hover:bg-(--Brand-700) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Отправить
      </button>
    </div>

    <div v-else class="flex flex-col min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between gap-4 pt-4 border-t border-(--Border-200)">
      <span class="text-sm text-(--Text-600)">Оцените работу поддержки</span>
      
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <button
            v-for="star in 5"
            :key="star"
            @click="setRating(star)"
            @mouseenter="hoveredRating = star"
            @mouseleave="hoveredRating = 0"
            class="p-0.5 transition-transform hover:scale-110"
          >
            <svg 
              width="20" 
              height="19" 
              viewBox="0 0 16 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7.25703 0.686398C7.4491 0.297282 7.54513 0.102724 7.67551 0.0405626C7.78894 -0.0135209 7.92072 -0.0135209 8.03415 0.0405626C8.16453 0.102724 8.26056 0.297282 8.45264 0.686398L10.2749 4.37804C10.3316 4.49291 10.3599 4.55035 10.4014 4.59495C10.438 4.63443 10.482 4.66643 10.5309 4.68915C10.5861 4.71482 10.6495 4.72408 10.7763 4.74261L14.8523 5.33839C15.2815 5.40113 15.4961 5.4325 15.5955 5.53733C15.6819 5.62854 15.7225 5.75388 15.7061 5.87845C15.6872 6.02162 15.5318 6.17295 15.221 6.47562L12.2727 9.34732C12.1808 9.43684 12.1348 9.4816 12.1052 9.53485C12.0789 9.58201 12.0621 9.63381 12.0556 9.68739C12.0482 9.7479 12.0591 9.81113 12.0808 9.93758L12.7765 13.9937C12.8498 14.4215 12.8865 14.6354 12.8176 14.7624C12.7576 14.8728 12.6509 14.9503 12.5274 14.9732C12.3853 14.9995 12.1932 14.8985 11.8091 14.6965L8.16513 12.7802C8.05159 12.7205 7.99483 12.6906 7.93502 12.6789C7.88207 12.6685 7.8276 12.6685 7.77464 12.6789C7.71484 12.6906 7.65807 12.7205 7.54453 12.7802L3.90059 14.6965C3.51641 14.8985 3.32433 14.9995 3.18229 14.9732C3.05872 14.9503 2.95209 14.8728 2.8921 14.7624C2.82315 14.6354 2.85984 14.4215 2.93321 13.9937L3.62889 9.93758C3.65058 9.81113 3.66142 9.7479 3.65408 9.68739C3.64759 9.63381 3.63074 9.58201 3.60449 9.53485C3.57484 9.4816 3.52888 9.43684 3.43697 9.34732L0.488617 6.47562C0.17787 6.17295 0.0224966 6.02162 0.00358961 5.87845C-0.0128605 5.75388 0.027779 5.62854 0.114193 5.53733C0.213514 5.4325 0.428127 5.40113 0.857354 5.33839L4.93341 4.74261C5.06017 4.72408 5.12355 4.71482 5.17875 4.68915C5.22762 4.66643 5.27162 4.63443 5.30831 4.59495C5.34974 4.55035 5.37809 4.49291 5.4348 4.37804L7.25703 0.686398Z" 
                :fill="isStarActive(star) ? '#F79009' : 'none'"
                :stroke="isStarActive(star) ? 'none' : '#D0D5DD'"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        
        <button
          @click="handleSubmitRating"
          :disabled="rating === 0"
          class="h-10 px-5 bg-(--Brand-600) text-white text-sm font-semibold rounded-lg hover:bg-(--Brand-700) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

