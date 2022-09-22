# Enfonica Numbering Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services. This library uses version 'v1beta1' of the Enfonica Numbering API. View the docs for more details: [Enfonica Docs](https://enfonica.github.io/enfonica-node/numbering/)

## Supported version

The library supports the version 10 and above of Node.js.

### Installing the client library

```bash
npm install @enfonica/numbering
```
## Authentication

Define the environment variable `ENFONICA_APPLICATION_CREDENTIALS` to be the location of your service account key file, alternatively add this to a .env file. For example:
```
set ENFONICA_APPLICATION_CREDENTIALS=/path/to/key.json
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).


## Example

```js
import numbering from '@enfonica/numbering';
const client = new numbering.PhoneNumberInstancesClient({
  keyFile: process.env.ENFONICA_APPLICATION_CREDENTIALS
});

(async () => {
    try {
        const request = {
            // Request body
        }
        const iterable = messagesClient.listPhoneNumberInstancesAsync(request);
        for await (const response of iterable) {
            // process response
        }
    } catch (error) {
        console.log(error);
    }
})();
```