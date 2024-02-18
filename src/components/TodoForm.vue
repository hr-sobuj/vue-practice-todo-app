<script setup>
import { ref,defineProps } from 'vue';

    let props=defineProps({
        handleForm:Function
    });

    let todoInput=ref('');

    function handleInput(){
        if(todoInput.value.trim()!==''){
            props.handleForm(todoInput.value.trim());
            todoInput.value='';
        }

    }

</script>

<template>
    <form @submit.prevent="handleInput" class=" py-6">
        <div>
            <label for="todo">Enter your todo</label><br />
            <input type="text" v-model="todoInput" />
            <br />
            <button type="submit">Add ToDo</button>
        </div>
    </form>
</template>