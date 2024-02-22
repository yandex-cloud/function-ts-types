type HttpMethod =
    | "OPTIONS"
    | "HEAD"
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";

export namespace Http {
    export interface Result {
        statusCode: number;
        headers?: Record<string, string>;
        multiValueHeaders?: Record<string, string[]>;
        body?: string;
        isBase64Encoded?: boolean;
    }

    export interface Event {
        httpMethod: HttpMethod;
        headers: Record<string, string>;
        multiValueHeaders: Record<string, string[]>;
        queryStringParameters: Record<string, string>;
        multiValueQueryStringParameters: Record<string, string[]>;
        requestContext: RequestContext & {
            authorizer?: unknown; // TODO: describe type
            apiGateway?: {
                operationContext: unknown;
            };
        };
        version: string;
        resource: string;
        path: string;
        pathParameters: Record<string, string>;
        body: string;
        isBase64Encoded: boolean;
        parameters: Record<string, string>;
        multiValueParameters: Record<string, string[]>;
        operationId: string;
    }

    export type RequestContext = {
        identity: {
            sourceIp: string;
            userAgent: string;
        };
        httpMethod: HttpMethod;
        requestId: string;
        requestTime: string;
        requestTimeEpoch: number;
    };
}
