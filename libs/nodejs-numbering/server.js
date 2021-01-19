const numbering = require('.')
const client = new numbering.PhoneNumberInstancesClient({ keyFile: './1608242628700.json' })
client.listPhoneNumberInstances({name: 'projects/first'}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})