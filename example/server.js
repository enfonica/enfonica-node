const numbering = require('./libs/nodejs-numbering/build/src');
const messaging = require('../libs/nodejs-messaging/build/src');

const client = new numbering.PhoneNumberInstancesClient({
  keyFile: './1608242628700.json',
});
const client2 = new messaging.MessagesClient({
  keyFile: './1608242628700.json',
});
client
  .listPhoneNumberInstances({ parent: 'projects/first' })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
client2.createMessage({
  parent: '', 
  message: {
    to: '', 
    from: '', 
    body: ''
  }
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
