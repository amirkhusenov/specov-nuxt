<script setup lang="ts">
const route = useRoute()
const productId = route.params.id as string

const { data: product } = await useFetch(`/api/products/${productId}`)

console.log(productId)

</script>

<template>
  <div class="pt-[117px] sm:pt-[73px] lg:pt-[173px] overflow-hidden [background:var(--Base-White)]">

    <Header />

    <Breadcrumbs />

    <main>
      <div>
        <!-- <h1>Продукт {{ product?.title }}</h1> -->
        <!-- <p>{{ product?.description }}</p> -->
        jkkj
      </div>
    </main>

    <Footer />
    
  </div>
</template>
