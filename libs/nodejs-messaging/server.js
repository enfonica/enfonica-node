const messaging = require('.')
// const messagesclient = new messaging.MessagesClient({ keyFile: './1608242628700.json' })
const unsubscribersClient = new messaging.UnsubscribersClient({ keyFile: './1608242628700.json' })
// messagesclient.listMessages({parent: 'projects/first'}).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

unsubscribersClient.listUnsubscribers({parent: 'projects/first'}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})