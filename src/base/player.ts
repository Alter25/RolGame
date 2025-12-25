import { TypeStats } from "../types/types";
import { BaseCharacter } from "./been";

export class Player extends BaseCharacter {
  constructor(name: string, stats: TypeStats) {
    super(name, stats);
  }
}
