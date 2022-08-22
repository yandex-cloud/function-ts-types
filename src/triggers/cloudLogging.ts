import { Trigger } from "./trigger";

export namespace CloudLogging {
    enum Types {
        LoggingMessageBatch = "LoggingMessageBatch",
    }

    type Metadata = {
        created_at: {
            seconds: number;
            nanos: number;
        };
    };

    type Message = {
        resource: {
            type: "serverless.function" | string; // TODO find resource types like
            id: string;
        };
        timestamp: string;
        level: "INFO" | string; // TODO add enum
        message: string;
        json_payload: Record<string, any>; // TODO is there better typing?
    };

    type Details = {
        messages: Message[];
    };

    export type Event = Trigger.Event<
        `serverless.triggers.${Types}`,
        Details,
        Metadata
    >;
}
