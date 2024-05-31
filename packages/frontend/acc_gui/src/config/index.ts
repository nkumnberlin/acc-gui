type FileTypes = 'configuration' | 'settings' | 'event' | 'eventRules'

export type Configuration = {
  key: string
  label: string
  type: string
  value: string | number | boolean
  fileType: FileTypes
}

export type ConfigFiles = {
  [key: string]: Configuration
}

export const carGroups = {
  freeForAll: 'FreeForAll',
  gt2: 'GT2',
  gt3: 'GT3',
  gt4: 'GT4',
  gtc: 'GTC',
  tcx: 'TCX'
}

export const tracks = {
  barcelona: 'Barcelona',
  brands_hatch: 'Brands Hatch',
  cota: 'Circuit of the Americas (COTA)',
  donington: 'Donington Park',
  hungaroring: 'Hungaroring',
  imola: 'Imola',
  indianapolis: 'Indianapolis',
  kyalami: 'Kyalami',
  laguna_seca: 'Laguna Seca',
  misano: 'Misano',
  monza: 'Monza',
  mount_panorama: 'Mount Panorama',
  nurburgring: 'Nürburgring',
  nurburgring_24h: 'Nürburgring 24h',
  oulton_park: 'Oulton Park',
  paul_ricard: 'Paul Ricard',
  red_bull_ring: 'Red Bull Ring',
  silverstone: 'Silverstone',
  snetterton: 'Snetterton',
  spa: 'Spa-Francorchamps',
  suzuka: 'Suzuka',
  valencia: 'Valencia',
  watkins_glen: 'Watkins Glen',
  zandvoort: 'Zandvoort',
  zolder: 'Zolder'
}

export const configuration: ConfigFiles = {
  tcpPort: {
    key: 'tcpPort',
    value: '',
    label: 'ACC clients will use this port to establish a connection to the server',
    type: 'number',
    fileType: 'configuration'
  },
  udpPort: {
    key: 'udpPort',
    value: '',
    label:
      'Connected clients will use this Port to stream the car positions and is used for the ping test. In case you never see your server getting a ping "value", this indicates that the udpPort is not accessible',
    type: 'number',
    fileType: 'configuration'
  },
  registerToLobby: {
    key: 'registerToLobby',
    value: 0,
    label: ' 0 = Not registered (Private Multiplayer), 1 = Registered (Public Multiplayer)',
    type: 'boolean',
    fileType: 'configuration'
  },
  maxConnections: {
    key: 'maxConnections',
    value: 0,
    label: 'The maximum number of connections a server will accept at a time',
    type: 'number',
    fileType: 'configuration'
  },
  lanDiscovery: {
    key: 'lanDiscovery',
    value: '',
    label:
      'Defines if the server will listen to LAN discovery requests. Can be turned off for dedicated servers',
    type: 'boolean',
    fileType: 'configuration'
  },
  configVersion: {
    key: 'configVersion',
    value: '',
    label: 'Configuration version',
    type: 'string',
    fileType: 'configuration'
  },
  publicIP: {
    key: 'publicIP',
    value: '',
    label:
      'Explicitly defines the public IP address. Useful if the backend is connected via a load balancer or reverse proxy',
    type: 'string',
    fileType: 'configuration'
  },
  serverName: {
    key: 'serverName',
    value: '',
    label: 'The server name displayed in the ACC UI pages',
    type: 'string',
    fileType: 'settings'
  },
  adminPassword: {
    key: 'adminPassword',
    value: '',
    label: 'Password to log in as Server Admin in the chat window',
    type: 'string',
    fileType: 'settings'
  },
  carGroup: {
    key: 'carGroup',
    value: '',
    label: 'Defines the car group for this server (e.g., FreeForAll, GT2, GT3, GT4, GTC, TCX)',
    type: 'dropdown',
    fileType: 'settings'
  },
  trackMedalsRequirement: {
    key: 'trackMedalsRequirement',
    value: '',
    label: 'The number of track medals a user must have for the given track (0, 1, 2, 3)',
    type: 'number',
    fileType: 'settings'
  },
  safetyRatingRequirement: {
    key: 'safetyRatingRequirement',
    value: '',
    label: 'The Safety Rating (SA) required to join the server (-1 to 99)',
    type: 'number',
    fileType: 'settings'
  },
  racecraftRatingRequirement: {
    key: 'racecraftRatingRequirement',
    value: '',
    label: 'The Racecraft Rating (RC) required to join the server (-1 to 99)',
    type: 'number',
    fileType: 'settings'
  },
  password: {
    key: 'password',
    value: '',
    label: 'Password required to enter the server (Private Multiplayer)',
    type: 'string',
    fileType: 'settings'
  },
  spectatorPassword: {
    key: 'spectatorPassword',
    value: '',
    label: "Password to enter the server as a spectator, must be different from 'password'",
    type: 'string',
    fileType: 'settings'
  },
  maxCarSlots: {
    key: 'maxCarSlots',
    value: '',
    label:
      "The number of car slots the server can occupy, overridden by the track's pit count or 30 for public MP",
    type: 'number',
    fileType: 'settings'
  },
  dumpLeaderboards: {
    key: 'dumpLeaderboards',
    value: '',
    label: "If set to 1, writes the result leaderboard in a 'results' folder after any session",
    type: 'boolean',
    fileType: 'settings'
  },
  dumpEntryList: {
    key: 'dumpEntryList',
    value: '',
    label:
      'Saves an entry list at the end of any Qualifying session, useful for building an entry list',
    type: 'boolean',
    fileType: 'settings'
  },
  isRaceLocked: {
    key: 'isRaceLocked',
    value: '',
    label: 'If set to 0, allows joining during a race session, not useful in Public Multiplayer',
    type: 'boolean',
    fileType: 'settings'
  },
  shortFormationLap: {
    key: 'shortFormationLap',
    value: '',
    label: '0 = one formation lap, 1 = short formation lap (Useful for Private Multiplayer)',
    type: 'boolean',
    fileType: 'settings'
  },
  formationLapType: {
    key: 'formationLapType',
    value: '',
    label: 'Toggles the formation lap type used on the server (0, 1, 3, 4, 5)',
    type: 'number',
    fileType: 'settings'
  },
  doDriverSwapBroadcast: {
    key: 'doDriverSwapBroadcast',
    value: '',
    label: 'doDriverSwapBroadcast',
    type: 'string',
    fileType: 'settings'
  },
  randomizeTrackWhenEmpty: {
    key: 'randomizeTrackWhenEmpty',
    value: '',
    label: 'If set to 1, changes to a random track when the last driver leaves',
    type: 'boolean',
    fileType: 'settings'
  },
  centralEntryListPath: {
    key: 'centralEntryListPath',
    value: '',
    label:
      'Overrides the default entryList path, so multiple ACC servers can use the same entrylist',
    type: 'string',
    fileType: 'settings'
  },
  allowAutoDQ: {
    key: 'allowAutoDQ',
    value: '',
    label:
      'If set to 0, the server won’t automatically disqualify drivers, handing out Stop&Go penalties instead',
    type: 'boolean',
    fileType: 'settings'
  },
  ignorePrematureDisconnects: {
    key: 'ignorePrematureDisconnects',
    value: '',
    label: 'Removes a fix where users can randomly lose the connection',
    type: 'boolean',
    fileType: 'settings'
  },
  track: {
    key: 'track',
    value: '',
    label: 'The track to run, includes 2019 season variants',
    type: 'dropdown',
    fileType: 'event'
  },
  preRaceWaitingTimeSeconds: {
    key: 'preRaceWaitingTimeSeconds',
    value: '',
    label: 'Preparation time before a race, cannot be less than 30s',
    type: 'number',
    fileType: 'event'
  },
  sessionOverTimeSeconds: {
    key: 'sessionOverTimeSeconds',
    value: '',
    label: "Time after which a session forcibly closes after the timer reaches '0:00",
    type: 'number',
    fileType: 'event'
  },
  ambientTemp: {
    key: 'ambientTemp',
    value: '',
    label: 'Baseline ambient temperature in °C',
    type: 'number',
    fileType: 'event'
  },
  cloudLevel: {
    key: 'cloudLevel',
    value: '',
    label: 'Baseline cloud level (0.0 to 1.0)',
    type: 'number',
    fileType: 'event'
  },
  rain: {
    key: 'rain',
    value: '',
    label:
      'Static rain level if weather randomness is off, increases rain chance if dynamic weather is on (0.0 to 1.0)',
    type: 'number',
    fileType: 'event'
  },
  weatherRandomness: {
    key: 'weatherRandomness',
    value: '',
    label: 'Dynamic weather level (0 = static, 1-4 = realistic, 5-7 = sensational)',
    type: 'number',
    fileType: 'event'
  },
  postQualySeconds: {
    key: 'postQualySeconds',
    value: '',
    label:
      'Time after the last driver finishes or sessionOverTimeSeconds passes in Q sessions until the race start',
    type: 'number',
    fileType: 'event'
  },
  postRaceSeconds: {
    key: 'postRaceSeconds',
    value: '',
    label: 'Additional time after the race ends before the next race weekend starts',
    type: 'number',
    fileType: 'event'
  },
  metaData: {
    key: 'metaData',
    value: '',
    label: 'User defined string transferred to result outputs',
    type: 'string',
    fileType: 'event'
  },
  simracerWeatherConditions: {
    key: 'simracerWeatherConditions',
    value: '',
    label: 'Limits maximum rain/wetness to roughly 2/3 of the maximum "value"s (experimental)',
    type: 'boolean',
    fileType: 'event'
  },
  isFixedConditionQualification: {
    key: 'isFixedConditionQualification',
    value: '',
    label: 'Ensures set weather conditions never change during qualification (experimental)',
    type: 'boolean',
    fileType: 'event'
  },
  sessions: {
    key: 'sessions',
    value: '',
    label:
      'List of session objects (hourOfDay, dayOfWeekend, timeMultiplier, sessionType, sessionDurationMinutes)',
    type: 'array',
    fileType: 'event'
  },
  hourOfDay: {
    key: 'hourOfDay',
    value: '',
    label: 'Session starting hour of the day (0 to 23)',
    type: 'number',
    fileType: 'event'
  },
  dayOfWeekend: {
    key: 'dayOfWeekend',
    value: '',
    label: 'Race weekend day (1 = Friday, 2 = Saturday, 3 = Sunday)',
    type: 'number',
    fileType: 'event'
  },
  timeMultiplier: {
    key: 'timeMultiplier',
    value: '',
    label: 'Rate at which session time advances in real-time (0 to 24)',
    type: 'number',
    fileType: 'event'
  },
  sessionType: {
    key: 'sessionType',
    value: '',
    label: 'Race session type (P = Practice, Q = Qualifying, R = Race)',
    type: 'string',
    fileType: 'event'
  },
  sessionDurationMinutes: {
    key: 'sessionDurationMinutes',
    value: '',
    label: 'Session duration in minutes',
    type: 'number',
    fileType: 'event'
  },
  qualifyStandingType: {
    key: 'qualifyStandingType',
    value: '',
    label: '1 = fastest lap, 2 = average lap (Endurance mode for multiple Q sessions, use 1)',
    type: 'number',
    fileType: 'eventRules'
  },
  superpoleMaxCar: {
    key: 'superpoleMaxCar',
    value: '',
    label: 'Not currently listed or described in the Kunos Server Admin manual',
    type: 'string',
    fileType: 'eventRules'
  },
  pitWindowLengthSec: {
    key: 'pitWindowLengthSec',
    value: '',
    label: 'Defines a pit window at the middle of the race (-1 disables it, 600 = 10 minutes)',
    type: 'number',
    fileType: 'eventRules'
  },
  driverStintTimeSec: {
    key: 'driverStintTimeSec',
    value: '',
    label: 'Maximum time a driver can stay out without penalty (-1 disables it, 3300 = 55 minutes)',
    type: 'number',
    fileType: 'eventRules'
  },
  isRefuellingAllowedInRace: {
    key: 'isRefuellingAllowedInRace',
    value: '',
    label: 'Defines if refuelling is allowed during race pitstops',
    type: 'boolean',
    fileType: 'eventRules'
  },
  isRefuellingTimeFixed: {
    key: 'isRefuellingTimeFixed',
    value: '',
    label:
      'If true, refuelling takes the same amount of time (25 seconds), otherwise it is linear to the amount refuelled',
    type: 'boolean',
    fileType: 'eventRules'
  },
  mandatoryPitstopCount: {
    key: 'mandatoryPitstopCount',
    value: '',
    label: 'Defines the basic mandatory pit stops (0 disables the feature)',
    type: 'number',
    fileType: 'eventRules'
  },
  maxTotalDrivingTime: {
    key: 'maxTotalDrivingTime',
    value: '',
    label: 'Restricts the maximum driving time for a single driver (-1 disables it)',
    type: 'number',
    fileType: 'eventRules'
  },
  maxDriversCount: {
    key: 'maxDriversCount',
    value: '',
    label: 'Maximum number of drivers on a car in driver swap situations',
    type: 'number',
    fileType: 'eventRules'
  },
  isMandatoryPitstopRefuellingRequired: {
    key: 'isMandatoryPitstopRefuellingRequired',
    value: '',
    label: 'Defines if a mandatory pitstop requires refuelling',
    type: 'boolean',
    fileType: 'eventRules'
  },
  isMandatoryPitstopTyreChangeRequired: {
    key: 'isMandatoryPitstopTyreChangeRequired',
    value: '',
    label: 'Defines if a mandatory pitstop requires changing tyres',
    type: 'boolean',
    fileType: 'eventRules'
  },
  isMandatoryPitstopSwapDriverRequired: {
    key: 'isMandatoryPitstopSwapDriverRequired',
    value: '',
    label: 'Defines if a mandatory pitstop requires a driver swap',
    type: 'boolean',
    fileType: 'eventRules'
  },
  tyreSetCount: {
    key: 'tyreSetCount',
    value: '',
    label: 'Number of permitted tire sets (1-50)',
    type: 'number',
    fileType: 'eventRules'
  }
}

// export const configuration: ConfigFiles = {
//   tcpPort: {
//     key: 'tcpPort',
//     value: '',
//     label: 'ACC clients will use this port to establish a connection to the server',
//     type: 'number'
//   },
//   udpPort: {
//     key: 'udpPort',
//     value: '',
//     label:
//       'Connected clients will use this Port to stream the car positions and is used for the ping test. In case you never see your server getting a ping "value", this indicates that the udpPort is not accessible',
//     type: 'number'
//   },
//   registerToLobby: {
//     key: 'registerToLobby',
//     value: 0,
//     label: ' 0 = Not registered (Private Multiplayer), 1 = Registered (Public Multiplayer)',
//     type: 'boolean'
//   },
//   maxConnections: {
//     key: 'maxConnections',
//     value: 0,
//     label: 'The maximum number of connections a server will accept at a time',
//     type: 'number'
//   },
//   lanDiscovery: {
//     key: 'lanDiscovery',
//     value: '',
//     label:
//       'Defines if the server will listen to LAN discovery requests. Can be turned off for dedicated servers',
//     type: 'boolean'
//   },
//   configVersion: {
//     key: 'configVersion',
//     value: '',
//     label: 'Configuration version',
//     type: 'string'
//   },
//   publicIP: {
//     key: 'publicIP',
//     value: '',
//     label:
//       'Explicitly defines the public IP address. Useful if the backend is connected via a load balancer or reverse proxy',
//     type: 'string'
//   }
// }
//
// export const settings = {
//   serverName: {
//     key: 'serverName',
//     value: '',
//     label: 'The server name displayed in the ACC UI pages',
//     type: 'string'
//   },
//   adminPassword: {
//     key: 'adminPassword',
//     value: '',
//     label: 'Password to log in as Server Admin in the chat window',
//     type: 'string'
//   },
//   carGroup: {
//     key: 'carGroup',
//     value: '',
//     label: 'Defines the car group for this server (e.g., FreeForAll, GT2, GT3, GT4, GTC, TCX)',
//     type: 'string'
//   },
//   trackMedalsRequirement: {
//     key: 'trackMedalsRequirement',
//     value: '',
//     label: 'The number of track medals a user must have for the given track (0, 1, 2, 3)',
//     type: 'number'
//   },
//   safetyRatingRequirement: {
//     key: 'safetyRatingRequirement',
//     value: '',
//     label: 'The Safety Rating (SA) required to join the server (-1 to 99)',
//     type: 'number'
//   },
//   racecraftRatingRequirement: {
//     key: 'racecraftRatingRequirement',
//     value: '',
//     label: 'The Racecraft Rating (RC) required to join the server (-1 to 99)',
//     type: 'number'
//   },
//   password: {
//     key: 'password',
//     value: '',
//     label: 'Password required to enter the server (Private Multiplayer)',
//     type: 'string'
//   },
//   spectatorPassword: {
//     key: 'spectatorPassword',
//     value: '',
//     label: "Password to enter the server as a spectator, must be different from 'password'",
//     type: 'string'
//   },
//   maxCarSlots: {
//     key: 'maxCarSlots',
//     value: '',
//     label:
//       "The number of car slots the server can occupy, overridden by the track's pit count or 30 for public MP",
//     type: 'number'
//   },
//   dumpLeaderboards: {
//     key: 'dumpLeaderboards',
//     value: '',
//     label: "If set to 1, writes the result leaderboard in a 'results' folder after any session",
//     type: 'boolean'
//   },
//   dumpEntryList: {
//     key: 'dumpEntryList',
//     value: '',
//     label:
//       'Saves an entry list at the end of any Qualifying session, useful for building an entry list',
//     type: 'boolean'
//   },
//   isRaceLocked: {
//     key: 'isRaceLocked',
//     value: '',
//     label: 'If set to 0, allows joining during a race session, not useful in Public Multiplayer',
//     type: 'boolean'
//   },
//   shortFormationLap: {
//     key: 'shortFormationLap',
//     value: '',
//     label: '0 = one formation lap, 1 = short formation lap (Useful for Private Multiplayer)',
//     type: 'boolean'
//   },
//   formationLapType: {
//     key: 'formationLapType',
//     value: '',
//     label: 'Toggles the formation lap type used on the server (0, 1, 3, 4, 5)',
//     type: 'number'
//   },
//   doDriverSwapBroadcast: {
//     key: 'doDriverSwapBroadcast',
//     value: '',
//     label: 'doDriverSwapBroadcast',
//     type: 'string'
//   },
//   randomizeTrackWhenEmpty: {
//     key: 'randomizeTrackWhenEmpty',
//     value: '',
//     label: 'If set to 1, changes to a random track when the last driver leaves',
//     type: 'boolean'
//   },
//   centralEntryListPath: {
//     key: 'centralEntryListPath',
//     value: '',
//     label:
//       'Overrides the default entryList path, so multiple ACC servers can use the same entrylist',
//     type: 'string'
//   },
//   allowAutoDQ: {
//     key: 'allowAutoDQ',
//     value: '',
//     label:
//       'If set to 0, the server won’t automatically disqualify drivers, handing out Stop&Go penalties instead',
//     type: 'boolean'
//   },
//   ignorePrematureDisconnects: {
//     key: 'ignorePrematureDisconnects',
//     value: '',
//     label: 'Removes a fix where users can randomly lose the connection',
//     type: 'boolean'
//   },
//   configVersion: {
//     key: 'configVersion',
//     value: '',
//     label: 'Configuration version',
//     type: 'string'
//   }
// }
//
// export const event = {
//   track: {
//     key: 'track',
//     value: '',
//     label: 'The track to run, includes 2019 season variants',
//     type: 'string'
//   },
//   preRaceWaitingTimeSeconds: {
//     key: 'preRaceWaitingTimeSeconds',
//     value: '',
//     label: 'Preparation time before a race, cannot be less than 30s',
//     type: 'number'
//   },
//   sessionOverTimeSeconds: {
//     key: 'sessionOverTimeSeconds',
//     value: '',
//     label: "Time after which a session forcibly closes after the timer reaches '0:00",
//     type: 'number'
//   },
//   ambientTemp: {
//     key: 'ambientTemp',
//     value: '',
//     label: 'Baseline ambient temperature in °C',
//     type: 'number'
//   },
//   cloudLevel: {
//     key: 'cloudLevel',
//     value: '',
//     label: 'Baseline cloud level (0.0 to 1.0)',
//     type: 'number'
//   },
//   rain: {
//     key: 'rain',
//     value: '',
//     label:
//       'Static rain level if weather randomness is off, increases rain chance if dynamic weather is on (0.0 to 1.0)',
//     type: 'number'
//   },
//   weatherRandomness: {
//     key: 'weatherRandomness',
//     value: '',
//     label: 'Dynamic weather level (0 = static, 1-4 = realistic, 5-7 = sensational)',
//     type: 'number'
//   },
//   postQualySeconds: {
//     key: 'postQualySeconds',
//     value: '',
//     label:
//       'Time after the last driver finishes or sessionOverTimeSeconds passes in Q sessions until the race start',
//     type: 'number'
//   },
//   postRaceSeconds: {
//     key: 'postRaceSeconds',
//     value: '',
//     label: 'Additional time after the race ends before the next race weekend starts',
//     type: 'number'
//   },
//   metaData: {
//     key: 'metaData',
//     value: '',
//     label: 'User defined string transferred to result outputs',
//     type: 'string'
//   },
//   simracerWeatherConditions: {
//     key: 'simracerWeatherConditions',
//     value: '',
//     label: 'Limits maximum rain/wetness to roughly 2/3 of the maximum "value"s (experimental)',
//     type: 'boolean'
//   },
//   isFixedConditionQualification: {
//     key: 'isFixedConditionQualification',
//     value: '',
//     label: 'Ensures set weather conditions never change during qualification (experimental)',
//     type: 'boolean'
//   },
//   sessions: {
//     key: 'sessions',
//     value: '',
//     label:
//       'List of session objects (hourOfDay, dayOfWeekend, timeMultiplier, sessionType, sessionDurationMinutes)',
//     type: 'array'
//   },
//   hourOfDay: {
//     key: 'hourOfDay',
//     value: '',
//     label: 'Session starting hour of the day (0 to 23)',
//     type: 'number'
//   },
//   dayOfWeekend: {
//     key: 'dayOfWeekend',
//     value: '',
//     label: 'Race weekend day (1 = Friday, 2 = Saturday, 3 = Sunday)',
//     type: 'number'
//   },
//   timeMultiplier: {
//     key: 'timeMultiplier',
//     value: '',
//     label: 'Rate at which session time advances in real-time (0 to 24)',
//     type: 'number'
//   },
//   sessionType: {
//     key: 'sessionType',
//     value: '',
//     label: 'Race session type (P = Practice, Q = Qualifying, R = Race)',
//     type: 'string'
//   },
//   sessionDurationMinutes: {
//     key: 'sessionDurationMinutes',
//     value: '',
//     label: 'Session duration in minutes',
//     type: 'number'
//   }
// }
//
// export const eventRules = {
//   qualifyStandingType: {
//     key: 'qualifyStandingType',
//     value: '',
//     label: '1 = fastest lap, 2 = average lap (Endurance mode for multiple Q sessions, use 1)',
//     type: 'number'
//   },
//   superpoleMaxCar: {
//     key: 'superpoleMaxCar',
//     value: '',
//     label: 'Not currently listed or described in the Kunos Server Admin manual',
//     type: 'string'
//   },
//   pitWindowLengthSec: {
//     key: 'pitWindowLengthSec',
//     value: '',
//     label: 'Defines a pit window at the middle of the race (-1 disables it, 600 = 10 minutes)',
//     type: 'number'
//   },
//   driverStintTimeSec: {
//     key: 'driverStintTimeSec',
//     value: '',
//     label: 'Maximum time a driver can stay out without penalty (-1 disables it, 3300 = 55 minutes)',
//     type: 'number'
//   },
//   isRefuellingAllowedInRace: {
//     key: 'isRefuellingAllowedInRace',
//     value: '',
//     label: 'Defines if refuelling is allowed during race pitstops',
//     type: 'boolean'
//   },
//   isRefuellingTimeFixed: {
//     key: 'isRefuellingTimeFixed',
//     value: '',
//     label:
//       'If true, refuelling takes the same amount of time (25 seconds), otherwise it is linear to the amount refuelled',
//     type: 'boolean'
//   },
//   mandatoryPitstopCount: {
//     key: 'mandatoryPitstopCount',
//     value: '',
//     label: 'Defines the basic mandatory pit stops (0 disables the feature)',
//     type: 'number'
//   },
//   maxTotalDrivingTime: {
//     key: 'maxTotalDrivingTime',
//     value: '',
//     label: 'Restricts the maximum driving time for a single driver (-1 disables it)',
//     type: 'number'
//   },
//   maxDriversCount: {
//     key: 'maxDriversCount',
//     value: '',
//     label: 'Maximum number of drivers on a car in driver swap situations',
//     type: 'number'
//   },
//   isMandatoryPitstopRefuellingRequired: {
//     key: 'isMandatoryPitstopRefuellingRequired',
//     value: '',
//     label: 'Defines if a mandatory pitstop requires refuelling',
//     type: 'boolean'
//   },
//   isMandatoryPitstopTyreChangeRequired: {
//     key: 'isMandatoryPitstopTyreChangeRequired',
//     value: '',
//     label: 'Defines if a mandatory pitstop requires changing tyres',
//     type: 'boolean'
//   },
//   isMandatoryPitstopSwapDriverRequired: {
//     key: 'isMandatoryPitstopSwapDriverRequired',
//     value: '',
//     label: 'Defines if a mandatory pitstop requires a driver swap',
//     type: 'boolean'
//   },
//   tyreSetCount: {
//     key: 'tyreSetCount',
//     value: '',
//     label: 'Number of permitted tire sets (1-50)',
//     type: 'number'
//   }
// }
