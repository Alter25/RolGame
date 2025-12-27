import { State } from "./State";

export default class Level extends State {
  exp: State;
  constructor(name: string, max = 100, min = 0, value = 0, exp: State) {
    super(name, max, min, value);
    this.exp = exp;
  }
}
