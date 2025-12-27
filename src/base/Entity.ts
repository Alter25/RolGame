import { TypeStats } from "../types/types";
import Level from "./Level";
import { State } from "./State";

export class Entity implements TypeStats {
  name: string;
  level: Level;
  hp: State;
  mp: State;
  stam: State;
  constructor(name: string) {
    this.name = name;
    this.level = new Level(
      "Nivel",
      100,
      1,
      1,
      new State("Experiencia", 100, 0, 0)
    );
    this.hp = new State("vida", 100, 0, 100, 10);
    this.mp = new State("Mana", 100, 0, 100, 10);
    this.stam = new State("Estamina", 100, 0, 100, 10);
  }
  toString() {
    return `nombre: ${this.name}; 
    nivel: ${this.level}
    ${this.hp.toString()}
    ${}`
  }
}
