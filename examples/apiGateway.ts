import { ApiGatewayAuthorizer, FunctionHandler } from "../src";

export const handler: FunctionHandler<
    ApiGatewayAuthorizer.Event,
    ApiGatewayAuthorizer.Result
> = (event) => {
    return {
        statusCode: 200,
        body: event.headers,
        isAuthorized: true,
        context: event.headers,
    };
};
