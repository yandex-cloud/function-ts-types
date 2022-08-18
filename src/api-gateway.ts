import {FunctionContext, FunctionEvent, FunctionResult} from './function';

export interface AuthorizerResult {
    isAuthorized: boolean;
    context: Record<string, any>
}

type PickedFunctionEventProps = Pick<FunctionEvent,
    'httpMethod' |
    'headers' |
    'queryStringParameters' |
    'requestContext'
>

export interface AuthorizerEvent extends PickedFunctionEventProps {
    resource: string;
    cookies: Record<string, string>;
}

type AuthorizerSyncHandler = (event: AuthorizerEvent, context: FunctionContext) => AuthorizerResult;
type AuthorizerAsyncHandler = (event: AuthorizerEvent, context: FunctionContext) => Promise<AuthorizerResult>;

export type AuthorizerHandler = AuthorizerAsyncHandler | AuthorizerSyncHandler;
