import Context from "./context";

type FunctionSyncHandler<Event, Result> = (
    event: Event,
    context: Context
) => Result;
type FunctionAsyncHandler<Event, Result> = (
    event: Event,
    context: Context
) => Promise<Result>;

export type FunctionHandler<Event, Result = unknown> =
    | FunctionSyncHandler<Event, Result>
    | FunctionAsyncHandler<Event, Result>;
