# TypeScript type definitions for Yandex Cloud Functions

### Installation
`npm install -D @yandex-cloud/function-types`

### Usage

```typescript
import { FunctionHandler, Http } from '@yandex-cloud/function-types'

export const handler: FunctionHandler<Http.Event, Http.Result> = async (event, context) => {
    // do something
    
    return {
        statusCode: 200,
        body: 'hello world!'
    };
}
```
