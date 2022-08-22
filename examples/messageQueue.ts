import { FunctionHandler } from "../src";
import { MessageQueue } from "../src/triggers";

export const handler: FunctionHandler<MessageQueue> = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.message.body,
    };
};
