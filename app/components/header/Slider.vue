<script setup lang="ts">
const menu = [
  {
    name: 'Спецодежда',
    src: '/spetsodezhda'
  },
  {
    name: 'Инструменты',
    src: '/instrumenty'
  },
  {
    name: 'СИЗ',
    src: '/siz'
  },
  {
    name: 'Строительное оборудование',
    src: '/stroitelnoe-oborudovanie'
  },
  {
    name: 'Электроинструмент',
    src: '/elektroinstrument'
  },
  {
    name: 'Текстиль',
    src: '/tekstil'
  },
  {
    name: 'Всё для сада',
    src: '/vsyo-dlya-sada'
  },
];
</script>

<template>
  <!-- category slider -->
  <div class="flex items-center">
    <div class="flex gap-x-5">
      <a v-for="item in menu" :href="item.src" class="text-gray-600">
        {{ item.name }}
      </a>
    </div>
    <!-- show more categories -->
    <div class="flex relative w-0 flex-col items-end cursor-pointer">
      <div class="items-end flex absolute -left-24 z-0 w-16 inset-y-0">
        <div class="bg-linear-to-r from-white to-transparent h-full w-full -scale-x-100"></div>
      </div>
      <div
        class="z-2 border-zinc-300 p-[5px] flex justify-center h-8 w-8 flex-col bg-white items-center border border-solid rounded-full">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="#097350" stroke-width="1.66667" stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>
  </div>
</template>