<script setup>
import Toolbar from 'primevue/toolbar'
import SearchBar from './SearchBar.vue'
import FilterButton from './FilterButton.vue';
import AddButton from './AddButton.vue';
</script>

<template>
    <Toolbar :pt="{ root: { class: 'border-none' } }">
        <template #start>
            <p class="font-bold text-lg">Awesome Machine Learning</p>
        </template>

        <template #end>
            <SearchBar class="mr-2"/>
            <FilterButton />
            <AddButton />
        </template>
    </Toolbar>
</template>

<style scoped>
</style>
