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
            <SectionButton text="Смотреть всё " path="/" />
          </SectionHeader>
        </SectionContainer>
      </Section>
    
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle text="Для стройки" />
            <SectionButton text="Смотреть всё " path="/" />
          </SectionHeader>
        </SectionContainer>
      </Section>

    </main>

  </div>
</template>