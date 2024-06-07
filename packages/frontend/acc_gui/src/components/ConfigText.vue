<template>
  <label :for="configKey">{{ configKey }}</label>
  <InputText
    :id="configKey"
    v-model="props.configuration.value as string"
    :placeholder="props.configuration.label"
  />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import type { Configuration } from '@/config'

const props = defineProps<{ configuration: Configuration; configKey: string }>()
</script>
