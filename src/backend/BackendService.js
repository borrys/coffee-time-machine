import 'whatwg-fetch';
const jsonHeaders = {'content-type': 'application/json'}

class BackendService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    const wsBaseUrl = baseUrl.replace(/^http/, 'ws');
    this.websocket = new WebSocket(`${wsBaseUrl}/events`);
    this.eventHandlers = {};
    this.websocket.onmessage = this._onMessage.bind(this);
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
    this._registerHandler('ARRIVAL_DECLARED', callback);
  }

  onCoffeeTimeChange(callback) {
    this._registerHandler('COFFEE_TIME_SET', callback);
  }

  _onMessage(event) {
    const handlers = this.eventHandlers[event.data] || [];
    handlers.forEach(h => h());
  }

  _registerHandler(event, callback) {
    const handlers = this.eventHandlers[event] || [];
    this.eventHandlers[event] = handlers.concat([callback]);
  }
}

export default new BackendService('http://localhost:5050');
