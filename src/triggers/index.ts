import type BudgetExample from "./budget.json";
import type CloudLoggingExample from "./cloudLogging.json";
import type ContainerRegistryExample from "./containerRegistry.json";

export type ContainerRegistry = typeof ContainerRegistryExample;
export type CloudLogging = typeof CloudLoggingExample;
export type Budget = typeof BudgetExample;
export * from "./dataStreams";
export * from "./iotCore";
export * from "./messageQueue";
export * from "./objectStorage";
export * from "./timer";
