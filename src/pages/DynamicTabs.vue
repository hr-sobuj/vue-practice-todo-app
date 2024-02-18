<script setup>
import LoginPage from "./LoginPage.vue";
import Registration from "./Registration.vue";
import { ref,markRaw,defineAsyncComponent } from "vue";

function importComponents(componentName){
  return defineAsyncComponent(()=>import(`./${componentName}.vue`))
}

let tabs = ref(['LoginPage', 'Registration']);
let activeTab = ref(markRaw(importComponents(tabs.value[0])));

function changeTab(index) {
  activeTab.value = markRaw(importComponents(tabs.value[index]));
}
</script>

<template>
  <div class="flex space-x-4">
    <button class="bg-gray-500 px-4 py-1" v-for="(tab, index) in tabs" @click="changeTab(index)" :key="index">{{ tab }}</button>
  </div>
  <!-- dynamic component  -->
  <component :is="activeTab"/>
</template>
