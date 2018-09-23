const nfetch = require('node-fetch');

class DiscordListAppClient {

  constructor(token, id) {
    if (typeof token !== 'string') throw new TypeError('The token must be a string!');
    if (typeof id !== 'string') throw new TypeError('The ID must be a string!');   
    
    this._id = id;
    this.auth = token;
    this.url = 'https://bots.discordlist.app/api';
  }

  getGuildCount(id) {
    if (typeof id !== 'string') throw new TypeError('The ID must be a string!');
    return new Promise((resolve, reject) => {
      nfetch(`${this.url}/bot/${id}/stats`)
        .then(res => res.json())
        .then(body => resolve(body))
        .catch(err => reject(err));
    });
  }

  getBot(id) {
    if (typeof id !== 'string') throw new TypeError('The ID must be a string!');
    return new Promise((resolve, reject) => {
      nfetch(`${this.url}/bot/${id}`)
        .then(res => res.json())
        .then(body => resolve(body))
        .catch(err => reject(err));
    });
  }

  getAllBots() {
    return new Promise((resolve, reject) => {
      nfetch(`${this.url}/bots`)
        .then(res => res.json())
        .then(body => resolve(body))
        .catch(err => reject(err));
    });
  }

  postGuildCount(count) {
    if (typeof count !== 'string') throw new TypeError('The ID must be a string!');
    return new Promise((resolve, reject) => {
      nfetch(`${this.url}/bot/${this._id}/stats`, { method: 'POST', headers: {'Authorization': this.auth, 'Content-Type': 'application/json'} })
        .then(res => res.json())
        .then(body => resolve(body))
        .catch(err => reject(err));
    });
  }

  getVotes() {
    return new Promise((resolve, reject) => {
      nfetch(`${this.url}/bot/${this._id}/votes`, { method: 'GET', headers: {'Authorization': this.auth, 'Content-Type': 'application/json'} })
        .then(res => res.json())
        .then(body => resolve(body))
        .catch(err => reject(err));
    });
  }

}

module.exports = DiscordListAppClient;