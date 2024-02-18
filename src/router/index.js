import { createRouter, createWebHistory } from "vue-router";
import Todo from "../pages/Todo.vue";
import DynamicTabs from "../pages/DynamicTabs.vue";
import DependencyInjection from "../pages/DependencyInjection.vue";
import App from "../App.vue";

const routes = [
    {
        path: "/",
    },
    {
        path: "/todo",
        component: Todo,
        name: "todo",
    },
    {
        path: "/dynamic-components",
        component: DynamicTabs,
        name: "tabs",
    },
    {
        path: "/dependency-injection",
        component: DependencyInjection,
        name: "dependency",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
