import type BudgetExample from "./budget.json";
import type CloudLoggingExample from "./cloudLogging.json";

export type CloudLogging = typeof CloudLoggingExample;
export type Budget = typeof BudgetExample;
export * from "./containerRegistry";
export * from "./dataStreams";
export * from "./iotCore";
export * from "./messageQueue";
export * from "./objectStorage";
export * from "./timer";
