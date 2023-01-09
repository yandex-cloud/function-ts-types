import { Authorizer } from "./authorizer";

// @deprecated use `ApiGateway.Authorizer` instead
export namespace ApiGatewayAuthorizer {
    export type Event = Authorizer.Event;
    export type Result = Authorizer.Result;
}
