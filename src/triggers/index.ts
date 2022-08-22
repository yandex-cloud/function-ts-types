import type BudgetExample from "./budget.json";
import type CloudLoggingExample from "./cloudLogging.json";
import type ContainerRegistryExample from "./containerRegistry.json";
import type DataStreamsExample from "./dataStreams.json";

export type ContainerRegistry = typeof ContainerRegistryExample;
export type CloudLogging = typeof CloudLoggingExample;
export type Budget = typeof BudgetExample;
export type DataStreams = typeof DataStreamsExample;
export * from "./iotCore";
export * from "./messageQueue";
export * from "./objectStorage";
export * from "./timer";
