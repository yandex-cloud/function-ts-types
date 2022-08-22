import { Trigger } from "./trigger";

export namespace ContainerRegistry {
    enum Types {
        CreateImage = "CreateImage",
        CreateImageTag = "CreateImageTag",
        DeleteImageTag = "DeleteImageTag",
    }

    type Metadata = {
        created_at: string;
    } & Trigger.Location &
        Trigger.TracingContext;

    type Details = {
        image_digest: string;
        image_id: string;
        registry_id: string;
        repository_name: string;
        tag: string;
    };

    export type Event = Trigger.Event<
        `containerregistry.${Types}`,
        Details,
        Metadata
    >;
}
