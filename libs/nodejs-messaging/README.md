# Enfonica Messaging Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services. This library uses version 'v1' of the Enfonica Messaging API. View the docs for more details: [Enfonica Docs](https://enfonica.com/docs/)

## Supported version

The library supports the version 10 and above of Node.js.

### Installing the client library

```bash
npm install @enfonica/messaging
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
import messaging from '@enfonica/messaging';
const client = new messaging.MessagesClient({
  keyFile: process.env.ENFONICA_APPLICATION_CREDENTIALS
});

// send an SMS
client.createMessage({
    parent: 'projects/my-example-project', 
    message: {
        to: '+61499888777', 
        from: 'Enfonica', 
        body: 'Hello world!'
    }
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```