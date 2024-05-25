import { SSTConfig } from "sst";
import {API} from "./stacks/API";
import { Storage } from "./stacks/Storage";
import { Frontend } from "./stacks/Frontend";
import { Functions } from "./stacks/Function";

export default {
  config(_input) {
    return {
      name: "acc-dedicated-gui",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(Storage).stack(API).stack(Frontend).stack(Functions);
  }
} satisfies SSTConfig;
