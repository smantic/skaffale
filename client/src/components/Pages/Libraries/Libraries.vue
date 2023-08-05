<script setup>
import { onMounted, ref } from 'vue'
import LibrariesCards from './LibrariesCards.vue'
import SearchBar from './SearchBar.vue'
// import FilterButton from './FilterButton.vue';
import AddButton from './AddButton.vue';
import { getLibraries } from '../../../api/api.js'

var originalData = ref([])
var dataToShow = ref([])

onMounted(() => {
    getLibraries().then((res) => {
        originalData.value = res.data
        dataToShow.value = res.data
    })
})
</script>

<template>
    <div class="flex flex-row flex-wrap justify-content-center mt-4">
        <SearchBar :data="originalData" @update-data="(newData) => { dataToShow = newData}" class="mx-2"/>
        <AddButton />
    </div>
    <div class="flex flex-row flex-wrap justify-content-center">
        <LibrariesCards :data="dataToShow" />
    </div>
</template>

<style scoped>
</style>
