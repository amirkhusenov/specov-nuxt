<script setup lang="ts">
const popularProducts = [
  {
    id: Date.now(),
    image: '/image/products/img-1.png',
    title: 'Аккумуляторная угловая шлифмашина Ryobi ONE+ R18AG-0 5133001903',
    price: 7990,
    oldPrice: 10500,
    discont: 10,
  },
  {
    id: Date.now(),
    image: '/image/products/img-2.png',
    title: 'Электрическая газонокосилка Grizzly 1,8 кВт, 38 см ш.с. SKY-16',
    price: 17100,
    oldPrice: 13400,
    discont: 10,
  },
  {
    id: Date.now(),
    image: '/image/products/img-3.png',
    title: 'Перфоратор SDS-plus KEYANG HD26-2T',
    price: 2550,
  },
  {
    id: Date.now(),
    image: '/image/products/img-4.png',
    title: 'Усиленный плиткорез РемоКолор 46-0-660',
    price: 8800,
    oldPrice: 10500,
    discont: 10,
  },
]

const buildingProducts = [
  {
    id: Date.now(),
    image: '/image/products/img-5.png',
    title: 'Гвоздезабивной пистолет (гвозди 47/F/055/049/300/J/SK50; длина гвоздей 15-50 мм) Gigant NG50',
    price: 3729,
  },
  {
    id: Date.now(),
    image: '/image/products/img-6.png',
    title: 'Электрическая газонокосилка Grizzly 1,8 кВт, 38 см ш.с. SKY-16',
    price: 3637,
    oldPrice: 13400,
    discont: 20,
  },
  {
    id: Date.now(),
    image: '/image/products/img-7.png',
    title: 'Пневмогидравлический заклепочник 3/16" SUMAKE ST-6615 35087',
    price: 11950,
  },
  {
    id: Date.now(),
    image: '/image/products/img-8.png',
    title: 'Пневматический заклепочник KRAFTOOL 2.4-6.4 мм, композитный корпус 31185_z02',
    price: 13807,
  },
]

const gardenProducts = [
  {
    id: Date.now(),
    image: '/image/products/img-9.png',
    title: 'Аккумуляторный триммер Ryobi ONE+ OLT1832 5133002813',
    price: 6590,
    oldPrice: 8190,
    discont: 10,
  },
  {
    id: Date.now(),
    image: '/image/products/img-10.png',
    title: 'Ручной опрыскиватель Gigant 1.25 л GS-01',
    price: 476,
    oldPrice: 250,
    discont: 20,
  },
  {
    id: Date.now(),
    image: '/image/products/img-11.png',
    title: 'Садовый измельчитель Ryobi RSH3045U 5133004335',
    price: 25385,
  },
  {
    id: Date.now(),
    image: '/image/products/img-12.png',
    title: 'Электрическая газонокосилка Bosch Rotak 320 ER 06008A600A',
    price: 11856,
  },
]

</script>


<template>
  <div class="[background:var(--Base-White)]">

    <Header />

    <main>
      <CategoryAdv />
      <CategoryCards />
      <Banner />

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle text="Популярные товары" />
            <SectionButton text="Смотреть всё" path="/" />
          </SectionHeader>

          <ProductCardSlider :items="popularProducts" />

        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle text="Для стройки" />
            <SectionButton text="Смотреть всё" path="/" />
          </SectionHeader>

          <ProductCardSlider :items="buildingProducts" />

        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle text="Для сада" />
            <SectionButton text="Смотреть всё" path="/" />
          </SectionHeader>

          <ProductCardSlider :items="gardenProducts" />

        </SectionContainer>
      </Section>

    </main>

  </div>
</template>