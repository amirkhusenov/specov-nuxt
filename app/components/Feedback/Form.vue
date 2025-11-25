<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

// Валидация: имя — непустая строка, телефон — строка, проходящая базовую проверку
const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, 'Имя обязательно')
  ),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Телефон обязателен'),
    v.regex(/^\+?[\d\s\-\(\)]{10,}$/, 'Неверный формат телефона')
  )
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  name: '',
  phone: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>

  <UForm :schema="schema" :state="state" class="flex flex-col sm:flex-row lg:block sm:items-end w-full gap-4" @submit="onSubmit">

    <UFormField label="Имя" name="name" :ui="{ label: 'lg:pt-[26px] text-gray-700 leading-5 font-medium text-sm' }">
      <UInput v-model="state.name" :ui="{
        base: 'w-full max-w-[478px] !bg-white text-gray-500 placeholder-gray-400 border-transparent rounded-lg py-2.5 px-3.5 shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none',
        root: 'w-full', // обёртка (div)
        // leading: '', // слева от поля
        // trailing: '' // справа от поля
      }" />
    </UFormField>

    <UFormField label="Номер телефона" name="phone"
      :ui="{ label: 'lg:pt-[16px] text-gray-700 leading-5 font-medium text-sm' }">
      <UInput v-model="state.phone" type="tel" :ui="{
        base: 'w-full max-w-[478px] !bg-white text-gray-500 placeholder-gray-400 border-transparent rounded-lg py-2.5 px-3.5 shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none',
        root: 'w-full', // обёртка (div)
        // leading: '', // слева от поля
        // trailing: '' // справа от поля
      }" />
    </UFormField>

    <UButton type="submit" :ui="{
      base: 'max-w-[170px] flex items-center justify-center w-full lg:w-auto lg:mt-4 bg-emerald-950 px-[18px] text-center text-white leading-6 font-semibold py-2.5 rounded-lg'
    }">
      Заказать звонок
    </UButton>

  </UForm>

</template>


<style scoped></style>