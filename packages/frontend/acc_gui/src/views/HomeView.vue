<template>
  <div class="container">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col pt-2" v-for="key in configurationKeysToRender" :key>
        <ComponentHandler
          :configuration="configurationRef"
          :componentKey="key"
          @update-car-group="updateCarSelection"
          @update-track-selection="updateTrackSelection"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios, { type AxiosResponse } from 'axios'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import { onMounted, ref } from 'vue'
import { type ConfigFiles, configuration as defaultConfiguration } from '@/config'
import ComponentHandler from '@/components/ComponentHandler.vue'

interface ReturnConfiguration {
  message: ConfigFiles[]
}

const configurationKeysToRender = ref(['maxConnections', 'registerToLobby', 'track', 'serverName'])
function updateTrackSelection(selectedTrack: { key: string; name: string }) {
  console.log(selectedTrack.key)
}

function updateCarSelection(selectedCar: { key: string; name: string }) {
  console.log(selectedCar.key)
}

const configurationRef = ref(defaultConfiguration)

async function fetchExistingConfiguration() {
  const response: AxiosResponse<ReturnConfiguration> = await axios.get(
    `https://59uz2jlp99.execute-api.eu-central-1.amazonaws.com/download`
  )
  return response.data.message satisfies ConfigFiles[]
}

onMounted(async () => {
  const serverConfig = await fetchExistingConfiguration()
  let config = {}
  serverConfig.forEach((configObj) => {
    Object.keys(configObj).forEach((configKey) => {
      const subConfig = configObj[configKey]
      Object.entries(subConfig).forEach(([keysOfEachConfig, valueOfServerConfig]) => {
        if (configurationRef.value[keysOfEachConfig]) {
          if (configurationRef.value[keysOfEachConfig].type === 'number') {
            const parsedVal = parseInt(valueOfServerConfig)
            configurationRef.value[keysOfEachConfig].value = parsedVal
            console.log(configurationRef.value)
            console.log(keysOfEachConfig)
          }
        }
      })
    })
  })
})
</script>
