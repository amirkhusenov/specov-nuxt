<script setup lang="ts">
interface Address {
  id: string
  title: string
  address: string
  code: string
  sms: {
    enabled: boolean
    phone: string
  }
  email: {
    enabled: boolean
    address: string
  }
}

const props = defineProps<{
  address: Address
}>()

const emit = defineEmits<{
  delete: []
  edit: []
  applyToAll: [type: 'sms' | 'email']
  toggleSms: [value: boolean]
  toggleEmail: [value: boolean]
}>()

const deleteModalRef = ref<any>(null)
const deleteModalId = `delete-modal-${props.address.id}`

const handleDelete = () => {
  deleteModalRef.value?.openModal()
}

const handleDeleteConfirm = () => {
  emit('delete')
}

const handleDeleteModalClose = () => {
  // Модальное окно закрывается автоматически
}

const editModalRef = ref<any>(null)
const editModalType = ref<'sms' | 'email'>('sms')
const editModalCurrentValue = ref('')
const editModalId = `edit-modal-${props.address.id}`

const handleEdit = (type: 'sms' | 'email') => {
  editModalType.value = type
  editModalCurrentValue.value = type === 'sms' ? props.address.sms.phone : props.address.email.address
  editModalRef.value?.openModal()
}

const handleEditModalClose = () => {
  // Модальное окно закрывается автоматически
}

const handleGetCode = (value: string) => {
  console.log('Get code for:', value)
}

const applyToAllModalRef = ref<any>(null)
const modalType = ref<'sms' | 'email'>('sms')
const modalValue = ref('')
const applyToAllModalId = `apply-to-all-modal-${props.address.id}`

const handleApplyToAll = (type: 'sms' | 'email') => {
  modalType.value = type
  modalValue.value = type === 'sms' ? props.address.sms.phone : props.address.email.address
  applyToAllModalRef.value?.openModal()
}

const handleModalConfirm = () => {
  emit('applyToAll', modalType.value)
}

const handleModalClose = () => {
  // Модальное окно закрывается автоматически
}

const handleToggleSms = (value: boolean) => {
  emit('toggleSms', value)
}

const handleToggleEmail = (value: boolean) => {
  emit('toggleEmail', value)
} 
</script>

<template>
  <div class="bg-(--Base-White) rounded-xl p-4 min-[510px]:p-6 flex flex-col">
    <div class="flex flex-col min-[730px]:flex-row gap-4">
      <div class="flex max-[730px]:flex-col min-[730px]:flex-row gap-3 flex-1">
        <div class="w-11 h-11 p-3 bg-(--Background) shrink-0 flex items-center justify-center rounded-lg max-[730px]:self-start">
          <img src="/image/sidebar/marker.svg" alt="" class="w-10 h-10">
        </div>
        <div class="flex-1">
          <div class="text-sm text-(--Text-600) mb-1 font-medium">{{ address.title }}</div>
          <div class="text-base text-(--Text-950) mb-2 font-medium">{{ address.address }}</div>
          <div class="text-sm text-(--Text-600) font-medium">Код точки</div>
          <div class="text-sm text-(--Text-950) font-semibold mb-4 max-[730px]:mb-0">{{ address.code }}</div>
        </div>
      </div>
      <button 
        @click="handleDelete"
        class="hidden min-[730px]:flex items-center justify-center gap-2 px-4 py-2.5 border border-(--border) bg-(--Background) rounded-lg hover:bg-(--Base-White) transition-colors cursor-pointer self-start"
      >
        <img src="/image/cabinet/trash.svg" alt="" class="w-5 h-5">
        <span class="text-sm font-semibold text-(--Brand-950)">Удалить</span>
      </button>
    </div>

    <button 
      @click="handleDelete"
      class="flex min-[730px]:hidden items-center justify-center gap-2 px-4 py-2.5 border border-(--border) bg-(--Background) rounded-lg hover:bg-(--Base-White) transition-colors cursor-pointer w-full mt-6"
    >
      <img src="/image/cabinet/trash.svg" alt="" class="w-5 h-5">
      <span class="text-sm font-semibold text-(--Brand-950)">Удалить</span>
    </button>

    <div class="min-[730px]:hidden border-b border-(--border) my-6"></div>
    
    <div class="text-base font-semibold text-(--Text-950) max-[730px]:pt-0 min-[730px]:pt-6 mb-4">Сообщить о доставке</div>

    <div class="flex flex-col gap-2">
      <div class="bg-(--Background) rounded-xl p-4 flex flex-col max-[730px]:gap-4 min-[730px]:flex-row min-[730px]:justify-between gap-3">
        <AddressToggleSwitch 
          :model-value="address.sms.enabled"
          @update:model-value="handleToggleSms"
          label="SMS"
          :value="address.sms.phone"
        />
        <div class="flex flex-col min-[510px]:flex-row gap-2">
          <button 
            @click="handleApplyToAll('sms')"
            class="flex items-center justify-center gap-2 px-3.5 py-2.5 border border-(--border) bg-(--Base-White) rounded-lg hover:bg-(--Background) transition-colors cursor-pointer max-[730px]:w-full"
          >
            <img src="/image/sidebar/marker.svg" alt="" class="w-5 h-5">
            <span class="text-sm font-semibold text-(--Brand-950)">Применить ко всем адресам</span>
          </button>
          <button 
            @click="handleEdit('sms')"
            class="flex items-center justify-center gap-2 px-3.5 py-2.5 border border-(--border) bg-(--Base-White) rounded-lg hover:bg-(--Background) transition-colors cursor-pointer max-[730px]:w-full"
          >
            <img src="/image/cabinet/edit.svg" alt="" class="w-5 h-5">
            <span class="text-sm font-semibold text-(--Brand-950)">Изменить</span>
          </button>
        </div>
      </div>

      <div class="bg-(--Background) rounded-xl p-4 flex flex-col max-[730px]:gap-4 min-[730px]:flex-row min-[730px]:justify-between gap-3">
        <AddressToggleSwitch 
          :model-value="address.email.enabled"
          @update:model-value="handleToggleEmail"
          label="Email"
          :value="address.email.address"
        />
        <div class="flex flex-col min-[510px]:flex-row gap-2">
          <button 
            @click="handleApplyToAll('email')"
            class="flex items-center justify-center gap-2 px-3.5 py-2.5 border border-(--border) bg-(--Base-White) rounded-lg hover:bg-(--Background) transition-colors cursor-pointer max-[730px]:w-full"
          >
            <img src="/image/sidebar/marker.svg" alt="" class="w-5 h-5">
            <span class="text-sm font-semibold text-(--Brand-950)">Применить ко всем адресам</span>
          </button>
          <button 
            @click="handleEdit('email')"
            class="flex items-center justify-center gap-2 px-3.5 py-2.5 border border-(--border) bg-(--Base-White) rounded-lg hover:bg-(--Background) transition-colors cursor-pointer max-[730px]:w-full"
          >
            <img src="/image/cabinet/edit.svg" alt="" class="w-5 h-5">
            <span class="text-sm font-semibold text-(--Brand-950)">Изменить</span>
          </button>
        </div>
      </div>
    </div>

    <ModalApplyToAll
      :id="applyToAllModalId"
      ref="applyToAllModalRef"
      :type="modalType"
      :value="modalValue"
      @confirm="handleModalConfirm"
      @close="handleModalClose"
    />

    <ModalEditContact
      :id="editModalId"
      ref="editModalRef"
      :type="editModalType"
      :current-value="editModalCurrentValue"
      @close="handleEditModalClose"
      @get-code="handleGetCode"
    />

    <ModalDeleteAddress
      :id="deleteModalId"
      ref="deleteModalRef"
      :address="address.address"
      @confirm="handleDeleteConfirm"
      @close="handleDeleteModalClose"
    />
  </div>
</template>

