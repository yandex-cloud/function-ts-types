import { Handler } from "./../";

export const handler: Handler.ApiGateway.WebSocket.Connect = (event) => {
    console.log(event.requestContext.connectionId);
    return {
        statusCode: 200,
    };
};
