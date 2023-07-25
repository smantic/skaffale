<script setup>
import { onMounted } from 'vue'
import { getJsonList } from '../api/api';

onMounted(() => {
    console.log(getJsonList())
})
</script>

<template>
    <h1>HELLO WRLD</h1>
</template>

<style scoped>
</style>
