import { Handler } from "../src";
import { ApiGatewayAuthorizer } from "../src/api-gateway";

export const handler: Handler.ApiGatewayAuthorizer = (
    event
    // NOTE: If you don't want extra properties
    // specify the return result. For more information refer to
    // https://lemoine-benoit.medium.com/why-does-typescript-sometimes-fails-to-type-check-extra-properties-fd230ebbc295
): ApiGatewayAuthorizer.Result => {
    return {
        isAuthorized: true,
        context: event.headers,
    };
};
