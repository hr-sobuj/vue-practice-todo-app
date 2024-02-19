import { createPinia, defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import useFetch from "../hooks/useFetch";

export const pinia = createPinia();

export const useTodoStore = defineStore('todo-store', () => {
    let todos = ref([]);

    let filterArr=['all','complete','pending'];
    let filterMode=ref(filterArr[0]);

    let getAllTask=async function(){
        let data=await useFetch('http://localhost:3000/todos');
        todos.value.push(...data)
    }

    let allTodo = computed(() => {
        return todos.length;
    });

    let addTodo=function(title){
        let newTask={
            id:todos.length,
            name:title,
            done:false,
        };
        todos.push(newTask);
    }

    let deleteTodo = function(index){
        todos.splice(index,1);
    }

    let toggleTask=function(){
        
    }

    let data={
        allTodo,
        todos,
        deleteTodo,
        filterMode,
        addTodo,
        getAllTask
    }

    return data;

})