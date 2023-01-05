import { Authorizer } from "./authorizer";

// Backward compatibility
export namespace ApiGatewayAuthorizer {
    export type Event = Authorizer.Event
    export type Result = Authorizer.Result
}