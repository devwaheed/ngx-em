import { Injectable } from '@angular/core';

@Injectable()
export class AemService {

  private keys = {};

  constructor() { }

  public setValue(key, value) {
    this.keys[key] = value;
  }
  getValue(key){
    return this.keys[key];
  }

  public toggleMessage(key) {
    this.keys[key].show = !this.keys[key].show;
  }

  public show(key) {
    this.keys[key].show = true;
  }

  public hide(key) {
    this.keys[key].show = false;
  }
}
