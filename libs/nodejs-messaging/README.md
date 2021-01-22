# Enfonica Messaging Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services. This library uses version 'v1' of the Enfonica Messaging API. View the docs for more details: [Enfonica Docs](https://enfonica.com/docs/)

## Supported version

The library supports the version 10 and above of Node.js.

### Installing the client library

```bash
npm install @enfonica/messaging
```

## Authentication

Define the location of your service account key file when creating an instance of the library. For example:

```js
import messaging from '@enfonica/messaging';
const client = new messaging.MessagesClient({
  keyFile: './PATH/TO/KEYFILE.json'
});
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Example

```js
// create client
import messaging from '@enfonica/messaging';
const client = new messaging.MessagesClient({
  keyFile: './PATH/TO/KEYFILE.json'
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