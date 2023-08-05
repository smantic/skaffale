<script setup>
import Toolbar from 'primevue/toolbar'
</script>

<template>
    <Toolbar :pt="{ root: { class: 'border-none' } }">
        <template #start>
            <p class="font-bold text-lg">Awesome Machine Learning</p>
        </template>

        <template #end>
        </template>
    </Toolbar>
</template>

<style scoped>
</style>
