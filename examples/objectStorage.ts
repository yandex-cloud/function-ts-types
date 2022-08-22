import { FunctionHandler } from "../src";
import { ObjectStorage } from "../src/triggers";

export const handler: FunctionHandler<ObjectStorage> = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.bucket_id,
    };
};
