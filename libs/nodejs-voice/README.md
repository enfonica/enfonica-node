# Enfonica Voice Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services. This library uses version 'v1beta1' of the Enfonica Voice API. View the docs for more details: [Enfonica Docs](https://enfonica.github.io/enfonica-node/voice/)

## Supported version

The library supports the version 10 and above of Node.js.

### Installing the client library

```bash
npm install @enfonica/voice
```

## Authentication

Define the environment variable `ENFONICA_APPLICATION_CREDENTIALS` to be the location of your service account key file, alternatively add this to a .env file. For example:
```
set ENFONICA_APPLICATION_CREDENTIALS=/path/to/key.json
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).


## Example

```js
// create client
import voice from '@enfonica/voice';
const client = new voice.RecordingsClient({
  keyFile: process.env.ENFONICA_APPLICATION_CREDENTIALS
});

// list recordings
client.listRecordings({
    parent: 'projects/my-example-project'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```