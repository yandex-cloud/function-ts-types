import { FunctionHandler, ObjectStorage } from "../src";

export const handler: FunctionHandler<ObjectStorage> = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.bucket_id,
    };
};
