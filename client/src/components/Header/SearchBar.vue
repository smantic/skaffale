<script setup>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const searchText = ref(null)
</script>

<template>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="searchText" placeholder="Search" />
    </span>
</template>

<style scoped>
</style>
