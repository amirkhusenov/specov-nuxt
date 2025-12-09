<script setup lang="ts">
const route = useRoute()
const productId = route.params.id as string

const { data: product } = await useFetch(`/api/products/${productId}`)

console.log(productId)

</script>

<template>
  <div>
    <!-- <h1>Продукт {{ product?.title }}</h1> -->
    <!-- <p>{{ product?.description }}</p> -->
     jkkj
  </div>
</template>

