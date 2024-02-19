<script setup>
import { ref } from 'vue';
import {useTodoStore} from './../../store/store.js';

let {addTodo}=useTodoStore();

let title = ref('');
function handleInput() {
  addTodo(title.value);
  title.value='';
}
</script>

<template>
  <input type="text" placeholder="Add new ToDo..." class="w-full px-3 py-2 border rounded-md mb-4"
    @keyup.enter="handleInput" v-model="title" />
</template>