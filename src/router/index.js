import { createRouter, createWebHistory } from "vue-router";
// import DynamicTabs from "../pages/DynamicTabs.vue";
import TodoPinia from "../pages/pinia/TodoPinia.vue";
// import DependencyInjection from "../pages/DependencyInjection.vue";


const routes = [
    // {
    //     path: "/",
    // },
    {
        path: "/",
        component: TodoPinia,
        name: "todo",
    },
    // {
    //     path: "/dynamic-components",
    //     component: DynamicTabs,
    //     name: "tabs",
    // },
    // {
    //     path: "/dependency-injection",
    //     component: DependencyInjection,
    //     name: "dependency",
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
