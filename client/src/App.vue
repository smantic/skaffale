<script setup>
import Header from './components/Header/Header.vue'
import Body from './components/Body/Body.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
    <div class="flex">
        <Header class="w-full"/>
    </div>
    <div class="flex m-5">
        <Body class="w-full"/>
    </div>
    <div class="flex">
        <Footer class="m-4 w-full"/>
    </div>
</template>

<style scoped>
</style>
