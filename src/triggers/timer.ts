import { Trigger } from "./trigger";

export namespace Timer {
    enum Types {
        TimerMessage = "TimerMessage",
    }

    type Metadata = {
        created_at: string;
    } & Trigger.Location;

    type Details = {
        trigger_id: string;
    };

    export type Event = Trigger.Event<
        `serverless.triggers.${Types}`,
        Details,
        Metadata
    >;
}
