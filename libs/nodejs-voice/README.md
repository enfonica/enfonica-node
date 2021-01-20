# Enfonica Numbering Client Library for Node.js

Node.js idiomatic client library for [Enfonica](https://enfonica.com/) services.

## Supported version

The library supports the version 10 and above of Node.js.

## Authentication

Define the location of your service account key file when creating an instance of the library. For example:

```
const numbering = require('.');
const client = new numbering.PhoneNumberInstancesClient({
  keyFile: './1608242628700.json',
});
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Example

```cs
// create client
const numbering = require('.');
const client = new numbering.PhoneNumberInstancesClient({
  keyFile: './1608242628700.json',
});

// send an SMS
client.listPhoneNumberInstances({
    parent: 'projects/my-example-project'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```