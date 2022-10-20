import { makeAutoObservable, autorun, toJS } from 'mobx';

function autoSave(store, save) {
  let firstRun = true;
  autorun(() => {
    const json = JSON.stringify(toJS(store));
    if (!firstRun) {
      save(json);
    }
    firstRun = false;
  });
}

export default class CartStore {
  constructor() {    
    this._devices = [];
    makeAutoObservable(this);
    this.load();
    autoSave(this, this.save.bind(this));
  }

  load() {
    if (sessionStorage.getItem('cartData')) {
      const data = JSON.parse(sessionStorage.getItem('cartData'));
      this._devices = data._devices;
    }
  }

  save(json) {
    sessionStorage.setItem('cartData', json);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  addDevice(device) {
    const deviceInCart = this._devices.find(_d => _d.id === device.id);
    if (deviceInCart) {
      this._devices = this._devices.map(_d =>
        _d.id === device.id ?
        {...deviceInCart, amount : deviceInCart.amount + 1} :
        _d
      );
    } else {
      this._devices.push({...device, amount: 1});
    }
  }

  decrementDevice(device) {
    const deviceInCart = this._devices.find(_d => _d.id === device.id);
    if (deviceInCart.amount === 1) {
      this._devices = this._devices.filter(_d => _d.id !== device.id);
    } else if (deviceInCart) {
      this._devices = this._devices.map(_d =>
        _d.id === device.id ?
        {...deviceInCart, amount : deviceInCart.amount - 1} :
        _d
      );
    }
  }

  removeDevice(device) {
    this._devices = this._devices.filter(_d => _d.id !== device.id);
  }

  get devices() {
    return this._devices;
  }

  get amount() {
    return this._devices.reduce((sum, el) => {return sum + el.amount}, 0);
  }

  get fullPrice() {
    return this._devices.reduce((sum, el) => {return sum + el.amount * el.price}, 0);
  }
}