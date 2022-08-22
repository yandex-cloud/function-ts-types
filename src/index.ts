import type FunctionContext from "./context";

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
