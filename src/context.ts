interface Context {
    functionName: string;
    functionVersion: string;
    memoryLimitInMB: string;
    requestId: string;
    token?: {
        access_token: string;
        expires_in: number;
        token_type: string;
    };

    getPayload(): unknown;
    getRemainingTimeInMillis(): number;
}

export default Context;
