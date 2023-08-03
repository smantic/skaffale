<script setup>
import { ref } from 'vue'
import { postNewLibrary } from '../../api/api'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const visible = ref(false)
const selectedLanguage = ref('Python');
const languages = ref([
    { name: 'Python', value: "python", key: 'p' },
    { name: 'Java Script', value: "javascript", key: 'j' },
    { name: 'R', value: "r", key: 'r' },
    { name: 'C', value: "c", key: 'c' }
]);

const selectedName = ref('')
const selectedDescription = ref('')
const selectedLogo = ref('')
const selectedPackage = ref('')
const selectedLatestVersion = ref('')
const selectedWebsite = ref('')
const selectedGithub = ref('')
const selectedStartReview = ref(5)

function submit () {
    postNewLibrary({
        name: selectedName.value,
        description: selectedDescription.value,
        logo: selectedLogo.value,
        language: selectedLanguage.value,
        package_url: selectedPackage.value,
        latest_version: selectedLatestVersion.value,
        website: selectedWebsite.value,
        github: selectedGithub.value,
        stars_review: selectedStartReview.value
    }).then(() => {
        visible.value = false
        toast.add({ severity: 'success', summary: 'Success', detail: 'Library Added!', life: 3000 });
    })
}

</script>

<template>
    <Toast />
    <Button icon="pi pi-plus" class="mr-2" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Add new library" :style="{ width: '50vw' }">
        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedName" placeholder="Name" />
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <Textarea v-model="selectedDescription" placeholder="Description" />
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedLogo" placeholder="Link to logo image" />
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <div v-for="language in languages" :key="language.key" class="flex align-items-center">
                    <RadioButton v-model="selectedLanguage" :inputId="language.key" name="language" :value="language.value" />
                    <label :for="language.key" class="ml-2 mr-3">{{ language.name }}</label>
                </div>
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedPackage" placeholder="Official Package Link (pypi.org)" />
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedLatestVersion" placeholder="Latest Version" />
            </div>
        </div>
        
        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedWebsite" placeholder="Website" />
            </div>
        </div>

        <div class="flex">
            <div class="p-inputgroup p-2 flex">
                <InputText v-model="selectedGithub" placeholder="Github" />
            </div>
        </div>

        <div class="flex p-2">
            <Button label="Submit" @click="submit"/>
        </div>
    </Dialog>
</template>

<style scoped>
</style>
