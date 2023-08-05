<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
    <div class="flex">
        <Header class="w-full"/>
    </div>
    <router-view />
    <div class="flex">
        <Footer class="m-4 w-full"/>
    </div>
</template>

<style scoped>
</style>
