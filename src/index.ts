import { ApiGatewayAuthorizer } from "./api-gateway";
import { FunctionHandler } from "./functionHandler";
import { Http } from "./http";
import { ObjectStorage, Timer } from "./triggers";

export namespace Handler {
    export type ApiGatewayAuthorizer = FunctionHandler<
        ApiGatewayAuthorizer.Event,
        ApiGatewayAuthorizer.Result
    >;
    export type Http = FunctionHandler<Http.Event, Http.Result>;
    export type ObjectStorage = FunctionHandler<ObjectStorage.Event>;
    export type Timer = FunctionHandler<Timer.Event>;
}
