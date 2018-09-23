const discordlistapp = require('./src/main.js');
const client = new discordlistapp.Client(' ', ' ');

client.getBot('341980888239702017').then(a => {
  console.log(a.name + ' is using ' + a.library);
});