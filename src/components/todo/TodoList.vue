<script setup>

let props=defineProps(
    {
        todoItems:Object,
        completeTask:Function,
        deleteTask:Function
    }
);


</script>

<template>
    <ul class=" list-none">
        <li class="flex flex-row space-x-6" v-for="(todoItem, index) in props.todoItems">
            <div class="flex space-x-2">
                <input type="checkbox" :checked="todoItem.complete" @input="props.completeTask(index)" />
                <span :class="{ 'line-through text-red-600': todoItem.complete }">{{ todoItem.title }}</span>
            </div>
            <div>
                <button class="text-red-700 px-3 py-1 bg-white rounded-md hover:bg-red-500 hover:text-white"
                    @click="props.deleteTask(index)">X</button>
            </div>
        </li>
    </ul>
</template>