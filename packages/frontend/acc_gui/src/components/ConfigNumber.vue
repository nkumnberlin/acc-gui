<template>
  <label :for="configKey">{{ configKey }}</label>
  <InputNumber v-model="props.configuration.value as number" inputId="integeronly" />
</template>

<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { type Configuration } from '@/config'

const props = defineProps<{ configuration: Configuration; configKey: string }>()
</script>
