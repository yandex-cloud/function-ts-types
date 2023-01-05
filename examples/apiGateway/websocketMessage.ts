import { Handler } from "./../";

export const handler: Handler.ApiGateway.WebSocket.Message = (event) => {
    console.log(event.requestContext.connectionId);
    return {
        statusCode: 200,
    };
};
