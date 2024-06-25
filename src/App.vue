<template>
  <div class="app">
    <TreeComponent/>
  </div>
</template>

<script setup lang="ts">
import TreeComponent from '@/components/TreeComponent.vue'

</script>

<style>
html * {
  box-sizing: border-box;
}

.app {
  padding: 20px 0;
  font-family: sans-serif;
  min-height: 100vh;
}
</style>
