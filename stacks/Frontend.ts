import {StackContext, StaticSite, Bucket, use} from "sst/constructs";
import { Storage } from "./Storage";
import {API} from "./API";

export function Frontend({ stack }: StackContext) {
  const {bucket } = use(Storage);
  const {api} = use(API);

  const page = new StaticSite(stack, "page", {
    path: "packages/frontend/acc_gui",
    buildOutput: "dist",
    buildCommand: "pnpm run build",
  })

  stack.addOutputs({
    api: api.url,
    bucketName: bucket.bucketName,
    website: page.url
  })
  return {page}
}
