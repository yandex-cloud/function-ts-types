import { Handler } from "./../";

export const handler: Handler.ApiGateway.WebSocket.Disconnect = (event) => {
    console.log(event.requestContext.disconnectStatusCode);
    return {
        statusCode: 200,
    };
};
