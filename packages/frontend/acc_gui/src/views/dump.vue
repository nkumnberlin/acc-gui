<!--<template>-->
<!--  <div class="">-->
<!--    &lt;!&ndash;    only display if message exist. check if positive or negative message. it either contains error or success&ndash;&gt;-->
<!--    <div v-if="message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"-->
<!--         role="alert">-->
<!--      <span class="block sm:inline">{{ message }}</span>-->
<!--      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">-->
<!--        <svg class="fill-current h-6 w-6 text-green-500" role="button"-->
<!--             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--          <title>Close</title>-->
<!--          <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                d="M14.95 5.05a.75.75 0 0 1 1.06 1.06L11.06 10l4.95 4.95a.75.75 0 1 1-1.06 1.06L10 11.06l-4.95 4.95a.75.75 0 0 1-1.06-1.06L8.94 10 4.05 5.05a.75.75 0 0 1 1.06-1.06L10 8.94l4.95-4.95z"></path>-->
<!--        </svg>-->
<!--      </span>-->
<!--    </div>-->
<!--    <div class="p-8 rounded-lg shadow-lg">-->
<!--      &lt;!&ndash; Section 1 &ndash;&gt;-->
<!--      <div class="space-y-4">-->
<!--        <h2 class="text-2xl font-semibold mb-4">Configuration</h2>-->
<!--        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ registerToLobby.key }} - Type: {{ registerToLobby.type }}</p>-->
<!--            <label :for="registerToLobby.key" class="block text-l font-small text-gray-700">{{ registerToLobby.label-->
<!--              }}</label>-->
<!--            <InputText :id="registerToLobby.key" class="w-full mt-2" v-model="registerToLobby.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ maxConnections.key }} - Type: {{ maxConnections.type }}</p>-->
<!--            <label :for="maxConnections.key" class="block text-l font-small text-gray-700">{{ maxConnections.label-->
<!--              }}</label>-->
<!--            <InputText :id="maxConnections.key" class="w-full mt-2" v-model="maxConnections.value" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button class="mt-2 bg-zinc-200 hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="updateConfiguration">-->
<!--          Update Configuration-->
<!--        </button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Section 2 &ndash;&gt;-->
<!--      <div class="space-y-4 mt-8">-->
<!--        <h2 class="text-2xl font-semibold mb-4">Settings</h2>-->
<!--        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ serverName.key }} - Type: {{ serverName.type }}</p>-->
<!--            <label :for="serverName.key" class="block text-l font-small text-gray-700">{{ serverName.label }}</label>-->
<!--            <InputText :id="serverName.key" class="w-full mt-2" v-model="serverName.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ adminPassword.key }} - Type: {{ adminPassword.type }}</p>-->
<!--            <label :for="adminPassword.key" class="block text-l font-small text-gray-700">{{ adminPassword.label-->
<!--              }}</label>-->
<!--            <InputText :id="adminPassword.key" class="w-full mt-2" v-model="adminPassword.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ carGroup.key }} - Type: {{ carGroup.type }}</p>-->
<!--            <label :for="carGroup.key" class="block text-l font-small text-gray-700">{{ carGroup.label }}</label>-->
<!--            <InputText :id="carGroup.key" class="w-full mt-2" v-model="carGroup.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ safetyRatingRequirement.key }} - Type: {{ safetyRatingRequirement.type }}</p>-->
<!--            <label :for="safetyRatingRequirement.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ safetyRatingRequirement.label }}</label>-->
<!--            <InputText :id="safetyRatingRequirement.key" class="w-full mt-2" v-model="safetyRatingRequirement.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ password.key }} - Type: {{ password.type }}</p>-->
<!--            <label :for="password.key" class="block text-l font-small text-gray-700">{{ password.label }}</label>-->
<!--            <InputText :id="password.key" class="w-full mt-2" v-model="password.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ spectatorPassword.key }} - Type: {{ spectatorPassword.type }}</p>-->
<!--            <label :for="spectatorPassword.key" class="block text-l font-small text-gray-700">{{ spectatorPassword.label-->
<!--              }}</label>-->
<!--            <InputText :id="spectatorPassword.key" class="w-full mt-2" v-model="spectatorPassword.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ maxCarSlots.key }} - Type: {{ maxCarSlots.type }}</p>-->
<!--            <label :for="maxCarSlots.key" class="block text-l font-small text-gray-700">{{ maxCarSlots.label }}</label>-->
<!--            <InputText :id="maxCarSlots.key" class="w-full mt-2" v-model="maxCarSlots.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ dumpLeaderboards.key }} - Type: {{ dumpLeaderboards.type }}</p>-->
<!--            <label :for="dumpLeaderboards.key" class="block text-l font-small text-gray-700">{{ dumpLeaderboards.label-->
<!--              }}</label>-->
<!--            <InputText :id="dumpLeaderboards.key" class="w-full mt-2" v-model="dumpLeaderboards.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ dumpEntryList.key }} - Type: {{ dumpEntryList.type }}</p>-->
<!--            <label :for="dumpEntryList.key" class="block text-l font-small text-gray-700">{{ dumpEntryList.label-->
<!--              }}</label>-->
<!--            <InputText :id="dumpEntryList.key" class="w-full mt-2" v-model="dumpEntryList.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isRaceLocked.key }} - Type: {{ isRaceLocked.type }}</p>-->
<!--            <label :for="isRaceLocked.key" class="block text-l font-small text-gray-700">{{ isRaceLocked.label-->
<!--              }}</label>-->
<!--            <InputText :id="isRaceLocked.key" class="w-full mt-2" v-model="isRaceLocked.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ shortFormationLap.key }} - Type: {{ shortFormationLap.type }}</p>-->
<!--            <label :for="shortFormationLap.key" class="block text-l font-small text-gray-700">{{ shortFormationLap.label-->
<!--              }}</label>-->
<!--            <InputText :id="shortFormationLap.key" class="w-full mt-2" v-model="shortFormationLap.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ formationLapType.key }} - Type: {{ formationLapType.type }}</p>-->
<!--            <label :for="formationLapType.key" class="block text-l font-small text-gray-700">{{ formationLapType.label-->
<!--              }}</label>-->
<!--            <InputText :id="formationLapType.key" class="w-full mt-2" v-model="formationLapType.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ doDriverSwapBroadcast.key }} - Type: {{ doDriverSwapBroadcast.type }}</p>-->
<!--            <label :for="doDriverSwapBroadcast.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ doDriverSwapBroadcast.label }}</label>-->
<!--            <InputText :id="doDriverSwapBroadcast.key" class="w-full mt-2" v-model="doDriverSwapBroadcast.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ allowAutoDQ.key }} - Type: {{ allowAutoDQ.type }}</p>-->
<!--            <label :for="allowAutoDQ.key" class="block text-l font-small text-gray-700">{{ allowAutoDQ.label }}</label>-->
<!--            <InputText :id="allowAutoDQ.key" class="w-full mt-2" v-model="allowAutoDQ.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ configVersion.key }} - Type: {{ configVersion.type }}</p>-->
<!--            <label :for="configVersion.key" class="block text-l font-small text-gray-700">{{ configVersion.label-->
<!--              }}</label>-->
<!--            <InputText :id="configVersion.key" class="w-full mt-2" v-model="configVersion.value" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button class="mt-2 bg-zinc-200 hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="updateSettings">Update-->
<!--          Settings-->
<!--        </button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Section 3 &ndash;&gt;-->
<!--      <div class="space-y-4 mt-8">-->
<!--        <h2 class="text-2xl font-semibold mb-4">Event</h2>-->
<!--        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ track.key }} - Type: {{ track.type }}</p>-->
<!--            <label :for="track.key" class="block text-l font-small text-gray-700">{{ track.label }}</label>-->
<!--            <InputText :id="track.key" class="w-full mt-2" v-model="track.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ preRaceWaitingTimeSeconds.key }} - Type: {{ preRaceWaitingTimeSeconds.type }}</p>-->
<!--            <label :for="preRaceWaitingTimeSeconds.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ preRaceWaitingTimeSeconds.label }}</label>-->
<!--            <InputText :id="preRaceWaitingTimeSeconds.key" class="w-full mt-2"-->
<!--                       v-model="preRaceWaitingTimeSeconds.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ sessionOverTimeSeconds.key }} - Type: {{ sessionOverTimeSeconds.type }}</p>-->
<!--            <label :for="sessionOverTimeSeconds.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ sessionOverTimeSeconds.label }}</label>-->
<!--            <InputText :id="sessionOverTimeSeconds.key" class="w-full mt-2" v-model="sessionOverTimeSeconds.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ ambientTemp.key }} - Type: {{ ambientTemp.type }}</p>-->
<!--            <label :for="ambientTemp.key" class="block text-l font-small text-gray-700">{{ ambientTemp.label }}</label>-->
<!--            <InputText :id="ambientTemp.key" class="w-full mt-2" v-model="ambientTemp.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ cloudLevel.key }} - Type: {{ cloudLevel.type }}</p>-->
<!--            <label :for="cloudLevel.key" class="block text-l font-small text-gray-700">{{ cloudLevel.label }}</label>-->
<!--            <InputText :id="cloudLevel.key" class="w-full mt-2" v-model="cloudLevel.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ rain.key }} - Type: {{ rain.type }}</p>-->
<!--            <label :for="rain.key" class="block text-l font-small text-gray-700">{{ rain.label }}</label>-->
<!--            <InputText :id="rain.key" class="w-full mt-2" v-model="rain.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ weatherRandomness.key }} - Type: {{ weatherRandomness.type }}</p>-->
<!--            <label :for="weatherRandomness.key" class="block text-l font-small text-gray-700">{{ weatherRandomness.label-->
<!--              }}</label>-->
<!--            <InputText :id="weatherRandomness.key" class="w-full mt-2" v-model="weatherRandomness.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ postQualySeconds.key }} - Type: {{ postQualySeconds.type }}</p>-->
<!--            <label :for="postQualySeconds.key" class="block text-l font-small text-gray-700">{{ postQualySeconds.label-->
<!--              }}</label>-->
<!--            <InputText :id="postQualySeconds.key" class="w-full mt-2" v-model="postQualySeconds.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ postRaceSeconds.key }} - Type: {{ postRaceSeconds.type }}</p>-->
<!--            <label :for="postRaceSeconds.key" class="block text-l font-small text-gray-700">{{ postRaceSeconds.label-->
<!--              }}</label>-->
<!--            <InputText :id="postRaceSeconds.key" class="w-full mt-2" v-model="postRaceSeconds.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ metaData.key }} - Type: {{ metaData.type }}</p>-->
<!--            <label :for="metaData.key" class="block text-l font-small text-gray-700">{{ metaData.label }}</label>-->
<!--            <InputText :id="metaData.key" class="w-full mt-2" v-model="metaData.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ simracerWeatherConditions.key }} - Type: {{ simracerWeatherConditions.type }}</p>-->
<!--            <label :for="simracerWeatherConditions.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ simracerWeatherConditions.label }}</label>-->
<!--            <InputText :id="simracerWeatherConditions.key" class="w-full mt-2"-->
<!--                       v-model="simracerWeatherConditions.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isFixedConditionQualification.key }} - Type:-->
<!--              {{ isFixedConditionQualification.type }}</p>-->
<!--            <label :for="isFixedConditionQualification.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isFixedConditionQualification.label }}</label>-->
<!--            <InputText :id="isFixedConditionQualification.key" class="w-full mt-2"-->
<!--                       v-model="isFixedConditionQualification.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ sessions.key }} - Type: {{ sessions.type }}</p>-->
<!--            <label :for="sessions.key" class="block text-l font-small text-gray-700">{{ sessions.label }}</label>-->
<!--            <InputText :id="sessions.key" class="w-full mt-2" v-model="sessions.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ hourOfDay.key }} - Type: {{ hourOfDay.type }}</p>-->
<!--            <label :for="hourOfDay.key" class="block text-l font-small text-gray-700">{{ hourOfDay.label }}</label>-->
<!--            <InputText :id="hourOfDay.key" class="w-full mt-2" v-model="hourOfDay.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ dayOfWeekend.key }} - Type: {{ dayOfWeekend.type }}</p>-->
<!--            <label :for="dayOfWeekend.key" class="block text-l font-small text-gray-700">{{ dayOfWeekend.label-->
<!--              }}</label>-->
<!--            <InputText :id="dayOfWeekend.key" class="w-full mt-2" v-model="dayOfWeekend.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ timeMultiplier.key }} - Type: {{ timeMultiplier.type }}</p>-->
<!--            <label :for="timeMultiplier.key" class="block text-l font-small text-gray-700">{{ timeMultiplier.label-->
<!--              }}</label>-->
<!--            <InputText :id="timeMultiplier.key" class="w-full mt-2" v-model="timeMultiplier.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ sessionType.key }} - Type: {{ sessionType.type }}</p>-->
<!--            <label :for="sessionType.key" class="block text-l font-small text-gray-700">{{ sessionType.label }}</label>-->
<!--            <InputText :id="sessionType.key" class="w-full mt-2" v-model="sessionType.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ sessionDurationMinutes.key }} - Type: {{ sessionDurationMinutes.type }}</p>-->
<!--            <label :for="sessionDurationMinutes.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ sessionDurationMinutes.label }}</label>-->
<!--            <InputText :id="sessionDurationMinutes.key" class="w-full mt-2" v-model="sessionDurationMinutes.value" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button class="mt-2 bg-zinc-200 hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="test">Update Event-->
<!--        </button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Section 4 &ndash;&gt;-->
<!--      <div class="space-y-4 mt-8">-->
<!--        <h2 class="text-2xl font-semibold mb-4">Event Rules</h2>-->
<!--        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ qualifyStandingType.key }} - Type: {{ qualifyStandingType.type }}</p>-->
<!--            <label :for="qualifyStandingType.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ qualifyStandingType.label }}</label>-->
<!--            <InputText :id="qualifyStandingType.key" class="w-full mt-2" v-model="qualifyStandingType.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ superpoleMaxCar.key }} - Type: {{ superpoleMaxCar.type }}</p>-->
<!--            <label :for="superpoleMaxCar.key" class="block text-l font-small text-gray-700">{{ superpoleMaxCar.label-->
<!--              }}</label>-->
<!--            <InputText :id="superpoleMaxCar.key" class="w-full mt-2" v-model="superpoleMaxCar.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ pitWindowLengthSec.key }} - Type: {{ pitWindowLengthSec.type }}</p>-->
<!--            <label :for="pitWindowLengthSec.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ pitWindowLengthSec.label }}</label>-->
<!--            <InputText :id="pitWindowLengthSec.key" class="w-full mt-2" v-model="pitWindowLengthSec.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ driverStintTimeSec.key }} - Type: {{ driverStintTimeSec.type }}</p>-->
<!--            <label :for="driverStintTimeSec.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ driverStintTimeSec.label }}</label>-->
<!--            <InputText :id="driverStintTimeSec.key" class="w-full mt-2" v-model="driverStintTimeSec.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isRefuellingAllowedInRace.key }} - Type: {{ isRefuellingAllowedInRace.type }}</p>-->
<!--            <label :for="isRefuellingAllowedInRace.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isRefuellingAllowedInRace.label }}</label>-->
<!--            <InputText :id="isRefuellingAllowedInRace.key" class="w-full mt-2"-->
<!--                       v-model="isRefuellingAllowedInRace.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isRefuellingTimeFixed.key }} - Type: {{ isRefuellingTimeFixed.type }}</p>-->
<!--            <label :for="isRefuellingTimeFixed.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isRefuellingTimeFixed.label }}</label>-->
<!--            <InputText :id="isRefuellingTimeFixed.key" class="w-full mt-2" v-model="isRefuellingTimeFixed.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ mandatoryPitstopCount.key }} - Type: {{ mandatoryPitstopCount.type }}</p>-->
<!--            <label :for="mandatoryPitstopCount.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ mandatoryPitstopCount.label }}</label>-->
<!--            <InputText :id="mandatoryPitstopCount.key" class="w-full mt-2" v-model="mandatoryPitstopCount.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ maxTotalDrivingTime.key }} - Type: {{ maxTotalDrivingTime.type }}</p>-->
<!--            <label :for="maxTotalDrivingTime.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ maxTotalDrivingTime.label }}</label>-->
<!--            <InputText :id="maxTotalDrivingTime.key" class="w-full mt-2" v-model="maxTotalDrivingTime.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ maxDriversCount.key }} - Type: {{ maxDriversCount.type }}</p>-->
<!--            <label :for="maxDriversCount.key" class="block text-l font-small text-gray-700">{{ maxDriversCount.label-->
<!--              }}</label>-->
<!--            <InputText :id="maxDriversCount.key" class="w-full mt-2" v-model="maxDriversCount.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isMandatoryPitstopRefuellingRequired.key }} - Type:-->
<!--              {{ isMandatoryPitstopRefuellingRequired.type }}</p>-->
<!--            <label :for="isMandatoryPitstopRefuellingRequired.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isMandatoryPitstopRefuellingRequired.label-->
<!--              }}</label>-->
<!--            <InputText :id="isMandatoryPitstopRefuellingRequired.key" class="w-full mt-2"-->
<!--                       v-model="isMandatoryPitstopRefuellingRequired.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isMandatoryPitstopTyreChangeRequired.key }} - Type:-->
<!--              {{ isMandatoryPitstopTyreChangeRequired.type }}</p>-->
<!--            <label :for="isMandatoryPitstopTyreChangeRequired.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isMandatoryPitstopTyreChangeRequired.label-->
<!--              }}</label>-->
<!--            <InputText :id="isMandatoryPitstopTyreChangeRequired.key" class="w-full mt-2"-->
<!--                       v-model="isMandatoryPitstopTyreChangeRequired.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ isMandatoryPitstopSwapDriverRequired.key }} - Type:-->
<!--              {{ isMandatoryPitstopSwapDriverRequired.type }}</p>-->
<!--            <label :for="isMandatoryPitstopSwapDriverRequired.key"-->
<!--                   class="block text-l font-small text-gray-700">{{ isMandatoryPitstopSwapDriverRequired.label-->
<!--              }}</label>-->
<!--            <InputText :id="isMandatoryPitstopSwapDriverRequired.key" class="w-full mt-2"-->
<!--                       v-model="isMandatoryPitstopSwapDriverRequired.value" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <p class="mb-2">Key: {{ tyreSetCount.key }} - Type: {{ tyreSetCount.type }}</p>-->
<!--            <label :for="tyreSetCount.key" class="block text-l font-small text-gray-700">{{ tyreSetCount.label-->
<!--              }}</label>-->
<!--            <InputText :id="tyreSetCount.key" class="w-full mt-2" v-model="tyreSetCount.value" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button class="mt-2 bg-zinc-200 hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="test">Update Event-->
<!--          Rules-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import InputText from 'primevue/inputtext'-->
<!--</script>-->
