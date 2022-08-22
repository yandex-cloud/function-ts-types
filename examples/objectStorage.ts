import { Handler } from "../src";

export const handler: Handler.ObjectStorage = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.bucket_id,
    };
};
