<script setup lang="ts">
import type { Appeal } from '~/types/cabinet'

interface Props {
  appeal: Appeal
}

const route = useRoute()

const props = defineProps<Props>()

const getStatusColor = (status: string) => {
  return status === 'В работе' ? 'text-(--Success-700)' : 'text-(--Text-600)'
}

const getDotColor = (status: string) => {
  return status === 'В работе' ? 'bg-(--Success-700)' : 'bg-(--Text-600)'
}
</script>

<template>
  <NuxtLink 
    :to="`${route.path.startsWith('/cabinet-corporate') ? '/cabinet-corporate' : '/cabinet-individual'}/appeals/${appeal.id}`"
    class="block bg-(--Background) rounded-xl p-5 cursor-pointer hover:bg-(--Background)/80 transition-colors"
  >
    <div class="flex items-center justify-between mb-6">
      <span class="text-sm text-(--Text-600)">{{ appeal.date }}</span>
      <span class="flex items-center gap-[5px] text-sm font-medium" :class="getStatusColor(appeal.status)">
        <span class="w-2 h-2 rounded-full" :class="getDotColor(appeal.status)"></span>
        {{ appeal.status }}
      </span>
    </div>
    
    <h3 class="text-base font-bold text-(--Text-950) mb-2">{{ appeal.title }}</h3>
    
    <p class="text-sm text-(--Text-600) leading-relaxed">{{ appeal.text }}</p>
  </NuxtLink>
</template>

