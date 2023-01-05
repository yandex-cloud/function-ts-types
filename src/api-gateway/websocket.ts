import type { Http } from "../http";

export namespace WebSocket {
    export type Connect = Common<Headers> & {
        httpMethod: Http.Event["httpMethod"];
        requestContext: RequestContext<"CONNECT">;
    };

    export type Message = Common<MessageHeaders> & {
        body: string;
        isBase64Encoded: boolean;
        requestContext: RequestContext<"MESSAGE"> & {
            messageId: string;
        };
    };

    export type Disconnect = Common<DisconnectHeaders> & {
        httpMethod: Http.Event["httpMethod"];
        requestContext: RequestContext<"DISCONNECT"> & {
            // TODO should we specify HTTP method, i.g. DELETE exactly?
            disconnectStatusCode: number;
        };
    };

    type Common<Headers extends Record<string, string>> = {
        resource: string;
        path: string;
        pathParameters: Record<string, string>;
        headers: Headers;
        multiValueHeaders: {
            [K in keyof Headers]: Headers[K][];
        };
        parameters: Record<string, string>;
        multiValueParameters: Record<string, string[]>;
        operationId: string;
    };

    type MessageHeaders = {
        "X-Yc-Apigateway-Websocket-Message-Id": string;
    } & Headers;

    type DisconnectHeaders = {
        "X-Yc-Apigateway-Websocket-Disconnect-Reason": string;
        "X-Yc-Apigateway-Websocket-Disconnect-Status-Code": string;
    } & Headers;

    type Headers = {
        "X-Yc-Apigateway-Websocket-Connected-At": string;
        "X-Yc-Apigateway-Websocket-Connection-Id": string;
        "X-Yc-Apigateway-Websocket-Event-Type": EventType;
    } & Record<string, string>;

    type EventType = "MESSAGE" | "CONNECT" | "DISCONNECT";

    type RequestContext<E extends EventType> = Http.RequestContext & {
        connectedAt: number;
        eventType: E;
        connectionId: string;
    };
}
