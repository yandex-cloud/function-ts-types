import { FunctionHandler } from "../src"
import { Timer } from "../src/triggers"

export const handler: FunctionHandler<Timer> = (event) => {
  return {
    statusCode: 200,
    body: event.messages[0].event_metadata.event_type
  }
}