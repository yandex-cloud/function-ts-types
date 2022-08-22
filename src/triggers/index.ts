import type BudgetExample from "./budget.json";
import type CloudLoggingExample from "./cloudLogging.json";
import type ContainerRegistryExample from "./containerRegistry.json";
import type DataStreamsExample from "./dataStreams.json";
import type IotCoreExample from "./iotCore.json";
import type MessageQueueExample from "./messageQueue.json";

export type MessageQueue = typeof MessageQueueExample;
export type ContainerRegistry = typeof ContainerRegistryExample;
export type CloudLogging = typeof CloudLoggingExample;
export type IotCore = typeof IotCoreExample;
export type Budget = typeof BudgetExample;
export type DataStreams = typeof DataStreamsExample;
export * from "./objectStorage";
export * from "./timer";
