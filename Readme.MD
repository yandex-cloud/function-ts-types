# TypeScript type definitions for Yandex Cloud Functions

### Installation
`npm install -D @yandex-cloud/function-types`

### Usage

```typescript
import { Handler } from '@yandex-cloud/function-types'

export const handler: Handler = async (event, context) => {
    // do something
    
    return {
        statusCode: 200,
        body: 'hello world!'
    };
}
```
