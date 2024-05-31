<template>
  <label :for="configKey">{{ configKey }}</label>
  <InputNumber v-model="numberRef.configuration.value" inputId="integeronly" />
</template>

<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { type Configuration } from '@/config'
import { ref } from 'vue'

const props = defineProps<{ configuration: Configuration; configKey: string }>()
const numberRef = ref({
  configuration: {
    ...props.configuration,
    value: props.configuration.value as number
  },
  configKey: props.configKey
})
</script>
