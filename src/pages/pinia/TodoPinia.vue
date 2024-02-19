<script setup>
import TodoInput from '../../components/pinia-components/TodoInput.vue';
import TodoFilter from '../../components/pinia-components/TodoFilter.vue';
import TodoList from '../../components/pinia-components/TodoList.vue';


</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">ToDo Application</h1>
    <!-- Input Field -->
    <TodoInput />

    <!-- Filter Radio Buttons -->
    <TodoFilter />

    <!-- Todo List -->
    <TodoList />
  </div>
</template>
  
  