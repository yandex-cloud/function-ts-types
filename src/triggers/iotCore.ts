import { Trigger } from "./trigger";

export namespace IotCore {
    enum Types {
        QueueMessage = "IoTMessage",
    }

    type Metadata = {
        created_at: string;
    };

    type Details = {
        registry_id: string;
        device_id: string;
        mqtt_topic: string;
        payload: string;
    };

    export type Event = Trigger.Event<`iot.${Types}`, Details, Metadata>;
}
