export class Stats {
  name: string;
  max: number;
  min: number;
  value: number;
  constructor(name: string, max: number, min: number = 0, value: number) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.value = value > min && value < max ? value : max;
  }
  get Name() {
    return this.name;
  }
}
