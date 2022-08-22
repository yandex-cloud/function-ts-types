import { ContainerRegistry, FunctionHandler } from "../src";

export const handler: FunctionHandler<ContainerRegistry> = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].details.image_digest,
    };
};
