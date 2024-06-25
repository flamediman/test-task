<template>
  <div class="item">
    <div>
      id: {{ item.id }}
    </div>
    <div>
      parent: {{ item.parent }}
    </div>
    <div v-if="item.type">
      type: {{ item.type }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { TreeItem } from '@/models/tree';

defineProps({
  item: {
    type: {} as () => TreeItem,
    required: true
  }
})
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>