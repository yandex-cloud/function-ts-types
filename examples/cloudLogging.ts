import { Handler } from "../src";

export const handler: Handler.CloudLogging = (event) => {
    return {
        statusCode: 200,
        body: event.messages.toString(),
    };
};
