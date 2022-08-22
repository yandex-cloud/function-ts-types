import { CloudLogging, FunctionHandler } from "../src";

export const handler: FunctionHandler<CloudLogging> = (event) => {
    return {
        statusCode: 200,
        body: event.messages,
    };
};
