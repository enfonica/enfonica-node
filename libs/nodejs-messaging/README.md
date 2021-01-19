# Enfonica Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services.

## Requirements

The library supports Node.js from version v10.00.0 to the latest LTS.

## Authentication

Define the location of your service account key file when creating an instance of the library. For example:

``` js
const client = new messaging.MessagesClient({ keyFile: '/path/to/key.json' })
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Getting Started

``` js
// create client
const messaging = require('.')
const client = new messaging.MessagesClient({ keyFile: '/path/to/key.json' })

client.getMessage({name: ''}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```

## 📚 Documentation

Visit our Documentation Site for further information regarding:
 - Messaging APIs: 

## ❤️ Support

If you require technical support, please contact our support team at [developers.enfonica.com](https://developers.enfonica.com)
