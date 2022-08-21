type HttpMethod = 'OPTIONS' | 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FunctionContext {
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

export interface FunctionResult {
    statusCode: number;
    headers?: Record<string, string>;
    multiValueHeaders?: Record<string, string[]>;
    body?: string;
    isBase64Encoded?: boolean;
}

export interface FunctionEvent {
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

type FunctionSyncHandler<Event> = (event: Event, context: FunctionContext) => FunctionResult;
type FunctionAsyncHandler<Event> = (event: Event, context: FunctionContext) => Promise<FunctionResult>;

export type FunctionHandler<Event> = FunctionSyncHandler<Event> | FunctionAsyncHandler<Event>;
