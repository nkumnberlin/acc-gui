<template>
  <ConfigText
    v-if="configuration[componentKey]?.type === 'string'"
    :config-key="componentKey"
    :configuration="configuration[componentKey]"
  />
  <ConfigNumber
    v-if="configuration[componentKey]?.type === 'number'"
    :config-key="componentKey"
    :configuration="configuration[componentKey]"
  />
  <ConfigCheckbox
    v-if="configuration[componentKey]?.type === 'boolean'"
    :config-key="componentKey"
    :configuration="configuration[componentKey]"
  />
  <ConfigDropdown
    v-if="configuration[componentKey]?.key === 'track'"
    :config-key="componentKey"
    :configuration="configuration[componentKey]"
    :options="tracks"
    @update-selection="$emit('update-track-selection', $event)"
  />
  <ConfigDropdown
    v-if="configuration[componentKey]?.key === 'carGroup'"
    :config-key="componentKey"
    :configuration="configuration[componentKey]"
    :options="carGroups"
    @update-selection="$emit('update-car-group', $event)"
  />
</template>
<script setup lang="ts">
import { carGroups, type Configuration, tracks } from '@/config'
import ConfigDropdown from '@/components/ConfigDropdown.vue'
import ConfigText from '@/components/ConfigText.vue'
import ConfigNumber from '@/components/ConfigNumber.vue'
import ConfigCheckbox from '@/components/ConfigCheckbox.vue'

defineProps<{
  configuration: { [key: string]: Configuration }
  componentKey: string
}>()
defineEmits(['update-track-selection', 'update-car-group'])
</script>
