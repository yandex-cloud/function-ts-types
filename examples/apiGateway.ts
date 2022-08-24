import { Handler } from "../src";

export const handler: Handler.ApiGatewayAuthorizer = (event) => {
    return {
        statusCode: 200,
        body: event.headers,
        isAuthorized: true,
        keK: "plek",
        context: event.headers,
    };
};
