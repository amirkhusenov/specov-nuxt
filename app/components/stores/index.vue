<script setup lang="ts">
const stores = ref([
  {
    id: 1,
		isActive: true,
    address: "Тюмень, улица 50 лет Октября, 118А",
    text1: "Пн-Пт 8:00 — 19:00",
    text2: "Сб-Вс Выходной",
    phone: "+7 (3452) 410-626"
  },
  {
		isActive: false,
    id: 2,
    address: "Тюмень, Горпищекомбинатовская улица, 1с1",
    text1: "Пн-Вс 8:00 — 19:00",
    text2: "",
    phone: "+7 (3452) 30-30-90"
  }
])

function toggleActive(index: number) {
  if (stores.value[index]?.isActive) return

  stores.value = stores.value.map((item, i) => ({
    ...item,
    isActive: i === index
  }))
}
</script>

<template>
	<div class="gap-2 font-semibold flex flex-col">

		<StoresItem v-for="(item, index) in stores" @click="toggleActive(index)" :isActive="item.isActive" :address="item.address" :text1="item.text1" :text2="item.text2" :phone="item.phone" :key="item.id" />

	</div>

	<div class="overflow-clip flex flex-col items-center rounded-2xl">



	</div>

</template>