import { ApiGatewayAuthorizer } from "./api-gateway";
import { FunctionHandler } from "./functionHandler";
import { Http } from "./http";
import {
    Budget,
    CloudLogging,
    ContainerRegistry,
    DataStreams,
    IotCore,
    MessageQueue,
    ObjectStorage,
    Timer,
} from "./triggers";

export namespace Handler {
    export type ApiGatewayAuthorizer = FunctionHandler<
        ApiGatewayAuthorizer.Event,
        ApiGatewayAuthorizer.Result
    >;
    export type Http = FunctionHandler<Http.Event, Http.Result>;
    export type ObjectStorage = FunctionHandler<
        ObjectStorage.Event,
        Http.Result
    >;
    export type Timer = FunctionHandler<Timer.Event, Http.Result>;
    export type MessageQueue = FunctionHandler<MessageQueue.Event, Http.Result>;
    export type IotCore = FunctionHandler<IotCore.Event, Http.Result>;
    export type DataStreams = FunctionHandler<DataStreams.Event, Http.Result>;
    export type ContainerRegistry = FunctionHandler<
        ContainerRegistry.Event,
        Http.Result
    >;
    export type CloudLogging = FunctionHandler<CloudLogging.Event, Http.Result>;
    export type Budget = FunctionHandler<Budget.Event, Http.Result>;
}
