<template>
  <label :for="configKey">{{ configKey }}</label>
  <InputText
    :id="configKey"
    v-model="textRef.configuration.value"
    :placeholder="textRef.configuration.label"
  />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import type { Configuration } from '@/config'
import { ref } from 'vue'

const props = defineProps<{ configuration: Configuration; configKey: string }>()
const textRef = ref({
  configuration: {
    ...props.configuration,
    value: props.configuration.value as string
  },
  configKey: props.configKey
})
</script>
