import type { Http } from "../http";

type PickedFunctionEventProps = Pick<
    Http.Event,
    "httpMethod" | "headers" | "queryStringParameters" | "requestContext"
>;

export namespace Authorizer {
    export type Event = {
        resource: string;
        cookies: Record<string, string>;
    } & PickedFunctionEventProps;
    
    export type Result = {
        isAuthorized: boolean;
        context: Record<string, any>;
    };
}