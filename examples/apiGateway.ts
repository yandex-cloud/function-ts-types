import { ApiGateway, FunctionHandler } from "../src";

export const handler: FunctionHandler<ApiGateway.Event, ApiGateway.Result> = (
    event
) => {
    return {
        statusCode: 200,
        body: event.headers,
        isAuthorized: true,
        context: event.headers,
    };
};
