<script setup>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
const emits = defineEmits(['updateData'])
const props = defineProps({
  data: Array
})
const searchText = ref(null)

function search(data) {
    let searchResultData = []
    data.forEach(library => {
        for (let string of Object.values(library)) {
            if (typeof string === 'string') {
                if ( string.toLowerCase().includes(searchText.value.toString().toLowerCase()) ) {
                    searchResultData.push(library)
                    break
                }
            }
        }
    })
    if (searchResultData.length > 0) {
        emits('updateData', searchResultData)
    }
}
</script>

<template>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="searchText" v-on:keyup="search(data)" style="width: 20rem;" placeholder="Search" />
    </span>
</template>

<style scoped>
</style>
