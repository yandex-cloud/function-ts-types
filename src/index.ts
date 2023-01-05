import { Authorizer } from "./api-gateway/authorizer";
import { WebSocket as IWebSocket } from "./api-gateway/websocket";
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
    export namespace ApiGateway {
        export type Authorizer = FunctionHandler<
            Authorizer.Event,
            Authorizer.Result
        >;
        export namespace WebSocket {
            export type Connect = FunctionHandler<
                IWebSocket.Connect,
                Http.Result
            >;
            export type Message = FunctionHandler<
                IWebSocket.Message,
                Http.Result
            >;
            export type Disconnect = FunctionHandler<
                IWebSocket.Disconnect,
                Http.Result
            >;
        }
    }

    // Backward compatibility
    export type ApiGatewayAuthorizer = ApiGateway.Authorizer;

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
