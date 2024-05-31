<template>
  <div class="container">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col pt-2" v-for="key in configurationKeysToRender" :key>
        <ComponentHandler
          :configuration="configuration"
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

const configuration = ref(defaultConfiguration)

async function fetchExistingConfiguration() {
  const response: AxiosResponse<ReturnConfiguration> = await axios.get(
    `https://59uz2jlp99.execute-api.eu-central-1.amazonaws.com/download`
  )
  return response.data.message satisfies ConfigFiles[]
}

onMounted(async () => {
  const serverConfig = await fetchExistingConfiguration()
  console.log('_ ', serverConfig)
  const x = [...serverConfig].map((configObj) => {
    // console.log('_kekw', configObj)
    Object.keys(configObj).forEach((configKey) => {
      Object.keys(configObj[configKey]).forEach((keysOfEachConfig) => {
        if (configuration.value[keysOfEachConfig]) {
          const valueOfServerConfig = configObj[configKey][keysOfEachConfig]
          if (configuration.value[keysOfEachConfig].type === 'number') {
            const newVal = parseInt(configObj[configKey][keysOfEachConfig])
            console.log('hi ', keysOfEachConfig)
            configuration.value[keysOfEachConfig].value = newVal
          }
        }
      })
    })
  })
})
</script>
