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
            type: "serverless.function"; // TODO find resource types
            id: string;
        };
        timestamp: string;
        level: "INFO"; // TODO add enum
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
