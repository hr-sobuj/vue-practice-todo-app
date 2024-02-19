<script setup>
import { useTodoStore } from '../../store/store';

const {todos,deleteTodo, name} = useTodoStore();
// console.log(todos.length);

</script>

<template>
    <h1>{{ name }}</h1>
    <ul>
        <li class="flex items-center mb-2" v-if="todos.length" v-for="(todo,index) in todos">
            <input :checked="todo.done" type="checkbox" class="mr-2" />
            <span :class="{ 'line-through text-red-600': todo.done }">{{ todo.name }}</span>
            <button @click="deleteTodo(index)" class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M15.293 4.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 1 1-1.414-1.414l11-11zM4.707 4.293a1 1 0 0 1 1.414-1.414l11 11a1 1 0 1 1-1.414 1.414l-11-11z" />
                </svg>
            </button>
        </li>
    </ul>
</template>