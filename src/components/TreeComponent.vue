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
import { items } from '@/mocks/tree';

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
