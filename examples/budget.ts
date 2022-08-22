import { Budget, FunctionHandler } from "../src";

export const handler: FunctionHandler<Budget> = (event) => {
    return {
        statusCode: 200,
        body: event.messages,
    };
};
