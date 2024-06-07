<template>
  <label :for="configKey">{{ configKey }}</label>
  <Dropdown
    v-model="selectedOption"
    editable
    :id="configKey"
    :options="dropdownOptions"
    optionLabel="name"
    placeholder="Select a City"
    class="w-full md:w-[14rem]"
    @change="$emit('update-selection', selectedOption)"
  />
  {{ selectedOption }}
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown'

import { type Configuration } from '@/config'
import { ref } from 'vue'

const props = defineProps<{
  configuration: Configuration
  configKey: string
  options: { [key: string]: string }
}>()
defineEmits(['update-selection'])

const dropdownOptions = Object.keys(props.options).map((key) => ({
  key: key,
  name: props.options[key]
}))

const selectedOption = ref<string>()
</script>
