<script setup>
import { onMounted, ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { getJsonList } from '../../api/api'

var data = ref([])

onMounted(() => {
    getJsonList().then((res) => {
        data.value = res.data
    })
})
</script>

<template>
    <div class="flex flex-row flex-wrap">
        <div v-for="item in data" class="flex align-items-center justify-content-center p-2">
            <Card class="shadow-2 py-4" :pt="{ root: { class: 'border-solid border-1 border-round-lg' } }" style="width: 25em; height: 25em">
                <template #header>
                    <img alt="user header" class="shadow-2 max-w-5rem max-h-4rem" :src="item.logo"  />
                </template>
                <template #title> <h3>{{ item.name }}</h3> </template>
                <template #content>
                    <p>
                        {{ item.description }}
                    </p>
                    <p>
                        {{ item.language }}
                    </p>
                    <p>
                        Latest Version: {{ item.latest_version }}
                    </p>
                </template>
                <template #footer>
                    <a :href="item.github" target="_blank"><Button icon="pi pi-github" /></a>
                    <a :href="item.website" target="_blank"><Button icon="pi pi-external-link" style="margin-left: 0.5em" /></a>
                    <a :href="item?.package_url" target="_blank"><Button icon="pi pi-folder-open" style="margin-left: 0.5em" /></a>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
</style>
