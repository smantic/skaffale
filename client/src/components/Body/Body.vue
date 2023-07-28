<script setup>
import { onMounted, ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { getJsonList } from '../../api/api'

var data = ref([])
var test = function () {
    console.log('test')
}
onMounted(() => {
    getJsonList().then((res) => {
        console.log(res.data)
        data = res.data
    })
})
</script>

<template>
    <div v-for="item in data" class="py-5">
        <Card class="py-4" :pt="{ root: { class: 'border-solid border-1 border-round-lg' } }" style="width: 25em">
            <template #header>
                <img alt="user header" class="max-w-5rem max-h-4rem" :src="item.logo"  />
            </template>
            <template #title> {{ item.name }} </template>
            <template #content>
                <p>
                    {{ item.description }}
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-github" @click="this.$router.push(item.github)"/>
                <Button icon="pi pi-external-link" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<style scoped>
</style>
