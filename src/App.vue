<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './store/store';

let { getAllTask } = useTodoStore();
onMounted(() => {
  getAllTask()
});
</script>

<template>
  <router-view />
</template>
<script setup>
</script>