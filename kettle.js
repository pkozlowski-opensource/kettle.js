import {Electricity} from 'electricity.js/electricity';

class Kettle {

  constructor(electricity: Electricity) {
    this.electricity = electricity;
  }

  on() {
    this.electricity.startUsing(this);
  }

  off() {
    this.electricity.stopUsing(this);
  }

  voltage() {
    return 230;
  }
}