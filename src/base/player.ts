import { State } from "./State";
import { Entity } from "./Entity";

export class Player extends Entity {
  constructor(name: string, stats: State) {
    super(name);
  }
  
}
