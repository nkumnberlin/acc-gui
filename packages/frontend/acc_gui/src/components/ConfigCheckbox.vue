<template>
  <div class="flex items-center">
    <Checkbox
      v-model="props.configuration.value as string"
      :inputId="configKey"
      :binary="true"
      :name="configKey"
      :value="props.configuration.value"
    />
    <label :for="configKey" class="ml-2"> {{ props.configuration.label }} </label>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

import { type Configuration } from '@/config'

const props = defineProps<{
  configuration: Configuration
  configKey: string
}>()
</script>
