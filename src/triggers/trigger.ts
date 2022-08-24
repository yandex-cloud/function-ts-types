export namespace Trigger {
    type Type = string;
    type Details = Record<string, any>;
    type ExtraMetadata = Record<string, any>;

    export type Event<
        T extends Type,
        D extends Details,
        M extends ExtraMetadata = {}
    > = {
        messages: Message<T, D, M>[];
    };

    export type Message<
        T extends Type,
        D extends Details,
        M extends ExtraMetadata
    > = {
        event_metadata: Metadata<T> & M;
        details: D;
    };

    export type Metadata<T extends Type> = {
        event_id: string;
        event_type: `yandex.cloud.events.${T}`;
    };

    export type Location = {
        cloud_id: string;
        folder_id: string;
    };

    export type TracingContext = {
        tracing_context: {
            parent_span_id: string;
            span_id: string;
            trace_id: string;
        };
    };
}
