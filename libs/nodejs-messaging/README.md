# Enfonica Messaging Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services.

## Supported version

The library supports the version 10 and above of Node.js.

## Authentication

Define the location of your service account key file when creating an instance of the library. For example:

```
const messaging = require('./libs/nodejs-messaging/build/src');
const client = new messaging.MessagesClient({
  keyFile: './1608242628700.json',
});
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Example

```cs
// create client
const messaging = require('.');
const client = new messaging.MessagesClient({
  keyFile: './1608242628700.json',
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