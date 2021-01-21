const numbering = require('../libs/nodejs-numbering/build/src');
const messaging = require('../libs/nodejs-messaging/build/src');
const voice = require('../libs/nodejs-voice/build/src');

const PhoneNumberInstancesClient = new numbering.PhoneNumberInstancesClient({
  keyFile: './1608242628700.json',
});

const PhoneNumbersClient = new numbering.PhoneNumbersClient({
  keyFile: './1608242628700.json',
});

const MessagesClient = new messaging.MessagesClient({
  keyFile: './1608242628700.json',
});

const CallsClient = new voice.CallsClient({
  keyFile: './1608242628700.json',
});

const StreamsClient = new voice.StreamsClient({
  keyFile: './1608242628700.json',
});

const RecordingsClient = new voice.RecordingsClient({
  keyFile: './1608242628700.json',
});

// Recordings Client Example

RecordingsClient.listRecordings({ parent: 'projects/first' }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
