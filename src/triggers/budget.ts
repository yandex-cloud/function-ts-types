export namespace Budget {
    type Message = {
        billing_account_id: string;
        budget_id: string;
        budget_display_name: string;
        amount: number;
        currency: "RUB"; // TODO should be enum,
        period: "2021";
        budgeted_amount: number;
        threshold_amount: number;
        threshold_type: "amount"; // TODO might be enum
    };

    export type Event = {
        messages: Message[];
    };
}
