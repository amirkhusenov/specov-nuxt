<script setup lang="ts">
const emit = defineEmits<{
  cancel: []
  submit: [data: { topic: string; message: string; files: File[] }]
}>()

const formData = reactive({
  topic: '',
  message: ''
})

const files = ref<File[]>([])
const fileInputRef = ref<HTMLInputElement | null>(null)

const topics = [
  'Тема 1',
  'Тема 2',
  'Тема 3',
  'Тема 4'
]

const handleCancel = () => {
  emit('cancel')
}

const handleSubmit = () => {
  emit('submit', {
    topic: formData.topic,
    message: formData.message,
    files: files.value
  })
}

const handleAttachFiles = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    files.value = [...files.value, ...Array.from(target.files)]
  }
}

const removeFile = (index: number) => {
  files.value.splice(index, 1)
}
</script>

<template>
  <div class="flex flex-col gap-6 w-full min-[1280px]:max-w-[590px]">
    <button
      @click="handleCancel"
      class="flex items-center gap-2 transition-colors cursor-pointer self-start"
    >
      <img src="/image/cabinet/chevron-left.svg" alt="">
      <span class="text-sm font-semibold text-(--Text-600)">Все обращения</span>
    </button>

    <h1 class="text-2xl font-regular text-(--Text-950) font-['Russo_One']">Создать обращение</h1>

    <div class="bg-(--Base-White) rounded-xl p-4">
      <div class="flex flex-col gap-5">
        <div>
          <label class="text-sm text-(--Text-600) font-medium mb-1.5 block">Тема обращения</label>
          <div class="relative">
            <select
              v-model="formData.topic"
              class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm focus:outline-none focus:border-(--Brand-600) appearance-none cursor-pointer"
            >
              <option value="" disabled>Выберите тему</option>
              <option v-for="topic in topics" :key="topic" :value="topic">
                {{ topic }}
              </option>
            </select>
            <img src="/image/cabinet/chevron-down.svg" alt="" class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-5 ">
          </div>
        </div>

        <div>
          <label class="text-sm text-(--Text-600) font-medium mb-1.5 block">Сообщение</label>
          <textarea
            v-model="formData.message"
            placeholder="Напишите ваше сообщение"
            class="w-full px-4 py-2.5 border border-(--border) rounded-lg bg-(--Base-White) text-(--Text-950) text-sm focus:outline-none focus:border-(--Brand-600) h-[83px] resize-none"
          ></textarea>
        </div>

        <div>
          <input
            ref="fileInputRef"
            type="file"
            multiple
            class="hidden"
            @change="handleFileChange"
          >
          <button
            @click="handleAttachFiles"
            class="flex items-center gap-2 text-sm font-medium text-(--Brand-700) cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src="/image/cabinet/file-attachment.svg" alt="" class="w-5 h-5">
            Прикрепить файлы
          </button>
          
          <div v-if="files.length > 0" class="mt-3 flex flex-col gap-2">
            <div
              v-for="(file, index) in files"
              :key="index"
              class="flex items-center justify-between p-2 bg-(--Background) rounded-lg"
            >
              <span class="text-sm text-(--Text-950) truncate">{{ file.name }}</span>
              <button
                @click="removeFile(index)"
                class="text-(--Text-600) hover:text-(--Error-700) transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button
          @click="handleSubmit"
          class="w-full min-[510px]:w-[123px] px-4 py-2.5 bg-(--Background) text-(--Text-400) rounded-lg text-base font-semibold hover:bg-(--Brand-950) hover:text-white transition-colors cursor-pointer"
        >
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

