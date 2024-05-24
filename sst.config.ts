import { SSTConfig } from "sst";
import {API} from "./stacks/API";
import { Storage } from "./stacks/Storage";
import { Frontend } from "./stacks/Frontend";

export default {
  config(_input) {
    return {
      name: "acc-dedicated-gui",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(Storage).stack(API).stack(Frontend);
  }
} satisfies SSTConfig;
