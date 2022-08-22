import { Handler } from "../src";

export const handler: Handler.DataStreams = (event) => {
    // TODO check what does "depends on the source" means
    return {
        statusCode: 200,
        body: event.messages,
    };
};
