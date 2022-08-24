export namespace DataStreams {
    type Message = Record<string, any>;
    export type Event = {
        messages: Message[];
    };
}
