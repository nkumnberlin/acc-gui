<template>
  <div class="flex items-center">
    <Checkbox
      v-model="checkboxRef.configuration.value"
      :inputId="configKey"
      :binary="true"
      :name="configKey"
      :value="checkboxRef.configuration.value"
    />
    <label :for="configKey" class="ml-2"> {{ checkboxRef.configuration.label }} </label>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

import { type Configuration } from '@/config'
import { ref } from 'vue'

const props = defineProps<{
  configuration: Configuration
  configKey: string
}>()

const checkboxRef = ref({
  configuration: {
    ...props.configuration,
    value: props.configuration.value as boolean
  },
  configKey: props.configKey
})
</script>
