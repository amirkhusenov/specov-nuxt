<script setup lang="ts">
interface User {
  id: string
  fullName: string
  email: string
  phone: string
  blocked: boolean
}

interface Props {
  user: User
}

const props = defineProps<Props>()

const emit = defineEmits<{
  edit: [id: string]
  block: [id: string]
}>()

const blockModalRef = ref<any>(null)
const unblockModalRef = ref<any>(null)

const handleEdit = () => {
  emit('edit', props.user.id)
}

const handleBlock = () => {
  blockModalRef.value?.openModal()
}

const handleUnblock = () => {
  unblockModalRef.value?.openModal()
}

const handleBlockConfirm = () => {
  emit('block', props.user.id)
}

const handleUnblockConfirm = () => {
  emit('block', props.user.id)
}
</script>

<template>
  <div class="bg-(--Base-White) rounded-2xl p-4 min-[510px]:grid min-[510px]:grid-cols-12 min-[510px]:gap-6 min-[510px]:items-center">
    <div class="min-[510px]:hidden flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <div class="text-sm font-medium text-(--Text-600)">ФИО</div>
        <div class="font-bold text-(--Text-950) text-base">{{ user.fullName }}</div>
      </div>
      
      <div class="flex flex-col gap-1">
        <div class="text-sm font-medium text-(--Text-600)">Email</div>
        <div class="text-base text-(--Text-950) font-bold">{{ user.email }}</div>
      </div>
      
      <div class="flex flex-col gap-1">
        <div class="text-sm font-medium text-(--Text-600)">Телефон</div>
        <div class="text-base text-(--Text-950) font-bold">{{ user.phone }}</div>
      </div>
      
      <div v-if="!user.blocked" class="flex items-center gap-2">
        <button
          @click="handleEdit"
          class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-(--Base-White) border border-(--border) rounded-lg text-sm font-semibold text-(--Brand-950) hover:opacity-70 transition-opacity"
        >
          <img src="/image/cabinet/edit-gray.svg" alt="" class="w-5 h-5 shrink-0">
          Изменить
        </button>
        <button
          @click="handleBlock"
          class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-(--Base-White) border border-(--border) rounded-lg text-sm font-semibold text-(--Brand-950) hover:opacity-70 transition-opacity"
        >
          <img src="/image/cabinet/lock-green.svg" alt="" class="w-5 h-5 shrink-0">
          Заблокировать
        </button>
      </div>
      
      <button
        v-else
        @click="handleUnblock"
        class="flex items-center justify-center gap-2 px-4 py-2.5 bg-(--Base-White) border border-(--border) rounded-lg text-sm font-semibold text-(--Brand-950) hover:opacity-70 transition-opacity"
      >
        <img src="/image/cabinet/reverse-left.svg" alt="" class="w-5 h-5 shrink-0">
        Восстановить
      </button>
    </div>

    <div class="hidden min-[510px]:block col-span-4 text-left">
      <div class="font-bold text-(--Text-950) text-base">{{ user.fullName }}</div>
    </div>
    <div class="hidden min-[510px]:block col-span-4 text-left">
      <div class="text-base text-(--Text-950) font-bold">{{ user.email }}</div>
    </div>
    <div class="hidden min-[510px]:block col-span-3 text-left">
      <div class="text-base text-(--Text-950) font-bold">{{ user.phone }}</div>
    </div>
    <div v-if="!user.blocked" class="hidden min-[510px]:flex col-span-1 items-center justify-end gap-4">
      <button
        @click="handleEdit"
        class="w-5 h-5 shrink-0 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        <img src="/image/cabinet/edit-gray.svg" alt="Редактировать" class="w-5 h-5 shrink-0">
      </button>
      <button
        @click="handleBlock"
        class="w-5 h-5 shrink-0 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        <img src="/image/cabinet/lock.svg" alt="Заблокировать" class="w-5 h-5 shrink-0">
      </button>
    </div>
    
    <div v-else class="hidden min-[510px]:flex col-span-1 items-center justify-end">
      <button
        @click="handleUnblock"
        class="px-3.5 py-2 bg-(--Base-White) border border-(--border) rounded-lg text-sm font-semibold text-(--Brand-950) hover:opacity-70 transition-opacity flex items-center gap-2"
      >
        <img src="/image/cabinet/reverse-left.svg" alt="Восстановить" class="w-5 h-5 shrink-0">
        Восстановить
      </button>
    </div>

    <ModalBlockUser
      ref="blockModalRef"
      :id="`block-user-modal-${user.id}`"
      :user-name="user.fullName"
      @confirm="handleBlockConfirm"
    />
    
    <ModalUnblockUser
      ref="unblockModalRef"
      :id="`unblock-user-modal-${user.id}`"
      :user-name="user.fullName"
      @confirm="handleUnblockConfirm"
    />
  </div>
</template>

