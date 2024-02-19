<script setup>
import { useTodoStore } from '../../store/store';

  let {filterMode} =useTodoStore();
</script>

<template>
    <div class="mb-4">
        <input
          type="radio"
          id="allTodos"
          class="mr-2"
          name="task-type"
          :checked="filterMode==='all'"
          value="all"
        />
        <label for="allTodos" class="mr-4">All Todos</label>
  
        <input
          type="radio"
          id="completedTodos"
          class="mr-2"
          name="task-type"
          :checked="filterMode==='complete'"
          value="complete"
        />
        <label for="completedTodos" class="mr-4">Completed</label>
  
        <input
          type="radio"
          id="pendingTodos"
          class="mr-2"
          name="task-type"
          :checked="filterMode==='pending'"
          value="pending"
        />
        <label for="pendingTodos">Pending</label>
      </div>
</template>