const messaging = require('.')
//const googleAuth = require('./googleauth.js')
const client = new messaging.MessagesClient({ keyFile: './1608242628700.json' })
// client.getProjectId().then(res => {
//   console.log(res);
// })
client.getMessage({name: 'projects/first/messages/r8l028d8u3y0v26pdtpjes1j6671mu'}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})