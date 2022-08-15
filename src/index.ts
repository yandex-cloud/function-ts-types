type HttpMethod = 'OPTIONS' | 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface Context {
    functionName: string;
    functionVersion: string;
    memoryLimitInMB: string;
    requestId: string;
    token?: {
        access_token: string;
        expires_in: number;
        token_type: string;
    }

    getPayload(): unknown;
    getRemainingTimeInMillis(): number;
}

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
    requestContext: {
        identity: {
            sourceIp: string;
            userAgent: string;
        };
        httpMethod: HttpMethod;
        requestId: string;
        requestTime: string;
        requestTimeEpoch: number;
        authorizer?: unknown, // TODO: описать тип
        apiGateway?: {
            operationContext: unknown;
        }
    };
    body: string;
    isBase64Encoded: boolean;
}

type SyncHandler = (event: Event, context: Context) => Result;
type AsyncHandler = (event: Event, context: Context) => Promise<Result>;

export type Handler = SyncHandler | AsyncHandler;
