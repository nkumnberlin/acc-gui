import {Api, StackContext, use} from "sst/constructs";
import { Storage } from "./Storage";

export function API({ stack }: StackContext) {
    const { bucket } = use(Storage)


    const api = new Api(stack, "api", {
        defaults: {
            function: {
                bind: [bucket],
                permissions: [bucket],
                environment: {
                    BUCKET_NAME: bucket.bucketName
                }
            }
        },
        cors: {
            allowMethods: ["GET", "POST", "PUT", "DELETE"],
        },
        routes: {
            "POST /upload": "packages/functions/src/upload.main"
        }
    })


    return {
        api
    }

}
