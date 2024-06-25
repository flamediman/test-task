<template>
  <div class="wrapper">
    <div class="block">
      <h2 class="title">getAll():</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getAll()" :item/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getItem(7):</h2>
      <div class="items">
        <TreeItem :item="ts.getItem(7)"/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getChildren(4):</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getChildren(4)" :item/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getChildren(5):</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getChildren(5)" :item/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getChildren(2):</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getChildren(2)" :item/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getAllChildren(2):</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getAllChildren(2)" :item/>
      </div>
    </div>

    <div class="block">
      <h2 class="title">getAllParents(7):</h2>
      <div class="items">
        <TreeItem v-for="item in ts.getAllParents(7)" :item/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeStore from '@/utils/tree';
import TreeItem from './TreeItem.vue';

const items = [
  { id: 1, parent: 'root' },
  { id: 2, parent: 1, type: 'test' },
  { id: 3, parent: 1, type: 'test' },

  { id: 4, parent: 2, type: 'test' },
  { id: 5, parent: 2, type: 'test' },
  { id: 6, parent: 2, type: 'test' },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);

</script>

<style scoped>

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.block {
  width: 100%;
  border-bottom: 1px dashed gray;
  padding: 20px;
}

.title {
  text-align: center;
}

.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
