export namespace Budget {
    type Message = {
        billing_account_id: string;
        budget_id: string;
        budget_display_name: string;
        amount: number;
        currency: string; // TODO should be enum, e.g. RUB,
        period: string; // TODO also enum maybe, e.g "2021"?
        budgeted_amount: number;
        threshold_amount: number;
        threshold_type: string; // TODO shoul be enum, e.g. amount
    };

    export type Event = {
        messages: Message[];
    };
}
