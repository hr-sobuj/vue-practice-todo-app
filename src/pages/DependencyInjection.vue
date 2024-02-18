<script setup>
import DependencyChild from '../components/child/DependencyChild.vue';
import { provide } from 'vue';
let obj = {
    name: 'Habibur',
    address: 'Pabna',
    phone: '01797972527'
}

provide('data',obj);
</script>

<template>
    <dependency-child />
</template>