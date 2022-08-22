import { FunctionHandler } from "../src";
import { ApiGateway } from "../src/api-gateway";

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
