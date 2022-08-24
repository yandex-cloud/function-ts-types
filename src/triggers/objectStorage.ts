import { Trigger } from "./trigger";

export namespace ObjectStorage {
    enum Types {
        ObjectCreate = "ObjectCreate",
        ObjectDelete = "ObjectDelete",
        ObjectUpdate = "ObjectUpdate",
    }

    type Metadata = {
        created_at: string;
    } & Trigger.Location &
        Trigger.TracingContext;

    type Details = {
        bucket_id: string;
        object_id: string;
    };

    export type Event = Trigger.Event<`storage.${Types}`, Details, Metadata>;
}
