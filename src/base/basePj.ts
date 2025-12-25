import { TypeStats } from "../types/types";

export class BaseCharacter {
  name: string;
  stats: TypeStats;
  constructor(name: string, stats: TypeStats) {
    this.name = name;
    this.stats = stats;
  }
}
