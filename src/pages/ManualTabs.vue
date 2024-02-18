<script setup>
import LoginPage from "./LoginPage.vue";
import Registration from "./Registration.vue";
import {ref} from "vue";

let tabs=ref(['LoginPage','Registration']);
let activeTab=ref('LoginPage')

function changeTab(index){
  console.log(activeTab.value,tabs.value[index])
  activeTab.value=tabs.value[index];
}

</script>

<template>
  <div class="flex space-x-4">
    <button class="bg-gray-500 px-4 py-1" v-for="(tab,index) in tabs" @click="changeTab(index)" :key="index">{{ tab }}</button>
  </div>
  <template v-if="activeTab==='LoginPage'">
    <LoginPage/>
  </template>
  <template v-if="activeTab==='Registration'">
    <Registration/>
  </template>
</template>
