# Enfonica Voice Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services. This library uses version 'v1beta1' of the Enfonica Voice API. View the docs for more details: [Enfonica Docs](https://enfonica.com/docs/)

## Supported version

The library supports the version 10 and above of Node.js.

### Installing the client library

```bash
npm install @enfonica/voice
```

## Authentication

Define the location of your service account key file when creating an instance of the library. For example:

```js
import voice from '@enfonica/voice';
const client = new voice.RecordingsClient({
  keyFile: './PATH/TO/KEYFILE.json'
});
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Example

```js
// create client
import voice from '@enfonica/voice';
const client = new voice.RecordingsClient({
  keyFile: './PATH/TO/KEYFILE.json'
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