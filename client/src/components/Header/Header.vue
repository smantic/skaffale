<script setup>
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'

</script>

<template>
    <Toolbar>
        <template #start>
            <p class="text-lg">Awesome Machine Learning</p>
        </template>

        <template #end>
            <Button icon="pi pi-search" class="mr-2" />
        </template>
    </Toolbar>
</template>

<style scoped>
</style>
