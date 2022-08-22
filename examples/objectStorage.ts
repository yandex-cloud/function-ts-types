import { Handler } from "../src";

export const handler: Handler.ObjectStorage = (event) => {
    for (const message of event.messages) {
        switch (message.event_metadata.event_type) {
            case "yandex.cloud.events.storage.ObjectCreate":
                console.log("Object created");
                break;
            case "yandex.cloud.events.storage.ObjectDelete":
                console.log("Object deleted");
                break;
            case "yandex.cloud.events.storage.ObjectUpdate":
                console.log("Object updated");
                break;
        }
    }
    return {
        statusCode: 200,
        body: event.messages[0].details.bucket_id,
    };
};
