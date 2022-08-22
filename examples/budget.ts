import { Handler } from "../src";

export const handler: Handler.Budget = (event) => {
    return {
        statusCode: 200,
        body: event.messages[0].budgeted_amount,
    };
};
