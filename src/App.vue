<template>
  <div class="main">
    <PButton :width="150" size="small" label="Кнопка" />
    <PButton :width="150" size="medium" label="Кнопка" />
    <PButton :width="150" size="large" label="Кнопка" />
  </div>
</template>

<script setup lang="ts">
import PButton from '@/components/Button/PButton.vue'
</script>

<style scoped lang="sass">
.main
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  gap: 20px
  width: 500px
  padding: 20px 0
</style>
