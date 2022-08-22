import type { Http } from "./http";

type PickedFunctionEventProps = Pick<
    Http.Event,
    "httpMethod" | "headers" | "queryStringParameters" | "requestContext"
>;

export namespace ApiGatewayAuthorizer {
    export interface Event extends PickedFunctionEventProps {
        resource: string;
        cookies: Record<string, string>;
    }
    export interface Result {
        isAuthorized: boolean;
        context: Record<string, any>;
    }
}
