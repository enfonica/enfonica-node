# Enfonica Client Libraries for Node.js

Node.js idiomatic client libraries for [Enfonica](https://enfonica.com/) services.

## Supported version

The libraries supports the version 10 and above of Node.js.

## Authentication

Define the environment variable `ENFONICA_APPLICATION_CREDENTIALS` to be the location of your service account key file, alternatively add this to a .env file. For example:
```
set ENFONICA_APPLICATION_CREDENTIALS=/path/to/key.json
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

## Available Client Libraries

### Enfonica Messaging Client Library for Node.js

This library uses version 'v1' of the Enfonica Messaging API. View the repo for more details: [nodejs-messaging](https://github.com/enfonica/enfonica-node/tree/master/libs/nodejs-messaging). To view the documentation [click here.](https://enfonica.github.io/enfonica-node/messaging/)

#### Installing the client library

```bash
npm install @enfonica/messaging
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

### Enfonica Numbering Client Library for Node.js

This library uses version 'v1beta1' of the Enfonica Numbering API. View the repo for more details: [nodejs-numbering](https://github.com/enfonica/enfonica-node/tree/master/libs/nodejs-numbering). To view the documentation [click here.](https://enfonica.github.io/enfonica-node/numbering/)

#### Installing the client library

```bash
npm install @enfonica/numbering
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).

### Enfonica Voice Client Library for Node.js

This library uses version 'v1beta' of the Enfonica Voice API. View the repo for more details: [nodejs-voice](https://github.com/enfonica/enfonica-node/tree/master/libs/nodejs-voice). To view the documentation [click here.](https://enfonica.github.io/enfonica-node/voice/)

#### Installing the client library

```bash
npm install @enfonica/voice
```

You can obtain a service account key file from the [Enfonica Console](https://console.enfonica.com/).
