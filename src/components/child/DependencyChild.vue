<script setup>
import { inject } from 'vue';
let { name, address, phone } = inject('data');
</script>

<template>
    <div class="border bg-gray-200 shadow-md rounded-md text-black p-5">
        <ul>
            <li>
                {{ name }}
            </li>
            <li>
                {{ address }}
            </li>
            <li>
                {{ phone }}
            </li>
        </ul>
    </div>
</template>