import { Trigger } from "./trigger";

export namespace MessageQueue {
    enum Types {
        QueueMessage = "QueueMessage",
    }

    type Metadata = {
        created_at: string;
    };

    type MessageAttributeValue = {
        dataType: "StringValue" | string; // TODO possible types
        stringValue: string;
    };

    type Details = {
        queue_id: string;
        message: {
            message_id: string;
            md5_of_body: string;
            body: string;
            attributes: {
                SentTimestamp: string;
            };
            message_attributes: Record<string, MessageAttributeValue>;
            md5_of_message_attributes: string;
        };
    };

    export type Event = Trigger.Event<
        `messagequeue.${Types}`,
        Details,
        Metadata
    >;
}
