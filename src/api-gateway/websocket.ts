import type { Http } from "../http";

export namespace WebSocket {
    export type Message = {
        resource: string;
        path: string;
        pathParameters: Record<string, string>;
        headers: Headers & Record<string, string>;
        multiValueHeaders: {
            [K in keyof Headers]: Headers[K][];
        };
        body: string;
        isBase64Encoded: boolean;
        requestContext: RequestContext;
        parameters: Record<string, string>;
        multiValueParameters: Record<string, string[]>;
        operationId: string;
    };
    export type EventType = "MESSAGE";
    export type Headers = {
        "X-Yc-Apigateway-Websocket-Connected-At": string;
        "X-Yc-Apigateway-Websocket-Connection-Id": string;
        "X-Yc-Apigateway-Websocket-Event-Type": EventType;
        "X-Yc-Apigateway-Websocket-Message-Id": string;
    };
    type RequestContext = Http.RequestContext & {
        connectedAt: number;
        eventType: EventType;
        messageId: string;
        connectionId: string;
    };
}
