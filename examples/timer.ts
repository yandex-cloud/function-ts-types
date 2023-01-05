import { Handler } from "../src";

export const handler: Handler.Timer = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0]?.event_metadata.event_type.toString() || "",
    };
};
