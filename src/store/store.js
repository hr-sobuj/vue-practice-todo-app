import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();


export const useTodoStore = defineStore('todo', {
    state: () => {
        return {
            todo: [
                { id: 1, name: 'Task 1', done: false },
                { id: 2, name: 'Task 2', done: true },
                { id: 3, name: 'Task 3', done: false },
                { id: 4, name: 'Task 4', done: false },
            ]
        }
    },
    getters: () => {

    },
    actions: () => {

    }
})