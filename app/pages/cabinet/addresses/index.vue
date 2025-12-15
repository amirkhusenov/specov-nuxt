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

const STORAGE_KEY = 'cabinet_addresses'

const showAddForm = ref(false)
const showNotification = ref(false)

const loadAddresses = (): Address[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch (e) {
        console.error('Error parsing addresses from localStorage:', e)
      }
    }
  }
  return [
    {
      id: '1',
      title: 'Адрес',
      address: 'ООО Спецов 625013, Тюменская обл, г Тюмень, ул 50 лет Октября, д. 118а',
      code: 'EK-00045450',
      sms: {
        enabled: true,
        phone: '+7 (345) 258-18-63'
      },
      email: {
        enabled: true,
        address: 'info@spetsov.ru'
      }
    }
  ]
}

const saveAddresses = (addresses: Address[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses))
  }
}

const addresses = ref<Address[]>(loadAddresses())

onMounted(() => {
  if (typeof window !== 'undefined' && !localStorage.getItem(STORAGE_KEY)) {
    saveAddresses(addresses.value)
  }
})

// Генерация уникального кода точки
const generateCode = (): string => {
  const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(8, '0')
  return `EK-${randomNum}`
}

// Генерация уникального ID
const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9)
}

const handleDelete = (addressId: string) => {
  addresses.value = addresses.value.filter(addr => addr.id !== addressId)
  saveAddresses(addresses.value)
}

const handleEdit = () => {
  console.log('Edit address')
}

const handleApplyToAll = (type: 'sms' | 'email') => {
  console.log('Apply to all:', type)
}

const handleToggleSms = (value: boolean, addressId: string) => {
  const address = addresses.value.find(addr => addr.id === addressId)
  if (address) {
    address.sms.enabled = value
    saveAddresses(addresses.value)
  }
}

const handleToggleEmail = (value: boolean, addressId: string) => {
  const address = addresses.value.find(addr => addr.id === addressId)
  if (address) {
    address.email.enabled = value
    saveAddresses(addresses.value)
  }
}

const handleAddAddress = () => {
  showAddForm.value = true
}

const handleBackToList = () => {
  showAddForm.value = false
}

const handleFormSubmit = (data: { address: string; office: string; entrance: string; comment: string }) => {
  let fullAddress = data.address
  if (data.office) {
    fullAddress += `, офис ${data.office}`
  }
  if (data.entrance) {
    fullAddress += `, подъезд ${data.entrance}`
  }
  if (data.comment) {
    fullAddress += ` (${data.comment})`
  }

  const newAddress: Address = {
    id: generateId(),
    title: 'Адрес',
    address: fullAddress,
    code: generateCode(),
    sms: {
      enabled: true,
      phone: '+7 (345) 258-18-63'
    },
    email: {
      enabled: true,
      address: 'info@spetsov.ru'
    }
  }

  addresses.value.push(newAddress)
  saveAddresses(addresses.value)
  showAddForm.value = false
  showNotification.value = true
}

const handleFormCancel = () => {
  showAddForm.value = false
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

          <div class="flex-1 flex flex-col gap-6">
            <template v-if="showAddForm">
              <button
                @click="handleBackToList"
                class="flex items-center gap-2  transition-colors cursor-pointer self-start"
              >
                <img src="/image/cabinet/chevron-left.svg" alt="">
                <span class="text-sm font-semibold text-(--Text-600)">Все адреса</span>
              </button>
              <h1 class="text-2xl font-regular text-(--Text-950) font-['Russo_One']">Добавить новый адрес</h1>
            </template>
            <CabinetPageHeader 
              v-else
              title="Адреса доставки" 
              back-to="/cabinet/navigation"
              add-button-text="Добавить адрес"
              @add="handleAddAddress"
            />

            <div v-if="showAddForm" class="flex flex-col gap-6">
              <AddressAddForm 
                @submit="handleFormSubmit"
                @cancel="handleFormCancel"
              />
            </div>

            <div v-else class="flex flex-col gap-6 max-[510px]:gap-4">
              <AddressCard 
                v-for="(address, index) in addresses" 
                :key="address.id"
                :address="address"
                @delete="() => handleDelete(address.id)"
                @edit="handleEdit"
                @apply-to-all="handleApplyToAll"
                @toggle-sms="(value: boolean) => handleToggleSms(value, address.id)"
                @toggle-email="(value: boolean) => handleToggleEmail(value, address.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Уведомление о добавлении адреса -->
    <Notification
      :show="showNotification"
      text="Новый адрес добавлен"
      @close="showNotification = false"
    />
  </div>
</template>

