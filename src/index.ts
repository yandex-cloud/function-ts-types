import type FunctionContext from "./context";
export * from "./api-gateway";
export * from "./http";
export * from "./triggers";

type FunctionSyncHandler<Event, Result> = (
    event: Event,
    context: FunctionContext
) => Result;
type FunctionAsyncHandler<Event, Result> = (
    event: Event,
    context: FunctionContext
) => Promise<Result>;

export type FunctionHandler<Event, Result = unknown> =
    | FunctionSyncHandler<Event, Result>
    | FunctionAsyncHandler<Event, Result>;
