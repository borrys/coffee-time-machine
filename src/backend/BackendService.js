import 'whatwg-fetch';
const jsonHeaders = {'content-type': 'application/json'}

class BackendService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    const wsBaseUrl = baseUrl.replace(/^http/, 'ws');
    this.websocket = new WebSocket(`${wsBaseUrl}/events`);
  }

  getArrivals() {
    return fetch(`${this.baseUrl}/arrivals`).then(res => res.json());
  }

  addArrival(name, time) {
    return fetch(`${this.baseUrl}/arrivals`, {
      method: 'POST',
      body: JSON.stringify({name, time}),
      headers: jsonHeaders
    });
  }

  getCoffeeTime() {
    return fetch(`${this.baseUrl}/coffeeTime`).then(res => res.json());
  }

  setCoffeeTime(time) {
    return fetch(`${this.baseUrl}/coffeeTime`, {
      method: 'POST',
      body: JSON.stringify( {time} ),
      headers: jsonHeaders
    });
  }

  onArrivalsChange(callback) {
    this._onEvent('ARRIVAL_DECLARED', callback);
  }

  onCoffeeTimeChange(callback) {
    this._onEvent('COFFEE_TIME_SET', callback);
  }

  _onEvent(eventName, callback) {
    this.websocket.onmessage= event => {
      if (event.data === eventName) {
        callback();
      }
    };
  }
}

export default new BackendService('http://localhost:5050');
