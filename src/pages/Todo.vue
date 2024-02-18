<script setup>
import { computed, reactive, ref } from 'vue';
import TodoList from './../components/TodoList.vue';
import TodoForm from './../components/TodoForm.vue';

let todoItems = reactive([]);

function handleForm(todo) {
  console.log(todo);
  if (todo !== undefined && todo !== '') {
    let obj = {
      id: todoItems.length,
      title: todo,
      complete: false,
    }
    todoItems.push(obj);
  }
}

function completeTask(index) {
  todoItems[index].complete = !todoItems[index].complete;
}

function deleteTask(index) {
  console.log('index');
  todoItems.splice(index, 1);
}

let totalTask = computed(() => todoItems.length);
let totalCompleteTak = computed(() => todoItems.filter(value => value.complete).length);

</script>

<template>
  <main>
    <section>
      <div class="container">
        <h1 class="font-bold text-5xl">ToDo Application({{ totalCompleteTak }}/{{ totalTask }})</h1>
        <div>
          <TodoForm :handleForm="handleForm"/>
          <hr />
         <TodoList :todoItems="todoItems" :completeTask="completeTask" :deleteTask="deleteTask"/>
        </div>
      </div>
    </section>
  </main>
</template>
