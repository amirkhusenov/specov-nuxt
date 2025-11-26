<script lang="ts">
import SectionContainer from '@/components/section/Container.vue'

</script>

<template>
  <footer>
    <SectionContainer>

      <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-3 pb-6 border-b border-(--border) border-solid">
        <FooterLogo />
        <FooterMenu />
      </div>

      <div class="flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between gap-3 py-6 sm:pb-20 lg:pb-6">
        <p class="text-gray-600 text-xs leading-4">
          © 2003–2025 ТД «Спецов»
        </p>
        <FooterLinks />
      </div>

    </SectionContainer>
  </footer>
</template>