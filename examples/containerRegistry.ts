import { Handler } from "../src";

export const handler: Handler.ContainerRegistry = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.image_digest,
    };
};
