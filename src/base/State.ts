export class State {
  name: string;
  upgradeFactor: number;
  max: number;
  min: number;
  value: number;
  constructor(
    name: string,
    max: number,
    min: number = 0,
    value: number,
    upgradeFactor: number = 10
  ) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.value = value > min && value < max ? value : max;
    this.upgradeFactor = upgradeFactor;
  }
  get Name() {
    return this.name;
  }
  set Value(value: number) {
    this.value = value;
  }
  upgrade() {
    if (this.value > this.max) {
      this.value = this.value - this.max;
      this.max = this.max * this.upgradeFactor;
    }
  }
  toString() {
    return `${this.name}: ${this.value}/${this.max}`;
  }
}
