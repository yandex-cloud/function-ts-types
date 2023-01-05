import { Handler } from "../src";

export const handler: Handler.MessageQueue = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0]?.details.message.body.toString() || "",
    };
};
