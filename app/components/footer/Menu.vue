<script setup lang="ts">
const menu = ref([
  {
    name: "О компании",
    src: "/about"
  },
  {
    name: "Оплата и доставка",
    src: "/pay-delivery"
  },
  {
    name: "Сервис и гарантия",
    src: "/service-warranty"
  },
  {
    name: "Юрлицам",
    src: "/yurlicam"
  },
])
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5 sm:gap-x-5 gap-y-2.5 items-center">
    <a v-for="(item, index) in menu" :href="item.src" :key="index" class="font-medium text-gray-600 hover:text-(--Brand-700) transition">
      {{ item.name }}
    </a>
  </div>
</template>