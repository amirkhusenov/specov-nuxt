<script setup lang="ts">
const emit = defineEmits<{
  cancel: []
  submit: [data: { address: string; office: string; entrance: string; comment: string }]
}>()

const formData = reactive({
  address: '',
  office: '',
  entrance: '',
  comment: ''
})

const handleSubmit = () => {
  emit('submit', { ...formData })
}

const handleCancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-4 min-[510px]:p-6 flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-(--Text-600)">Адрес</label>
        <input
          v-model="formData.address"
          type="text"
          class="w-full px-4 py-3 border border-(--border) rounded-lg text-sm text-(--Text-950) focus:outline-none focus:border-(--Brand-600)"
        >
      </div>

      <div class="flex flex-row gap-4">
        <div class="flex-1 flex flex-col gap-2">
          <label class="text-sm font-medium text-(--Text-600)">Офис</label>
          <input
            v-model="formData.office"
            type="text"
            class="w-full px-4 py-3 border border-(--border) rounded-lg text-sm text-(--Text-950) focus:outline-none focus:border-(--Brand-600)"
          >
        </div>

        <div class="flex-1 flex flex-col gap-2">
          <label class="text-sm font-medium text-(--Text-600)">Подъезд</label>
          <input
            v-model="formData.entrance"
            type="text"
            class="w-full px-4 py-3 border border-(--border) rounded-lg text-sm text-(--Text-950) focus:outline-none focus:border-(--Brand-600)"
          >
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-(--Text-600)">Комментарий</label>
        <textarea
          v-model="formData.comment"
          rows="4"
          class="w-full px-4 py-3 border border-(--border) rounded-lg text-sm text-(--Text-950) focus:outline-none focus:border-(--Brand-600) resize-y"
        ></textarea>
      </div>
    </div>

    <button
      @click="handleSubmit"
      class="w-full px-4 py-3 bg-(--Background) text-(--Text-950) text-sm font-semibold rounded-lg hover:bg-(--border) transition-colors cursor-pointer"
    >
      Добавить адрес
    </button>
  </div>
</template>

