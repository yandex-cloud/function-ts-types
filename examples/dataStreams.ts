import { DataStreams, FunctionHandler } from "../src";

export const handler: FunctionHandler<DataStreams> = (event) => {
    return {
        statusCode: 200,
        body: event.messages,
    };
};
