import { Handler } from "../src";

export const handler: Handler.IotCore = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.mqtt_topic,
    };
};
