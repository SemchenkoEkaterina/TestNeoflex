import { makeAutoObservable } from 'mobx';

export default class DevicesStore {
  constructor() {
    this._devices = [
      {id:1, type:"Беспроводные наушники", title: "Apple BYZ S852I", price: 2927, rate: 4.7, img: "device1.png"},
      {id:2, type:"Беспроводные наушники", title: "Apple EarPods", price: 2327, rate: 4.5, img: "device2.png"},
      {id:3, type:"Беспроводные наушники", title: "Apple EarPods", price: 2327, rate: 4.5, img: "device3.png"},
      {id:4, type:"Беспроводные наушники", title: "Apple BYZ S852I", price: 2927, rate: 4.7, img: "device1.png"},
      {id:5, type:"Беспроводные наушники", title: "Apple EarPods", price: 2327, rate: 4.5, img: "device2.png"},
      {id:6, type:"Беспроводные наушники", title: "Apple EarPods", price: 2327, rate: 4.5, img: "device3.png"},
      {id:7, type:"Наушники", title: "Apple AirPods", price: 9527, rate: 4.7, img: "device4.png"},
      {id:8, type:"Наушники", title: "GERLAX GH-04", price: 6527, rate: 4.7, img: "device5.png"},
      {id:9, type:"Наушники", title: "BOROFONE BO4", price: 7527, rate: 4.7, img: "device6.png"}
    ];
    
    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get devices() {
    return this._devices;
  }
}